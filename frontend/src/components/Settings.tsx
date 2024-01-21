import "../css/settings.css";
import { useEffect, useState,FC } from "react";
import DeleteForm from "./DeleteForm";

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
  namefield:boolean;
  emailfield:boolean;
  bodyfield:boolean;
  status:boolean;
  premium:boolean
}

interface AppProps {
  data: data;
}

const Settings: FC<AppProps> = ({ data }) => {
  const [status, setStatus] = useState(true);
  const [showDelete, setShowDelete] = useState(false);

  const toggleDeleteForm = () => {
    setShowDelete(!showDelete);
    document.body.style.height = `100vh`;
    document.body.style.overflowY = `hidden`;
  };

  useEffect(()=>{
    setStatus(data.status)
  },[])

  return (
    <div className="settings">
      {showDelete ? <DeleteForm toggleDeleteForm={toggleDeleteForm} /> : null}
      <h1>settings</h1>
      <div className="settings-container">
        <div className="setting">
          <div>
            <h1>status</h1>
            <p>{status ? `enabled` : `disabled`}</p>
          </div>
          <button onClick={() => setStatus(!status)}>
            {status ? `disable` : `enable`}
          </button>
        </div>
        <div className="setting">
          <div>
            <h1>delete form</h1>
          </div>
          <button onClick={toggleDeleteForm}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
