import { useState, useEffect } from "react";
import { useSignup } from "../hooks/useSignup";
import "../styles/signup.scss";

import Loader from "../components/Loader";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signup, loading, error } = useSignup();

  const handleClick = (e: any): void => {
    e.preventDefault();
    signup(email, password);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>signup | Contactme</title>
      </Helmet>
      <div className="signup">
        <h1>Signup</h1>
        <p className="caption">Join millions using contact me</p>
        <div>
          {" "}
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
          <button onClick={handleClick}>signup</button>
          {loading ? <Loader /> : ""}
          <div
            style={error ? { visibility: "visible" } : { visibility: "hidden" }}
            className="error"
          >
            <p>{error}</p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Signup;
