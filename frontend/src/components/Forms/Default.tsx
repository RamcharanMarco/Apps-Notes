import {FC} from 'react'
import '../../styles/forms/default.scss'

interface data{
    bgcolor:string,
    fontcolor:string,
    width:string,
    inputbgcolor:string,
    inputtxtcolor:string,
    btncolor:string,
    btntxtcolor:string;
    inputborder?: string;
}

interface AppProps {
    FormProps: data;
  }


const Default: FC<AppProps> = ({FormProps}) => {

    return (
    <div
    style={{ backgroundColor: FormProps.bgcolor, color: FormProps.fontcolor,width:FormProps.width}}
    className="default"
  >
    <h1>heading</h1>
    <input
      style={{ backgroundColor: FormProps.inputbgcolor, color: FormProps.inputtxtcolor,border:`1px solid ${FormProps.inputborder}`}}
      type="text"
      placeholder="name"
    />
    <input
      style={{ backgroundColor: FormProps.inputbgcolor, color: FormProps.inputtxtcolor,border:`1px solid ${FormProps.inputborder}`}}
      type="text"
      placeholder="email"
    />
    <input
      style={{ backgroundColor: FormProps.inputbgcolor, color: FormProps.inputtxtcolor,border:`1px solid ${FormProps.inputborder}`}}
      type="text"
      placeholder="body"
    />
    <button style={{ backgroundColor: FormProps.btncolor, color: FormProps.btntxtcolor }}>
      send
    </button>
  </div>  )
}

export default Default