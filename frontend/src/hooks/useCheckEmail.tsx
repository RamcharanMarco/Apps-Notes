import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const useCheckEmail = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailOk, setEmailOk] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');



  const checkemail = async (email: string) => {
    setLoading(true);
    setError(false);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const response = await fetch(`${api}/api/auth/login/checkemail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
    if (response.ok) {
      setLoading(false);
      setEmailOk(true)
      setEmail(json.email)
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
    if (response.status === 303) {
      navigate(`/passwordless/${json.id}`);
    }
  };

  return { checkemail, loading, error, email, emailOk };
};
