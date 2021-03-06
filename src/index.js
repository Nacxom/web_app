import { obtenerProductos } from "./App.js";
import { existeCarro } from "./components/carro.js";
import { mostrarUsuario } from "./components/login.js";

let ruta = "src/data/data_productos.json";

document.addEventListener('DOMContentLoaded', () => {
  obtenerProductos(ruta);
  existeCarro();
  mostrarUsuario();
});