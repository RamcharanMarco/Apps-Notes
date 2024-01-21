import Appearence from "../components/Appearence";
import Fields from "../components/Fields";
import General from "../components/General";
import Integration from "../components/Integration";
import FormSettings from "../components/FormSettings";
import "../styles/form.css";
import Loader from "../components/Loader";

import { useEffect, useState, useCallback } from "react";
import { useStore } from "../store/store";
import { Link, useParams } from "react-router-dom";
import { api } from "../api/api";

const Form = () => {
  const { formid } = useParams();

  const { user} = useStore();

  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/user/forms/${formid}`, {
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

  /*const data2 = {
    _id: `12345678990`,
    bgcolor: "#d8dbe9",
    fontcolor: "#000000",
    inputbgcolor: "#ed0c0c",
    btncolor: "#000000",
    btntxtcolor: "#d8dbe9",
    inputtxtcolor: " #000000",
    form_name: "marcos form",
    email: "gamil.com",
    title: "my title",
    reply_email: true,
    reply_email_content: "thanks for hitting me up iw ill get back to you",
    premium: true,
    namefield: true,
    emailfield: true,
    bodyfield: false,
    status: true,
  };*/

  return (
    <div className="form">
      <h3 className="heading">{`forms/${data.name}`}</h3>
     {

      Object.keys(data).length !== 0 ?
      
        <>
          <Appearence data={data} />
          <Integration id={data._id} />
          <General data={data} />
          <Fields data={data} getData={getData}/>
          <FormSettings data={data} />
        </>
      :
      <Loader/>
    }
    </div>
  );
};

export default Form;
