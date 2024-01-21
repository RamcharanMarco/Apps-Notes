import { FC, useState } from "react";
import { useDeleteForm } from "../hooks/useDeleteForm";
import { useParams } from "react-router-dom";
import "../styles/deleteForm.scss";

interface AppProps {
  toggleDeleteForm: (params: any) => any;
}

const DeleteForm: FC<AppProps> = ({ toggleDeleteForm }) => {
  const [val, setVal] = useState<string>("");
  const { deleteForm } = useDeleteForm();

  const { formid } = useParams();

  const handleDelete = (e: any) => {
    if (val === "delete my form") {
      deleteForm();
    }
  };

  return (
    <div className="deleteForm">
      <div className="content">
        <div className="top">
          <h1>Delete Form</h1>
          <p>This project will be deleted along with all the settings for it</p>
          <div className="warning">
            <span style={{ color: "red", fontWeight: "bold" }}>Warning:</span>
            <span style={{ color: "red", fontWeight: "100" }}>
              This action is not reversible. Please be certain.
            </span>
          </div>
        </div>
        <div className="center">
          <div>
            <p>To verify, type delete form project below:</p>
            <input
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="delete my form"
            />
          </div>
        </div>
        <div className="bottom">
          <button onClick={toggleDeleteForm}>cancel</button>
          <button disabled={val !== "delete my form"} onClick={handleDelete}>
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
