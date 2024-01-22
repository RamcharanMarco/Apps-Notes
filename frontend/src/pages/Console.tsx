import { useEffect, useState, useCallback } from "react";
import { useStore } from "../store/store";
import { Link, useParams } from "react-router-dom";
import "../styles/console.scss";
import { api } from "../api/api";
import { AddWebsiteModal } from "../components/modals/AddWebsiteModal";
import { Note } from "../components/modals/Note";

const Console = () => {
  const { user } = useStore();

  const { id } = useParams();

  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);
  const [val, setVal] = useState(``);
  const [note, setNote] = useState<any>({});

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/user/forms/all/${id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(true);
    }
    if (response.ok) {
      if (json === null) {
        setLoading(false);
        return;
      } else {
        setData(json);
        setLoading(false);
      }
    }
  }, [user.token]);

  useEffect(() => {
    getData();
  }, [getData]);

  const [justifyContent, setJustifyContent] = useState(`flex-start`);
  const [status, setStatus] = useState(false);

  const toggle = () => {
    if (justifyContent === `flex-start`) {
      setStatus(true);
      setJustifyContent(`flex-end`);
    }
    if (justifyContent === `flex-end`) {
      setStatus(false);
      setJustifyContent(`flex-start`);
    }
  };

  const [showDeleteAccount, setShowDeleteAccount] = useState<any>(false);
  const [showNote, setShowNote] = useState<any>(false);

  const hideNote = () => {
    setShowNote(false);
  };

  const groups = [`group1`, `group2`, `group3`, `group4`, `group5`];

  const [empty, setEmpty] = useState(false);

  const checkEmpty = () => {
    data.map((form: any) => {
      if (form.content.includes(val) || form.name.includes(val)) {
        setEmpty(false);
      } else {
        setEmpty(true);
      }
    });
  };

  const [clickedButton, setClickedButton] = useState(null);
  const [text, setText] = useState("");

  const handleClick = (button:any) => {
    setClickedButton(button);
  };

  const groupss = [`one`, `two`, `three`, `four`, `five`];

  return (
    <div className="console">
      {showDeleteAccount ? (
        <AddWebsiteModal onCancel={() => setShowDeleteAccount(false)} />
      ) : null}
      <div className="search">
        <div>
          <h1>Notes</h1>
        </div>
        <div>
          <input
            type="text"
            value={val}
            onChange={(e) => {
              // move to 1 function
              setVal(e.target.value);
              checkEmpty();
            }}
            placeholder="search notes"
          />
        </div>
        <div className="create">
          <button onClick={() => setShowDeleteAccount(true)}>
            add new note
          </button>
        </div>
        <button>download</button>
      </div>
      <div className="groups">
      {groupss.map((group) => (
        <button
        className="groups-box"
          style={{ backgroundColor: clickedButton === group ? "red" : "blue" }}
          onClick={() => handleClick(group)}
        >
          {group}
        </button>
      ))}
      </div>
      <div className="container">
        {data.map((form: any) => {
          if (form.content.includes(val) || form.name.includes(val)) {
            return (
              <div
                key={form._id}
                className="box"
                onClick={() => {
                  setNote(form);
                  setShowNote(true);
                }}
              >
                <p>{form._id}</p>
                <p>{form.name}</p>
                <p>{form.content}</p>
                <p>{form.archive && `archived`}</p>
                <p>{form.group}</p>
              </div>
            );
          }
        })}
      </div>
      {empty ? <p>no items match sreach</p> : null}
      {showNote ? <Note hideNote={hideNote} data={note} /> : null}
    </div>
  );
};

export default Console;
