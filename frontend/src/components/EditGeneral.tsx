import { FC, useEffect, useState } from "react";
import "../styles/editgen.css";
import { api } from "../api/api";
import { useStore } from "../store/store";
import { Link, useParams } from "react-router-dom";

interface data {
  bgcolor: string;
  fontcolor: string;
  inputbgcolor: string;
  btncolor: string;
  btntxtcolor: string;
  inputtxtcolor: string;
  name: string;
  email: string;
  title: string;
  reply_email: boolean;
  reply_email_content: string;
  namefield: boolean;
  emailfield: boolean;
  bodyfield: boolean;
  status: boolean;
  premium: boolean;
}

interface AppProps {
  hideEditGeneral: (params: any) => any;
  general: string;
  data: data;
}

const EditGeneral: FC<AppProps> = ({ hideEditGeneral, general, data }) => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [title, setTitle] = useState(``);
  const [reply, setReply] = useState(false);
  const [replycontent, setReplycontent] = useState(``);

  useEffect(() => {
    setName(data.name);
    setEmail(data.email);
    setTitle(data.title);
    setReply(data.reply_email);
    setReplycontent(data.reply_email_content);
  }, []);

  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);

  const { user } = useStore();
  const { formid } = useParams();

  const editData = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    //window.scrollTo(0, 0);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const obj = {
      bgcolor: data.bgcolor,
      fontcolor: data.fontcolor,
      inputbgcolor: data.inputbgcolor,
      btncolor: data.btncolor,
      btntxtcolor: data.btntxtcolor,
      inputtxtcolor: data.inputtxtcolor,
      name: name,
      email: email,
      title: title,
      reply_email: reply,
      reply_email_content: replycontent,
      namefield: data.namefield,
      emailfield: data.emailfield,
      bodyfield: data.bodyfield,
      status: data.status,
      premium: data.premium,
    };

    const response = await fetch(`${api}/api/user/forms/edit/${formid}`, {
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
      <div className="content">
        <div className="top">
          <h1>{general}</h1>
          <p>
            If you have a separate privacy policy for your website, please add
            the link here. It will then be made available to the users via the
            TRUENDO Privacy Center.
          </p>
        </div>
        <div className="center">
          {general === `name` ? (
            <>
              <p>edit name</p>
              <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          ) : general === `email` ? (
            <>
              <p>edit email</p>
              <input
                type="text"
                placeholder="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          ) : general === `title` ? (
            <>
              <p>edit title</p>
              <input
                type="text"
                placeholder="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </>
          ) : general === `reply` ? (
            <>
              <h1>Edit reply</h1>
              {reply
                ? `repy email is enabked for you`
                : `reply email is disabked fir you`}
              <button onClick={() => setReply(!reply)}>
                {reply ? `dsiable` : `enable`}
              </button>
            </>
          ) : general === `replyemailcontent` ? (
            <>
              <h1>Edit reply</h1>
              <textarea
                placeholder="name"
                onChange={(e) => setReplycontent(e.target.value)}
                value={replycontent}
              ></textarea>
            </>
          ) : null}
        </div>
        <div className="bottom">
          <button onClick={hideEditGeneral}>cancel</button>
          <button onClick={editData}>save</button>
        </div>
      </div>
    </div>
  );
};

export default EditGeneral;
