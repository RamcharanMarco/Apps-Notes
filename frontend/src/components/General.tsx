import "../styles/general.css";
import { useEffect, useState, FC } from "react";
import EditGeneral from "./EditGeneral";
import { useParams } from "react-router-dom";
import { log } from "../helpers/helpers";

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
  data: data;
}

const General: FC<AppProps> = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [reply, setReply] = useState(false);
  const [replycontent, setReplycontent] = useState("");
  const [general, setGeneral] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    setName(data.name);
    setEmail(data.email);
    setTitle(data.title);
    setReply(data.reply_email);
    setReplycontent(data.reply_email_content);
  }, []);

  const toggleEditGeneral = (general: string) => {
    setGeneral(general);
    setShow(!show);
  };

  const hideEditGeneral = () => {
    setShow(false);
  };

  const toggle = () => {
    setShow2(!show2);
  };

  const { id } = useParams();

  return (
    <div className="general">
      {show ? (
        <EditGeneral
          hideEditGeneral={hideEditGeneral}
          general={general}
          data={data}
        />
      ) : null}
      <div className="top">
      <h1>General</h1>
      <button onClick={toggle}>toggle</button>
      </div>

      {show2 ? (
        <div className="general-container">
          <div className="general-box">
            <div>
              <h1>form id</h1>
              <p>{id}</p>
            </div>
            <button onClick={log}>copy</button>
          </div>
          <div className="general-box">
            <div>
              <h1>form name</h1>
              <p>{name}</p>
            </div>
            <button onClick={() => toggleEditGeneral(`name`)}>edit</button>
          </div>
          <div className="general-box">
            <div>
              <h1>email</h1>
              <p>{email}</p>
            </div>
            <button onClick={() => toggleEditGeneral(`email`)}>edit</button>
          </div>
          <div className="general-box">
            <div>
              <h1>title</h1>
              <p>{title}</p>
            </div>
            <button onClick={() => toggleEditGeneral(`title`)}>edit</button>
          </div>
          <div className="general-box">
            <div>
              <h1>reply email</h1>
              <p>{reply && data.premium ? `enabled` : `disabled`}</p>
            </div>
            {data.premium ? (
              <button onClick={() => toggleEditGeneral(`reply`)}>edit</button>
            ) : (
              <p>premium feature</p>
            )}
          </div>
          <div className="general-box">
            <div>
              <h1>reply email content</h1>
              <p>{reply && data.premium ? `enabled` : null}</p>
              <p>{`${replycontent.slice(0, 20)}...`}</p>
            </div>
            {data.premium ? (
              <button onClick={() => toggleEditGeneral(`replyemailcontent`)}>
                edit
              </button>
            ) : (
              <p>premium feature</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default General;
