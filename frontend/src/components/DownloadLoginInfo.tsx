import { FC, useState } from "react";
import "../styles/changePassword.scss";
import { useChangePassword } from "../hooks/useChangePassword";
import { useCheckPassword } from "../hooks/useCheckPassword";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface AppProps {
  toggleDownloadLoginInfo: (e: any, state: boolean) => any;
}

export const DownloadLoginInfo: FC<AppProps> = ({
  toggleDownloadLoginInfo,
}) => {
  const { changePassword } = useChangePassword();
  const { checkPassword, checked, error } = useCheckPassword();

  const [current, setCurrent] = useState("");
  const [newp, setNewp] = useState("");
  const [newp2, setNewp2] = useState("");

  const handleCheckPassword = (e: any) => {
    e.preventDefault();
    checkPassword(current);
  };

  const handleChangePassword = (e: any) => {
    e.preventDefault();
    if ((newp !== newp2 && newp) || newp2 === "") {
      alert("bad shit hapenign");
      return;
    }
    changePassword(newp);
  };

  return (
    <div className="changePassword">
      <div className="content">
        <div className="top">
          <h1>download login info</h1>
          <p>downalod your login and logout history</p>
          <hr />
        </div>
        <div className="checkpassword">
          <h2>enter your pasword first</h2>
          <input
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            type="text"
            placeholder="current password"
          />
          <button onClick={handleCheckPassword}>confirm</button>
          <div
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
            className="error"
          >
            <p>{error}</p>
          </div>
        </div>
        <div className="bottom">
          <button
            className="button-cancel"
            onClick={(e) => toggleDownloadLoginInfo(e, false)}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
