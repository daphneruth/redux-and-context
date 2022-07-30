import { useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
 const setStore =  useState(globalState); 
}