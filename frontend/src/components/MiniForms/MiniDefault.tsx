import {FC} from 'react'
import '../../styles/forms/default.scss'

interface data{
    bgcolor:string,
    fontcolor:string,
    inputbgcolor:string,
    inputtxtcolor:string,
    btncolor:string,
    btntxtcolor:string
}

interface AppProps {
    FormProps: data;
  }


const MiniDefault: FC<AppProps> = ({FormProps}) => {

    return (
    <div
    style={{ backgroundColor: FormProps.bgcolor, color: FormProps.fontcolor}}
    className="default"
  >
    <h1>heading</h1>
    <input
      style={{ backgroundColor: FormProps.inputbgcolor, color: FormProps.inputtxtcolor }}
      type="text"
      placeholder="name"
    />
    <input
      style={{ backgroundColor: FormProps.inputbgcolor, color: FormProps.inputtxtcolor }}
      type="text"
      placeholder="email"
    />
    <input
      style={{ backgroundColor: FormProps.inputbgcolor, color: FormProps.inputtxtcolor }}
      type="text"
      placeholder="body"
    />
    <button style={{ backgroundColor: FormProps.btncolor, color: FormProps.btntxtcolor }}>
      send
    </button>
  </div>  )
}

export default MiniDefault