import "./Usuario.css";
function Usuario({ activo, onClick, nombre, id, email }) {
  return [
    <div key={id} onClick={() => onClick(id)} className={`Alumno ${activo}`}>
      <div className="DatosPrincipales">
        <span className="dato"> {nombre}</span>
      </div>

      <div className={`DatosSecundarios `}>
        <div className="Datos">
          <span className="dato">ID: {id}</span>
          <p className="dato">{email}</p>
        </div>
        <div className="Imagen cargando "></div>
      </div>
    </div>,
  ];
}

export { Usuario };
