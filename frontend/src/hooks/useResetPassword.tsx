import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const useResetPassword = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [done, setDone] = useState<any>(false);

  const resetPassword = async (newPassword: string, token: any) => {
    setDone(false);
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/pwd/reset/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword, token }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setLoading(false);
      setDone(true);
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
    }
  };

  return { resetPassword, loading, error, done };
};
