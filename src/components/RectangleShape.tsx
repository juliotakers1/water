import { FunctionComponent } from "react";
import "./RectangleShape.css";

const RectangleShape: FunctionComponent = () => {
  return (
    <div className="rectangle-shape1">
      <div className="rectangle-shape-child" />
      <div className="text-frame">
        <h1 className="smartwater">
          <span>Smart</span>
          <span className="water">water</span>
        </h1>
        <div className="vector-frame">
          <div className="frame-frame">
            <div className="ellipse-ellipse" />
            <div className="frame-frame-child" />
          </div>
          <div className="moneycheckdollarsolid-frame">
            <div className="house-solid-1-group">
              <img
                className="house-solid-1-icon1"
                loading="eager"
                alt=""
                src="/housesolid-1.svg"
              />
              <b className="inicio1">Inicio</b>
            </div>
            <div className="bs-frame">
              <img
                className="group-group-group-group-group"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <div className="clientes">Clientes</div>
            </div>
            <div className="bs-frame1">
              <img
                className="vector-icon"
                loading="eager"
                alt=""
                src="/vector-1.svg"
              />
              <div className="mapa-de-clientes">Mapa de clientes</div>
            </div>
            <div className="envio-cronometrado-1-parent">
              <img
                className="envio-cronometrado-1-icon"
                loading="eager"
                alt=""
                src="/enviocronometrado-1@2x.png"
              />
              <div className="monitoreo-de-distribuidores-container">
                <p className="monitoreo-de">{`Monitoreo de `}</p>
                <p className="distribuidores">Distribuidores</p>
              </div>
            </div>
            <div className="bs-frame2">
              <img
                className="vector-icon1"
                loading="eager"
                alt=""
                src="/vector-2.svg"
              />
              <div className="ventas">Ventas</div>
            </div>
            <div className="daniela-ayala-text">
              <img
                className="file-invoice-dollar-solid-1-icon"
                loading="eager"
                alt=""
                src="/fileinvoicedollarsolid-1.svg"
              />
              <div className="pedidos">Pedidos</div>
            </div>
            <div className="bs-frame3">
              <img
                className="vector-icon2"
                loading="eager"
                alt=""
                src="/vector-3.svg"
              />
              <div className="prstamos">Préstamos</div>
            </div>
            <div className="frame-div">
              <div className="vector-parent">
                <img className="vector-icon3" alt="" src="/vector-4.svg" />
                <div className="finanzas">Finanzas</div>
              </div>
              <img
                className="mdichevron-down-icon"
                alt=""
                src="/mdichevrondown.svg"
              />
            </div>
            <div className="frame-parent1">
              <div className="julio-espinoza-vector-wrapper">
                <div className="julio-espinoza-vector">
                  <img className="frame-set-icon" alt="" src="/vector-5.svg" />
                  <div className="reportes">Reportes</div>
                </div>
              </div>
              <img
                className="mdichevron-down-icon1"
                alt=""
                src="/mdichevrondown.svg"
              />
            </div>
            <div className="text">
              <div className="group">
                <img className="frame-icon" alt="" src="/vector-6.svg" />
                <div className="configuracin">Configuración</div>
              </div>
              <img
                className="mdichevron-down-icon2"
                alt=""
                src="/mdichevrondown-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="vistarapida">
        <img
          className="right-from-bracket-solid-1-icon"
          alt=""
          src="/rightfrombracketsolid-1.svg"
        />
        <b className="salir">Salir</b>
      </button>
    </div>
  );
};

export default RectangleShape;
