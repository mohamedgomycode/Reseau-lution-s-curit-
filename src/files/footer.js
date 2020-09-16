import React from "react";
import "../files/css.css";

function Footer() {
  return (
    <div>
      <div>
        <p className="body2">
          <p className="p1">Vous avez un soucis avec votre ordinateur?</p>
          <p className="p22">
            Ne cherchez plus loin, nous sommes à votre écoute !
          </p>
        </p>
      </div>

      <div>
        <div>
          <div className="liste">
            <div>
              <div>
                <span className="li">
                  <li className="item">1</li>
                  <p className="title">Prise en main rapide et efficace</p>
                </span>
                <p className="p2">
                  Ne perdez pas de temps à chercher ailleurs, nos experts sont
                  disponibles dès l'instant de votre appel.
                </p>
              </div>
            </div>

            <div>
              <span className="li">
                <li className="item">2</li>
                <p className="title">Optimisation en temps réel</p>
              </span>
              <p className="p2">
                Ne perdez pas de temps à chercher ailleurs, nos experts sont
                disponibles dès l'instant de votre appel.
              </p>
            </div>

            <div>
              <span className="li">
                <li className="item">3</li>
                <p className="title">Prise en charge gratuite</p>
              </span>
              <p className="p2">
                Ne perdez pas de temps à chercher ailleurs, nos experts sont
                disponibles dès l'instant de votre appel.
              </p>
            </div>
          </div>
          <div className="liste">
            <div>
              <span className="li">
                <li className="item">4</li>
                <p className="title">Réparation intégrale</p>
              </span>
              <p className="p2">
                Ne perdez pas de temps à chercher ailleurs, nos experts sont
                disponibles dès l'instant de votre appel.
              </p>
            </div>
            <div>
              {" "}
              <span className="li">
                <li className="item">5</li>
                <p className="title">Gestion de logiciels</p>
              </span>
              <p className="p2">
                Ne perdez pas de temps à chercher ailleurs, nos experts sont
                disponibles dès l'instant de votre appel.
              </p>
            </div>
            <div>
              <span className="li">
                <li className="item">6</li>
                <p className="title">Sauvegarde des informations digitales</p>
              </span>
              <p className="p2">
                Ne perdez pas de temps à chercher ailleurs, nos experts sont
                disponibles dès l'instant de votre appel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
