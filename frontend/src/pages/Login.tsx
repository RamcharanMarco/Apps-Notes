import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "../styles/login.scss";
import Loader from "../components/Loader";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, loading } = useLogin();

  const handleClick = (e: any): void => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login">
      <h1>Login</h1>
        <div>
        <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>login</button>
          <div
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
            className="error"
          >
            <p>{error}</p>
          </div>
        </div>
      {loading ? <Loader /> : ""}
    </div>
  );
};

export default Login;
