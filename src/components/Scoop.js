import React, { useState } from "react";
import Menu from "./Menu.js";
import ScoopListItem from "./ScoopListItem.js";

export default function Scoop(props) {
  return (
    <>
      {props.el === undefined ? (
        <Menu />
      ) : (
        <ScoopListItem el={props.el} index={props.index} />
      )}
    </>
  );
}
