import React from "react";
import '../styles/NotFound.scss';

function NotFound() {
  return (
    <div>
      <h1 className="title-404">404</h1>
      <p className="text-404">Oops! Pagina no encontrada 😿</p>
      <a className="button-404" href="/">
        Regrese a la página inicial, es mejor.
      </a>
    </div>
  );
}

export default NotFound;
