import { FC, useEffect, useState } from "react";
import '../../styles/confirmLogout.scss'
import { useLogout } from "../../hooks/useLogout";
import { useStore } from "../../store/store";
import { api } from "../../api/api";
import Loader from "../Loader";

interface AppProps {
  onCancel: (params: any) => any;
}

export const AddWebsiteModal: FC<AppProps> = ({ onCancel }) => {
  const { logout } = useLogout();

  const handleLogout = (e: any) => {
    e.preventDefault();
    logout();
  };

  const { user } = useStore();

  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);

  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [group, setGroup] = useState<string>("");

  const data = {
    draft: true,
    archive: true,
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const response = await fetch(`${api}/api/user/forms/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ name, content, group:`wwhhwh`, ...data }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
    if (response.ok) {
      console.log(json);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
      onCancel(true)
      window.location.reload()
    }
  };

  const [tech, setTech] = useState<string>("");

  const [list, setList] = useState<string[]>([
    "html",
    "ruby",
    "golang",
    "css",
    "javascript",
    "typescript",
    "node",
    "python",
    "ruby",
    "c#",
    "scss",
    "java",
    "php",
    "react",
    "vue",
    "angular",
    "nuxt",
    "next",
    "svelte",
    "webcomponents",
    "expressjs",
    "django",
  ]);



  return (
    <div className="confirmLogout">
      <div className="content">
      <h1>create form</h1>
      <form>
        <div className="createForm-box">
        <p>name</p>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="createForm-box">
        <p>group</p>
        <input
          type="text"
          placeholder="group"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
        />
                    {5 === 5
              ? list.map((item) => {
                  if (item.includes(tech)) {
                    return (
                      <div
                        className="item"
                        onClick={() => {
                          setTech("");
                        }}
                      >
                        {item}
                      </div>
                    );
                  } else {
                    return;
                  }
                })
              : null}
        </div>
        <div className="createForm-box">
        <p>content</p>
        <input
          type="text"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        </div>
        <button onClick={onCancel}>cancel</button>
        <button onClick={handleClick}>create</button>
        <div
          style={error ? { visibility: "visible" } : { visibility: "hidden" }}
          className="error"
        >
          <p>{error}</p>
        </div>
        {loading ? <Loader /> : null}
      </form>
      </div>
      </div>
  );
};