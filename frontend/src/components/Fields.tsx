import "../styles/fields.css";
import { useState, FC, useEffect } from "react";
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
  data: data;
  getData: () => any;
}

const Fields: FC<AppProps> = ({ data, getData }) => {
  //fileds
  const [namefield, setNamefield] = useState(true);
  const [emailfield, setEmailfield] = useState(true);
  const [bodyfield, setBodyfield] = useState(true);

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    setEmailfield(data.emailfield);
    setBodyfield(data.bodyfield);
    setNamefield(data.namefield);
  }, []);

  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);

  const { user } = useStore();
  const { formid } = useParams();

  const editData = async (e: any, type: string) => {
    e.preventDefault();
    setLoading(true);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";

    const rest = {
      bgcolor: data.bgcolor,
      fontcolor: data.fontcolor,
      inputbgcolor: data.inputbgcolor,
      btncolor: data.btncolor,
      btntxtcolor: data.btntxtcolor,
      inputtxtcolor: data.inputtxtcolor,
      name: data.name,
      email: data.email,
      title: data.title,
      reply_email: data.reply_email,
      reply_email_content: data.reply_email_content,
      namefield: type === `name` ? !namefield : namefield,
      emailfield: type === `email` ? !emailfield : emailfield,
      bodyfield: type === `body` ? !bodyfield : bodyfield,
      status: data.status,
      premium: data.premium,
    };

    const response = await fetch(`${api}/api/user/forms/edit/${formid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...rest }),
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
    <div className="fields">
      <div className="top">
        <h1>fields</h1>
        <button onClick={toggle}>toggle</button>
      </div>

      {show ? (
        <div className="fields-container">
          <div className="field">
            <div>
              <h1>Name</h1>
              <p>{namefield ? `enabled` : `disbaled`}</p>
            </div>
            <button
              onClick={(e) => {
                editData(e, `name`);
              }}
            >
              {namefield ? `disable` : `enable`}
            </button>
          </div>
          <div className="field">
            <div>
              <h1>Mail</h1>
              <p>{emailfield ? `enabled` : `disbaled`}</p>
            </div>
            <button
              onClick={(e) => {
                editData(e, `email`);
              }}
            >
              {emailfield ? `disable` : `enable`}
            </button>
          </div>
          <div className="field">
            <div>
              <h1>Body</h1>
              <p>{bodyfield ? `enabled` : `disbaled`}</p>
            </div>
            <button
              onClick={(e) => {
                editData(e, `body`);
              }}
            >
              {bodyfield ? `disable` : `enable`}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Fields;
