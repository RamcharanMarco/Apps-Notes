import { FC } from "react";
import Default from "./Forms/Default";
import Fancy from "./Forms/Fancy";
import Left from "./Forms/Left";
import Right from "./Forms/Right";

interface data {
  bgcolor: string;
  fontcolor: string;
  width: string;
  inputbgcolor: string;
  inputtxtcolor: string;
  btncolor: string;
  btntxtcolor: string;
}

interface AppProps {
  toggleTemplates: (params: any) => any;
  setNew: (params: any) => any;
  data: data;
  cat?: string
}

const Templates: FC<AppProps> = ({ toggleTemplates, setNew, data, cat = 'cat' }) => {
  let width2 = `100%`;

  return (
    <div className="templates">
      <h1>cat {cat}</h1>
      <button onClick={toggleTemplates} className="close">
        close
      </button>
      <div className="container">
        <div onClick={() => setNew(1)} className="box">
          <Default
            FormProps={{
              bgcolor: data.bgcolor,
              fontcolor: data.fontcolor,
              width: width2,
              inputbgcolor: data.inputbgcolor,
              inputtxtcolor: data.inputtxtcolor,
              btncolor: data.btncolor,
              btntxtcolor: data.btntxtcolor,
            }}
          />
        </div>
        <div onClick={() => setNew(2)} className="box">
          <Fancy
            FormProps={{
              bgcolor: data.bgcolor,
              fontcolor: data.fontcolor,
              width: width2,
              inputbgcolor: data.inputbgcolor,
              inputtxtcolor: data.inputtxtcolor,
              btncolor: data.btncolor,
              btntxtcolor: data.btntxtcolor,
            }}
          />
        </div>
        <div onClick={() => setNew(3)} className="box">
          <Left
            FormProps={{
              bgcolor: data.bgcolor,
              fontcolor: data.fontcolor,
              width: width2,
              inputbgcolor: data.inputbgcolor,
              inputtxtcolor: data.inputtxtcolor,
              btncolor: data.btncolor,
              btntxtcolor: data.btntxtcolor,
            }}
          />
        </div>
        <div onClick={() => setNew(4)} className="box">
          <Right
            FormProps={{
              bgcolor: data.bgcolor,
              fontcolor: data.fontcolor,
              width: width2,
              inputbgcolor: data.inputbgcolor,
              inputtxtcolor: data.inputtxtcolor,
              btncolor: data.btncolor,
              btntxtcolor: data.btntxtcolor,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Templates;
