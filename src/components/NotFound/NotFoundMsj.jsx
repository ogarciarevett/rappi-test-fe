import React from "react";
import { notFoundMsj } from "./NotFound.module.scss";

export default () => (
  <p className={notFoundMsj}>
    No encontramos lo que buscas{" "}
    <span role="img" aria-label="sad">
      😔
    </span>{" "}
    intentalo de nuevo
  </p>
);
