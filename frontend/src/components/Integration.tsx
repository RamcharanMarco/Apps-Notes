import "../styles/integration.css";
import { FC, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { disableScroll, enableScroll } from "../helpers/helpers";

interface AppProps {
  id: string;
}

const Integration: FC<AppProps> = ({ id }) => {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggle = () => {
    if(!show){
      disableScroll()
    }
    if(show){
      enableScroll()
    }
    setShow(!show);
  };

  function copy() {
    navigator.clipboard.writeText(
      `<script id="cm" data-id=${id} src="/scripts/main.js"></script>`
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className="integration">
      {copied ? <p className="copied">copued</p> : null}
      {show ? (
        <div className="allintergration">
          <button className="close" onClick={toggle}>
            close
          </button>
          <h1>ALL INTEGRATIONS</h1>
          <div className="container">
            <div className="box">
              <div className="top">
                <h2>script</h2>
                <button>copy</button>
              </div>
              <div className="bottom">
                <span>npm install</span>
                <br />
                <span>import xyz from 'sayhi'</span>
                <br />
                {`<script> xyz(siteid) </script>`}
              </div>
            </div>
            <div className="box">
              <div className="top">
                <h2>npm</h2>
                <button>copy</button>
              </div>
              <div className="bottom">
                <span>npm install</span><br />
                <span>import xyz from 'sayhi'</span><br />
                {`<script> xyz(siteid) </script>`}
              </div>
            </div>
            <div className="box">
              <div className="top">
                <h2>react</h2>
                <button>copy</button>
              </div>
              <div className="bottom">
                <span>npm install</span>
                <br />
                <span>import xyz from 'sayhi'</span>
                <br />
                {`<script> xyz(siteid) </script>`}
              </div>
            </div>
            <div className="box">
              <div className="top">
                <h2>vue</h2>
                <button>copy</button>
              </div>
              <div className="bottom">
                <span>npm install</span>
                <br />
                <span>import xyz from 'sayhi'</span>
                <br />
                {`<script> xyz(siteid) </script>`}
              </div>
            </div>
            <div className="box">
              <div className="top">
                <h2>wordpress</h2>
                <button>copy</button>
              </div>
              <div className="bottom">
                <span>npm install</span>
                <br />
                <span>import xyz from 'sayhi'</span>
                <br />
                {`<script> xyz(siteid) </script>`}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="top">
        <div>
          <h1>Integration via script</h1>
          <p>copy and paste this script into your site</p>
        </div>
        <button onClick={toggle}>other</button>
      </div>
      <div className="script">
        {`<script id="cm" data-id=${id} src="/scripts/main.js"></script>`}
        <button onClick={copy}>copy</button>
      </div>
    </div>
  );
};

export default Integration;
