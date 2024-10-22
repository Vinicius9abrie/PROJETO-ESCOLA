import React from "react";
import "./FooterSection.css"
export default function FooterSection(props){
  const pagesholder = props.pages;
  return(
    <div className="content">
    <h3 className="title archivo">
      {props.title}
    </h3>
      {pagesholder.map((page,index)=>{
        return(
          <div className="page" key={index}>
            {page}
          </div>
        )
      })}
    </div>
  )
}