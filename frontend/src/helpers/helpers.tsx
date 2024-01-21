import React from 'react'

export function log(){
    alert(`hell its me mnarco`)
}

export const disableScroll = () =>{
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
}

export const enableScroll = () =>{
    document.body.style.height = "100vh";
    document.body.style.overflowY = "scroll";
}

