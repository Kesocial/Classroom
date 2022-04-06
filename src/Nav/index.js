import "./Nav.css";

function Nav(props) {
  const activar = (userID) => {
    console.log(userID);
  };

  return (
    <section className="Nav">
      <button onClick={() => activar()} className="Nav-boton titulo">
        Inicio
      </button>
      <button onClick={() => activar()} className="Nav-boton titulo">
        Clases
      </button>
      <button onClick={() => activar()} className="Nav-boton titulo">
        Usuarios
      </button>
    </section>
  );
}

export { Nav };
