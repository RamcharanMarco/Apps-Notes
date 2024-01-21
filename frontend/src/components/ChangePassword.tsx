import { FC, useState } from "react";
import "../styles/changePassword.scss";
import { useChangePassword } from "../hooks/useChangePassword";
import { useCheckPassword } from "../hooks/useCheckPassword";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface AppProps {
  toggleChangePassword: (params: any) => any;
}

const ChangePassword: FC<AppProps> = ({ toggleChangePassword }) => {
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
        {checked ? (
          <div className="changepassword">
            <h1>Please enter new password</h1>
            <input
              value={newp}
              onChange={(e) => setNewp(e.target.value)}
              type="text"
              placeholder="new"
            />
            <input
              value={newp2}
              onChange={(e) => setNewp2(e.target.value)}
              type="text"
              placeholder="confirm new"
            />
            <button onClick={handleChangePassword}>change password</button>
          </div>
        ) : (
          <div className="checkpassword">
            <h2>To set a new password, please enter your current passwword</h2>
            <input
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              type="text"
              placeholder="current password"
            />
            <button onClick={handleCheckPassword}>confirm</button>
            <div
              style={
                error ? { visibility: "visible" } : { visibility: "hidden" }
              }
              className="error"
            >
              <p>{error}</p>
            </div>
          </div>
        )}
        <div className="bottom">
          <button className="button-cancel" onClick={toggleChangePassword}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
