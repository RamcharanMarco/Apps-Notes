
import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";

export const useCheckPasswordAndGenerateRecoveryCode = () => {
  const navigate = useNavigate();

  const { user } = useStore();

  const [error, setError] = useState<any>();
  const [checked, setChecked] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newcode, setNewcode] = useState<string>(``);


  const checkPasswordAndGenerateRecoveryCode = async (password: string) => {
    setLoading(true);
    setError(null);
    const response = await fetch(
      `http://localhost:5000/api/security/recoverycode/${user.user._id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({password}),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setLoading(false);
      setChecked(true)
      setNewcode(json.recoverycode.code)
    }
  };

  return { checkPasswordAndGenerateRecoveryCode, loading, error,checked, newcode };
};
