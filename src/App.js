import "./App.css";
import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Tarea } from "./Tarea";
import { ListaDeUsuarios } from "./ListaDeUsuarios";
import { ListaTareasSeccion } from "./ListaTareasSeccion";
import { Nav } from "./Nav";
import { Usuario } from "./Usuario";

function App(props) {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const [users, setUsers] = useState();
  const [cargando, setCargando] = useState("Cargando");
  const fetchUsers = async () => {
    let users = await fetch(url).then((response) => response.json());
    console.log(users);
    setUsers(users);
    setCargando("Cargado");
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return [
    <Nav />,
    <Header />,
    <Content>
      <Main>
        <header className="Arriba">
          <ListaTareasSeccion />
        </header>
        <footer className="Abajo">
          <Tarea></Tarea>
          <Tarea></Tarea>
          <Tarea></Tarea>
          <Tarea></Tarea>
          <Tarea></Tarea>
          <Tarea></Tarea>
        </footer>
      </Main>
      <Sidebar>
        <ListaDeUsuarios Component={Usuario} users={users} />
      </Sidebar>
    </Content>,

    <Footer />,
    <div className={`${cargando === "Cargando" ? "Cargando" : ""}`}>
      <div className="lineaCarga"></div>
    </div>,
  ];
}

export default App;
