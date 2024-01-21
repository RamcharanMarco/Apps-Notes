import "../styles/appearence.css";
import "../styles/templates.scss";
import "../styles/themes.css";
import { useState, FC, useEffect } from "react";
import { api } from "../api/api";
import { useStore } from "../store/store";
import { Link, useParams } from "react-router-dom";
import { data } from "../definitions/interfaces";
import Default from "./Forms/Default";
import Fancy from "./Forms/Fancy";
import Left from "./Forms/Left";
import Right from "./Forms/Right";
import { disableScroll, enableScroll } from "../helpers/helpers";
import BW from "./Themes/BW";
import Midnight from "./Themes/Midnight";
import Valentine from "./Themes/Valentine";
import Warm from "./Themes/Warm";
import { DEFAULT } from "../definitions/constants";
import Templates from "./Templates";

interface AppProps {
  data: data;
}

const Appearence: FC<AppProps> = ({ data }) => {
  //usestate general
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(false);
  const [desktop, setDesktop2] = useState<boolean>(true);
  let width2 = "100%";

  //usestate show popup
  const [showThemes, setShowThemes] = useState<any>(false);

  //usestate show custom color choose
  const [showCustomTheme, setShowCustomTheme] = useState<any>(false);

  //colors
  const [bgcolor, setBgcolor] = useState("");
  const [fontcolor, setFontcolor] = useState("");
  const [inputbgcolor, setInputbgcolor] = useState("");
  const [btncolor, setBtncolor] = useState("");
  const [btntxtcolor, setBtntxtcolor] = useState("");
  const [inputtxtcolor, setInputtxtcolor] = useState("");
  const [inputborder, setInputborder] = useState("");
  const [custom, setCustom] = useState(false);



  //get user
  const { user } = useStore();

  //get params
  const { formid } = useParams();

  //edit data
  //move to hook
  const editData = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    window.scrollTo(0, 0);
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    const rest = {
      bgcolor,
      fontcolor,
      inputbgcolor,
      btncolor,
      btntxtcolor,
      inputtxtcolor,
      name: data.name,
      email: data.email,
      title: data.title,
      reply_email: data.reply_email,
      reply_email_content: data.reply_email_content,
      namefield: data.namefield,
      emailfield: data.emailfield,
      bodyfield: data.bodyfield,
      status: data.status,
      premium: data.premium,
    };

    const response = await fetch(`${api}/api/user/forms/edit/${formid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ ...rest }),
    });
    const json = await response.json();

    if (response.ok) {
      setLoading(false);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
      window.location.reload();
    }
    if (!response.ok) {
      setLoading(false);
      setError(json.error);
      document.body.style.height = "100vh";
      document.body.style.overflowY = "scroll";
    }
  };

  //cancel and reset colors to the ones in the database
  const cancel = () => {
    setBgcolor(data.bgcolor);
    setFontcolor(data.fontcolor);
    setInputbgcolor(data.inputbgcolor);
    setBtncolor(data.btncolor);
    setBtntxtcolor(data.btntxtcolor);
    setInputtxtcolor(data.inputtxtcolor);
  };

  //set the colors with values from the database
  useEffect(() => {
    setBgcolor(data.bgcolor);
    setFontcolor(data.fontcolor);
    setInputbgcolor(data.inputbgcolor);
    setBtncolor(data.btncolor);
    setBtntxtcolor(data.btntxtcolor);
    setInputtxtcolor(data.inputtxtcolor);
  }, []);

  const toggle2 = () => {
    setShowThemes(!showThemes);
  };

  const toggle3 = () => {
    setShowCustomTheme(!showCustomTheme);
  };

  const [width, setWidth] = useState(`100%`);

  const setDesktop = () => {
    setDesktop2(true);
    setWidth(`100%`);
  };

  const setMobile = () => {
    setDesktop2(false);
    setWidth(`50%`);
  };

  //show the types
  const [type, setType] = useState<number>(1);
  const [theme, setTheme] = useState<number>(1);
  const [showTypes, setShowTypes] = useState<any>(false);

  const toggleTemplates = () => {
    if (!showTypes) {
      disableScroll();
    }
    if (showTypes) {
      enableScroll();
    }
    setShowTypes(!showTypes);
  };

  const setNew = (type: number) => {
    setType(type);
    toggleTemplates();
  };

  const setNew2 = (theme: number) => {
    setTheme(theme);
    setCustom(true)
    if (theme === 1) {
      setBgcolor(`black`);
      setFontcolor(`black`);
      setInputbgcolor(`black`);
      setBtncolor(`black`);
      setBtntxtcolor(`black`);
      setInputtxtcolor(`black`);
      setInputborder(`white`)
    } else if (theme === 2) {
      setBgcolor(`blue`);
      setFontcolor(`blue`);
      setInputbgcolor(`blue`);
      setBtncolor(`blue`);
      setBtntxtcolor(`blue`);
      setInputtxtcolor(`blue`);
      setInputborder(`dodgerblue`)
    } else if (theme === 3) {
      setBgcolor(`red`);
      setFontcolor(`red`);
      setInputbgcolor(`red`);
      setBtncolor(`red`);
      setBtntxtcolor(`red`);
      setInputtxtcolor(`red`);
      setInputborder(`white`)
    } else if (theme === 4) {
      setBgcolor(`aquamarine`);
      setFontcolor(`aquamarine`);
      setInputbgcolor(`aquamarine`);
      setBtncolor(`aquamarine`);
      setBtntxtcolor(`aquamarine`);
      setInputtxtcolor(`aquamarine`);
      setInputborder(`white`)
    }
    toggle2();
  };

  return (
    <div className="appearence">
      {showTypes ? (
        <Templates
          setNew={setNew}
          toggleTemplates={toggleTemplates}
          data={{
            bgcolor,
            fontcolor,
            width: width2,
            inputbgcolor,
            inputtxtcolor,
            btncolor,
            btntxtcolor,
          }}
        />
      ) : null}

      {showThemes ? (
        <div className="themes">
          <button onClick={toggle2} className="close">
            close
          </button>
          <div className="container">
            <div onClick={() => setNew2(1)} className="box">
              <BW />
            </div>
            <div onClick={() => setNew2(2)} className="box">
              <Midnight />
            </div>
            <div onClick={() => setNew2(3)} className="box">
              <Valentine />
            </div>
            <div onClick={() => setNew2(4)} className="box">
              <Warm />
            </div>
          </div>
        </div>
      ) : null}

      <h1>Appearence</h1>
      <div className="prev">
        {desktop ? (
          type === 1 ? (
            <Default
              FormProps={{
                bgcolor,
                fontcolor,
                width,
                inputbgcolor,
                inputtxtcolor,
                btncolor,
                btntxtcolor,
                inputborder
              }}
            />
          ) : type === 2 ? (
            <Fancy
              FormProps={{
                bgcolor,
                fontcolor,
                width,
                inputbgcolor,
                inputtxtcolor,
                btncolor,
                btntxtcolor,
                inputborder
              }}
            />
          ) : type === 3 ? (
            <Left
              FormProps={{
                bgcolor,
                fontcolor,
                width,
                inputbgcolor,
                inputtxtcolor,
                btncolor,
                btntxtcolor,
                inputborder
              }}
            />
          ) : type === 4 ? (
            <Right
              FormProps={{
                bgcolor,
                fontcolor,
                width,
                inputbgcolor,
                inputtxtcolor,
                btncolor,
                btntxtcolor,
                inputborder
              }}
            />
          ) : (
            <Default
              FormProps={{
                bgcolor,
                fontcolor,
                width,
                inputbgcolor,
                inputtxtcolor,
                btncolor,
                btntxtcolor,
                inputborder
              }}
            />
          )
        ) : (
          <Default
            FormProps={{
              bgcolor,
              fontcolor,
              width,
              inputbgcolor,
              inputtxtcolor,
              btncolor,
              btntxtcolor,
            }}
          />
        )}
      </div>
      <div>
        <button onClick={setDesktop}>desktop</button>
        <button onClick={setMobile}>mobile</button>
      </div>
      <div className="colors">
        <h1>Design</h1>
        <div className="colors-container">
          <div className="colors-container-box">
            <div>
              <p>Form type</p>
              <span>{type}</span>
            </div>
            <button onClick={toggleTemplates}>edit</button>
          </div>
          <div className="colors-container-box">
            <div>
              <p>Themes</p>
              <span>
                {theme === 1
                  ? `midnight`
                  : theme === 2
                  ? `black and white`
                  : theme === 3
                  ? `valentine`
                  : theme === 4
                  ? `warm`
                  : `disabled`}
              </span>
            </div>
            <button onClick={toggle2}>edit</button>
          </div>
          <div className="colors-container-box2">
            <div className="top">
              <div>
                <p>Custom Theme</p>
                <span>{custom ? `enabled`: `disabled`}</span>
              </div>
              <button onClick={toggle3}>edit</button>
            </div>
            {showCustomTheme ? (
              <div className="colors-container">
                <div className="colors-container-box">
                  <div>
                    <p>bgcolor</p>
                    <span>{bgcolor}</span>
                  </div>
                  <input
                    type="color"
                    value={bgcolor}
                    onChange={(e) => setBgcolor(e.target.value)}
                  />
                </div>
                <div className="colors-container-box">
                  <div>
                    <p>fontcolor</p>
                    <span>{fontcolor}</span>
                  </div>

                  <input
                    type="color"
                    value={fontcolor}
                    onChange={(e) => setFontcolor(e.target.value)}
                  />
                </div>
                <div className="colors-container-box">
                  <div>
                    <p>input bgcolor</p>
                    <span>{inputbgcolor}</span>
                  </div>
                  <input
                    type="color"
                    value={inputbgcolor}
                    onChange={(e) => setInputbgcolor(e.target.value)}
                  />
                </div>
                <div className="colors-container-box">
                  <div>
                    <p>button color</p>
                    <span>{btncolor}</span>
                  </div>
                  <input
                    type="color"
                    value={btncolor}
                    onChange={(e) => setBtncolor(e.target.value)}
                  />{" "}
                </div>
                <div className="colors-container-box">
                  <div>
                    <p>button text color</p>
                    <span>{btntxtcolor}</span>
                  </div>
                  <input
                    type="color"
                    value={btntxtcolor}
                    onChange={(e) => setBtntxtcolor(e.target.value)}
                  />
                </div>
                <div className="colors-container-box">
                  <div>
                    <p>input text color</p>

                    <span>{inputtxtcolor}</span>
                  </div>
                  <input
                    type="color"
                    value={inputtxtcolor}
                    onChange={(e) => setInputtxtcolor(e.target.value)}
                  />{" "}
                </div>
                <div className="buttons">
                  <button onClick={cancel}>cancel</button>
                  <button onClick={editData}>enable</button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearence;
