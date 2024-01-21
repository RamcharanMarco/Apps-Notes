import { FC, useState, useEffect } from "react";
import "../styles/changePassword.scss";
import { useChangePassword } from "../hooks/useChangePassword";
import { useCheckPassword } from "../hooks/useCheckPassword";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { api } from "../api/api";
import { useStore } from "../store/store";

interface settings {
  two_factor: boolean;
  passwordless: boolean;
  user_id: string;
}
interface AppProps {
  togglePasswordLess: (params: any) => any;
  settings: settings;
}

const PasswordLess: FC<AppProps> = ({ togglePasswordLess, settings }) => {
  const { changePassword } = useChangePassword();
  const { checkPassword, checked, error } = useCheckPassword();

  const { user } = useStore();

  const [current, setCurrent] = useState("");

  const [pwdless, setPwdless] = useState(false);

  const handleCheckPassword = (e: any) => {
    e.preventDefault();
    checkPassword(current);
  };

  const editData = async (e: any) => {
    e.preventDefault();
    const rest = {
      user_id: settings.user_id,
      two_factor: false,
      passwordless: pwdless ? false : true,
    };
    const response = await fetch(`${api}/api/user/setting/${user.user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(rest),
    });
    const json = await response.json();

    if (response.ok) {
      window.location.reload();
    }
    if (!response.ok) {
      console.log(`not ok`);
    }
  };

  useEffect(() => {
    setPwdless(settings.passwordless);
    console.log(settings);
}, []);

  return (
    <div className="changePassword">
      <h1>passwordless signup</h1>

      {checked ? (
        <div className="changepassword">
          <p>a code will be send to your email {user.user.email} every time you choose passwordless login</p>
          <span>note * please note that 2 factor auth will be disbaled</span>
          {pwdless ? <button onClick={editData}>disable</button> : <button onClick={editData}>enable</button>}
        </div>
      ) : (
        <div className="checkpassword">
          <p>please enter current password to proceed</p>
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
      )}

      <IoArrowBackCircleOutline
        className="cancel"
        onClick={togglePasswordLess}
      />
    </div>
  );
};

export default PasswordLess;
