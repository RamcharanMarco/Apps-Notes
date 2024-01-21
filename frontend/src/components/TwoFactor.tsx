import { FC, useState, useEffect } from "react";
import "../styles/twoFactor.scss";
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
  toggleTwoFactor: (params: any) => any;
  settings: settings;
}

const TwoFactor: FC<AppProps> = ({ toggleTwoFactor, settings }) => {
  const { checkPassword, checked, error } = useCheckPassword();

  const { user } = useStore();

  const [current, setCurrent] = useState("");

  const [two_factor, setTwo_factor] = useState(false);

  const handleCheckPassword = (e: any) => {
    e.preventDefault();
    checkPassword(current);
  };

  const editData = async (e: any) => {
    e.preventDefault();
    const rest = {
      user_id: settings.user_id,
      two_factor: two_factor ? false : true,
      passwordless: false,
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
    setTwo_factor(settings.two_factor);
    console.log(settings);
  }, []);

  return (
    <div className="twoFactor">
      <h1>2 factor auth</h1>
      <p>Login verification helps keep your account more secure.
        With login verfication enabled, you will need both your password and a verification code sent to your phone to log in on new devices.
      </p>

      {checked ? (
        <div className="twofactor">
          <p>
            a code will be send to your email {user.user.email} every time you
            choose passwordless login
          </p>
          <span>note * please note that passwordless will be disbaled</span>
          {two_factor ? (
            <button onClick={editData}>disable</button>
          ) : (
            <button onClick={editData}>enable</button>
          )}
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

      <IoArrowBackCircleOutline className="cancel" onClick={toggleTwoFactor} />
    </div>
  );
};

export default TwoFactor;
