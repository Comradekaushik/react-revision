import React from "react";

import ReactDOM from "react-dom/client";

import Memeheader from "./meme-header";

import Memegeneratorform from "./memegenerator-form";

export default function Meme() {
  return (
    <>
      <Memeheader />

      <Memegeneratorform/>
    </>
  );
}
