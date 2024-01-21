import {FC} from 'react'
import '../../styles/forms/fancy.scss'

interface data{
    bgcolor:string,
    fontcolor:string,
    width:string,
    inputbgcolor:string,
    inputtxtcolor:string,
    btncolor:string,
    btntxtcolor:string
    inputborder?: string;
}


interface AppProps {
    FormProps: data;
  }

const Fancy: FC<AppProps> = ({FormProps}) => {
    return (
    <div
    style={{ backgroundColor: FormProps.bgcolor, color: FormProps.fontcolor,width:FormProps.width}}
    className="fancy"
  >
    <h1>heading</h1>
    <div>
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
    </div>
    <textarea
      style={{ backgroundColor: FormProps.inputbgcolor, color: FormProps.inputtxtcolor }}
      placeholder="body"
    ></textarea>
    <button style={{ backgroundColor: FormProps.btncolor, color: FormProps.btntxtcolor }}>
      send
    </button>
  </div>  )
}

export default Fancy