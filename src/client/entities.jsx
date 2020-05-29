import React from "react";
import ReactDOM from "react-dom";

import tweets from "../tweets";
import urlEntity from "./clients/urlentity";

export const entities = (props) => {
  const allEntities = props.urls.map((link) => {
    return <urlEntity url={link.url} />;
  });
  return { allEntities };
};
