import { FC, useState } from "react";
import { useDeleteAccount } from "../hooks/useDeleteAccount";
import "../styles/deleteAccount.scss";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

interface AppProps {
  toggleDeleteAccount: (params: any) => any;
}

const DeleteAccount: FC<AppProps> = ({ toggleDeleteAccount }) => {
  const [val, setVal] = useState<string>("");
  const { deleteAccount, loading } = useDeleteAccount();
  const { id } = useParams();

  const handleDelete = (e:any) =>{
    if(val === 'delete my account'){
      deleteAccount(id)
    }
  }

  return (
    <div className="deleteAccount">
      <div className="content">
      <h1>delete acount</h1>
      <p>
        please enter <i>delete my account</i>
      </p>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
        <button disabled={val !== 'delete my account'} onClick={handleDelete}>delete</button>
      <button onClick={toggleDeleteAccount}>cancel</button>
      </div>
    </div>
  );
};

export default DeleteAccount;
