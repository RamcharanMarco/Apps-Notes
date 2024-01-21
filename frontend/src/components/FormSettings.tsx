import "../styles/formsettings.css";
import { useEffect, useState, FC } from "react";
import DeleteForm from "./DeleteForm";
import { api } from "../api/api";
import { useStore } from "../store/store";
import { useParams } from "react-router-dom";

interface data {
  bgcolor: string;
  fontcolor: string;
  inputbgcolor: string;
  btncolor: string;
  btntxtcolor: string;
  inputtxtcolor: string;
  form_name: string;
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

const FormSettings: FC<AppProps> = ({ data }) => {
  const [status, setStatus] = useState(true);
  const [showDelete, setShowDelete] = useState(false);
  const [show, setShow] = useState(false);


  const toggleDeleteForm = () => {
    setShowDelete(!showDelete);
  };

  const toggle = () => {
    setShow(!show);
  };


  useEffect(() => {
    setStatus(data.status);
  }, []);

  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);

  const { user } = useStore();
  const { formid } = useParams();

  const editData = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    window.scrollTo(0, 0);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const obj = {
      bgcolor: data.bgcolor,
      fontcolor: data.fontcolor,
      inputbgcolor: data.inputbgcolor,
      btncolor: data.btncolor,
      btntxtcolor: data.btntxtcolor,
      inputtxtcolor: data.inputtxtcolor,
      name: data.form_name,
      email: data.email,
      title: data.title,
      reply_email: data.reply_email,
      reply_email_content: data.reply_email_content,
      namefield: data.namefield,
      emailfield: data.emailfield,
      bodyfield: data.bodyfield,
      status: status ? false : true,
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
    <div className="formsettings">
      {showDelete ? <DeleteForm toggleDeleteForm={toggleDeleteForm} /> : null}
      <div className="top">
      <h1>settings</h1>
      <button onClick={toggle}>toggle</button>
      </div>

      {
        show ? 
        <div className="formsettings-container">
        <div className="formsettings-setting">
          <div>
            <h1>status</h1>
            <p>{status ? `enabled` : `disabled`}</p>
          </div>
          <button
            onClick={(e) => {
              editData(e);
            }}
          >
            {status ? `disable` : `enable`}
          </button>
        </div>
        <div className="formsettings-setting">
          <div>
            <h1>delete form</h1>
          </div>
          <button onClick={toggleDeleteForm}>delete</button>
        </div>
      </div>
        : null
      }
    </div>
  );
};

export default FormSettings;
