import { useState } from "react";
import "./ListaTareasSeccion.css";
const listaTareasSeccion = [
  {
    id: 1,
    titulo: "Materia 1",
    activo: false,
  },
  {
    id: 2,
    titulo: "Materia 2",
    activo: false,
  },
  {
    id: 3,
    titulo: "Materia 3",
    activo: false,
  },
  {
    id: 4,
    titulo: "Materia 4",
    activo: false,
  },
  {
    id: 5,
    titulo: "Materia 5",
    activo: false,
  },
  {
    id: 6,
    titulo: "Materia 6",
    activo: false,
  },
];

function ListaTareasSeccion(props) {
  const aumentarID = () => {
    if (idSeleccionada < listaTareasSeccion.length - 1) {
      setIdSeleccionada(idSeleccionada + 1);
    }
  };
  const disminuirID = () => {
    if (idSeleccionada > 0) {
      setIdSeleccionada(idSeleccionada - 1);
    }
  };
  const [idSeleccionada, setIdSeleccionada] = useState(0);
  return (
    <header className={`ListaTareasSeccion  `}>
      <button onClick={disminuirID}>{"<"}</button>
      <h1 className="titulo">
        {listaTareasSeccion[idSeleccionada].titulo}
      </h1>{" "}
      {props.children}
      <button onClick={aumentarID}>{">"}</button>
    </header>
  );
}

export { ListaTareasSeccion };
