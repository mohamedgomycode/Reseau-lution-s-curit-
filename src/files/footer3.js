import React from "react";
import '../files/css.css'

let data=[
    {title:"SUPPORT POUR ORDINATEUR DE BUREAU",logo:"https://redwebprotection.com/img/service/1.png"},
    {title:"SUPPORT POUR ORDINATEUR PORTABLE",logo:"https://redwebprotection.com/img/service/2.png"},
    {title:"NAVIGATEUR INTERNET",logo:"https://redwebprotection.com/img/service/3.png"},
    {title:"SUPPORT DE ROUTEUR",logo:"https://redwebprotection.com/img/service/4.png"},
    {title:"SUPPORT DE MESSAGERIE",logo:"https://redwebprotection.com/img/service/5.png"},
    {title:"SUPPRESSION DE VIRUS",logo:"https://redwebprotection.com/img/service/11.png"},
    {title:"SUPPRESSION DE LOGICIELS MALVEILLANTS",logo:"https://redwebprotection.com/img/service/10.png"},
    {title:"SUPPORT DU LECTEUR MULTIMÉDIA",logo:"https://redwebprotection.com/img/service/8.png"},
    {title:"SUPPORT DU SYSTÈME D'EXPLOITATION",logo:"https://redwebprotection.com/img/service/9.png"}
    
]
const Footer3 = () => {
  return (
     
    <div className="cont">
      {data.map((el, i) => (
        <div key={i}  className="data">
          <div>
            <img src={el.logo}  height="180px" width="180px" className="hoverr"/>
          </div>
          <div >
            <p className="title2">{el.title} </p>

            
          </div>
        </div>
      ))}
    </div>
  );
};
export default Footer3;