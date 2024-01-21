import { FC } from "react";
import '../../styles/forms/left.scss'

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
  FormProps: data;
}

const Left: FC<AppProps> = ({ FormProps }) => {
  return (
    <div
      style={{
        backgroundColor: FormProps.bgcolor,
        color: FormProps.fontcolor,
        width: FormProps.width,
      }}
      className="left"
    >
      <h1>heading</h1>
      <div className="container">
      <div className="left-box">
        <input
          style={{
            backgroundColor: FormProps.inputbgcolor,
            color: FormProps.inputtxtcolor,
          }}
          type="text"
          placeholder="name"
        />
        <input
          style={{
            backgroundColor: FormProps.inputbgcolor,
            color: FormProps.inputtxtcolor,
          }}
          type="text"
          placeholder="email"
        />
        <button
          style={{
            backgroundColor: FormProps.btncolor,
            color: FormProps.btntxtcolor,
          }}
        >
          send
        </button>
      </div>
      <div className="right-box">
      <textarea
        style={{
          backgroundColor: FormProps.inputbgcolor,
          color: FormProps.inputtxtcolor,
        }}
        placeholder="body"
      />
      </div>
      </div>
    </div>
  );
};

export default Left;
