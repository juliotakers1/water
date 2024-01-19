import { FunctionComponent } from "react";
import "./VistaRapidaFrame.css";
import { useState } from "react";
import { db } from "../firebaseConfig"; // Ruta correcta al archivo de configuración

const VistaRapidaFrame: FunctionComponent = () => {
  const [pedidoRealizado, setPedidoRealizado] = useState(false);

  const handleRealizarPedido =async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Lógica para guardar el pedido en Firebase
    event.preventDefault();
    try {
      const pedidoData = {
        // Datos del pedido que deseas almacenar
        cliente: '',
        producto: '',
        cantidad: 0,
        total: 0,
        // Otros campos necesarios
      };

      // Guardar el pedido en la colección "pedidos"
      await db.collection("pedidos").add(pedidoData);
console.log("Pedido guardado correctamente");
      // Actualizar el estado para indicar que el pedido se ha realizado
      setPedidoRealizado(true);
    } catch (error) {
      console.error("Error al guardar el pedido en Firebase:", error);
    }
  };

  return (

    
    <div className="vista-rapida-frame1">
      <div className="vista-rapida-frame-item" />
      <div className="realizar-pedido-parent">
        <div className="realizar-pedido">Realizar pedido</div>
        <img
          className="octiconmulti-select-161"
          alt=""
          src="/octiconmultiselect16.svg"
        />
      </div>
      <div className="vista-rapida-frame-inner">
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="rectangle-group">
              <div className="frame-item" />
              <div className="cliente">Cliente</div>
              <img
                className="mdichevron-down-icon3"
                alt=""
                src="/mdichevrondown-3.svg"
              />
            </div>
            <div className="rectangle-container">
              <div className="frame-inner" />
              <div className="botellon-de-20">Botellon de 20 Lts</div>
              <img
                className="mdichevron-down-icon4"
                alt=""
                src="/mdichevrondown-3.svg"
              />
            </div>
          </div>
          <div className="frame-parent5">
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <div className="cantidad">Cantidad</div>
              <div className="component-4">
                <img className="vectorx-icon" alt="" src="/vector-7.svg" />
                <div className="rectanglesmall-parent">
                  <div className="rectanglesmall" />
                  <div className="div4">1</div>
                </div>
                <img className="vectorx-icon1" alt="" src="/vector-8.svg" />
              </div>
            </div>
            <div className="rectangle-parent2">
              <div className="frame-child1" />
              <div className="frame">
                <div className="div5">15</div>
              </div>
              <div className="line-div" />
              <div className="bs7">Bs</div>
            </div>
          </div>
          <button className="frame-button" onClick={handleRealizarPedido}>
            <div className="frame-child2" />
            <div className="realizar-pedido1">Realizar pedido</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VistaRapidaFrame;
