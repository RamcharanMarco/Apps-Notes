import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";

export const useDeleteForm = () => {
  const { user, form ,removeform} = useStore();
  const navigate = useNavigate();
  const {formid} = useParams();


  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const deleteForm = async () => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/user/forms/${formid}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setLoading(false);
      removeform()
      navigate(`/console/${user.user._id}`);
    }
  };

  return { deleteForm, loading, error };
};
