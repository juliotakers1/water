import { FunctionComponent } from "react";
import RectangleShape from "../components/RectangleShape";
import TextFrame from "../components/TextFrame";
import VistaRapidaFrame1 from "../components/VistaRapidaFrame1";
import VistaRapidaFrame from "../components/VistaRapidaFrame";
import GroupGroupGroupGroupGroup from "../components/GroupGroupGroupGroupGroup";
import "./Home.css";
import { useEffect, useState } from 'react';
import { db } from "../firebaseConfig";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Home: FunctionComponent = () => {
  const [totalPedidos, setTotalPedidos] = useState(0);

  useEffect(() => {
    // Función asincrónica para obtener el total de documentos en la colección "pedidos"
    const getTotalPedidos = async () => {
      try {
        const pedidosRef = collection(db, 'pedidos');
        const querySnapshot = await getDocs(pedidosRef);

        // Actualiza el estado con el total de documentos en la colección "pedidos"
        setTotalPedidos(querySnapshot.size);
      } catch (error) {
        console.error('Error al obtener el total de documentos en la colección "pedidos":', error);
      }
    };

    // Llama a la función para obtener el total de documentos en la colección "pedidos"
    getTotalPedidos();
  }, []);
  return (
    <div className="home">
      <div className="lts">5 lts</div>
      <div className="main-container">
        <div className="group-frame">
          <RectangleShape />
          <div className="daniela-ayala">
            <div className="daniela-ayala-child" />
            <div className="botellonde-lts">1</div>
          </div>
        </div>
      </div>
      <div className="lts1">5 lts</div>
      <main className="moneycheckdollarsolid-parent">
        <section className="moneycheckdollarsolid">
          <div className="bs">
            <div className="nombre-parent">
              <div className="nombre">
                <div className="frame-parent">
                  <div className="house-solid-1-parent">
                    <img
                      className="house-solid-1-icon"
                      loading="eager"
                      alt=""
                      src="/housesolid-1-1.svg"
                    />
                    <h1 className="inicio">Inicio</h1>
                  </div>
                  <div className="rectangle-shape">
                    <TextFrame
                      clientesNuevos="Clientes nuevos"
                      danielaIcon="18"
                      propFlex="1"
                      propMinWidth="169px"
                      propAlignSelf="stretch"
                      propBackgroundColor="#d5ffd4"
                      propColor="#0d970a"
                    />
                    <TextFrame
                      clientesNuevos="Préstamos activos"
                      danielaIcon="25"
                      propFlex="1"
                      propMinWidth="169px"
                      propAlignSelf="stretch"
                      propBackgroundColor="#ffd4d4"
                      propColor="#a1140b"
                    />
                  </div>
                </div>
                <h3 className="acciones-rpidas">Acciones rápidas</h3>
              </div>
              <div className="rubn-gonzlez">
                <TextFrame
                  clientesNuevos="Pedidos totales"
                  danielaIcon={totalPedidos.toString()} 
                  propFlex="unset"
                  propMinWidth="unset"
                  propAlignSelf="unset"
                  propBackgroundColor="#d5ffd4"
                  propColor="#0d9704"
                />
              </div>
              <div className="rubn-gonzlez1">
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="ingresos-totales">Ingresos totales</div>
                  <div className="frame-group">
                    <div className="moneycheckdollarsolid-group">
                      <div className="moneycheckdollarsolid1">1,783</div>
                      <div className="bs1">
                        <h1 className="bs2">Bs</h1>
                      </div>
                    </div>
                    <div className="frame-container">
                      <button className="wrapper">
                        <div className="div">+8.2%</div>
                      </button>
                      <div className="en-el-ltimo">En el último mes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="component-16-icon"
            loading="eager"
            alt=""
            src="/component-16.svg"
          />
        </section>
        <form className="clientes-frame">
          <VistaRapidaFrame1 />
          <VistaRapidaFrame />
          <div className="rectangle-frame" />
        </form>
        <GroupGroupGroupGroupGroup />
      </main>
    </div>
  );
};

export default Home;
