import '../styles/scriptBox.css'
import { AiOutlineCopy } from "react-icons/ai"
import { FC } from 'react'
import {useState} from 'react'

interface Props {
  id: string;
}

const ScriptBox : FC<Props> = ({ id }) => {



  function copy(){
    navigator.clipboard.writeText( `<script id="cm" data-id=${id} src="/scripts/main.js"></script>` );
    // Alert the copied text
    alert("Copied the text");
  }

  return (
    <div className="scriptBox">
        <div className="top">
          <AiOutlineCopy onClick={copy}/>
        </div>
        <div id='scriptinfo' className="bottom">
            { `<script id="cm" data-id=${id} src="/scripts/main.js"></script>` }
        </div>
    </div>
  )
}

export default ScriptBox


//when user clicks the button copy to the clipboard