import { FC, useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { api } from "../../api/api";
import "../../styles/editgen.css";

interface data {
  _id: string;
  name: string;
  content: string;
  archive: boolean;
  group: string;
}

interface AppProps {
  hideNote: (params: any) => any;
  data: data;
}

export const Note: FC<AppProps> = ({ hideNote, data }) => {
  const [name, setName] = useState(``);
  const [content, setContent] = useState(``);
  const [group, setGroup] = useState(``);
  const archive = false;
  const [edit, setEdit] = useState<any>(false);

  useEffect(() => {
    setName(data.name);
    setContent(data.content);
    setGroup(data.group);
  }, []);

  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);

  const { user } = useStore();

  const editData = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    //window.scrollTo(0, 0);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const obj = {
      name: name,
      content: content,
      archive: archive,
      group: group,
    };

    const response = await fetch(`${api}/api/user/forms/edit/${data._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...obj }),
    });
    const json = await response.json();

    if (response.ok) {
      setLoading(false);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
      window.location.reload();
    }
    if (!response.ok) {
      setLoading(false);
      setError(json.error);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <div className="editGeneral">
      {edit ? (
        <div className="content">
          <button onClick={hideNote}>close</button>

          <div className="center">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />
            <input
              type="text"
              placeholder="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="bottom">
            <button onClick={() => setEdit(false)}>cancel</button>
            <button onClick={editData}>save</button>
          </div>
        </div>
      ) : (
        <div className="content">
          <button onClick={hideNote}>close</button>

          <div>
            <button>delete</button>
            <button onClick={() => setEdit(true)}>edit</button>
          </div>
          <div className="center">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />
            <input
              type="text"
              placeholder="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
