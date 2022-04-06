import React, { useState } from "react";
import "./ListaDeUsuarios.css";
function ListaDeUsuarios({ users, Component }) {
  const [id, setId] = useState(1);
  const activar = (userID) => {
    if (id === userID) {
      setId(null);
    } else {
      setId(userID);
    }
  };

  return (
    <section className="ListaDeUsuarios">
      <header className="ListaDeUsuarios-titulo">
        <h1 className="titulo">Usuarios</h1>
      </header>

      {!users ? (
        <React.Fragment></React.Fragment>
      ) : (
        users.map((user) =>
          user.id === id ? (
            <Component
              onClick={() => activar(user.id)}
              nombre={user.username}
              id={user.id}
              email={user.email}
              key={user.id.toString()}
              activo="activo"
            />
          ) : (
            <Component
              onClick={() => activar(user.id)}
              nombre={user.username}
              id={user.id}
              email={user.email}
              key={user.id.toString()}
              activo=""
            />
          )
        )
      )}
    </section>
  );
}

export { ListaDeUsuarios };
