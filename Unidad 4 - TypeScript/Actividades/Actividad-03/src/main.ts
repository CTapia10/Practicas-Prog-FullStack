import "../src/style.css";
const valor = document.getElementById("valor") as HTMLParagraphElement;
const btnSumar = document.getElementById("btn-sumar") as HTMLButtonElement;
const btnRestar = document.getElementById("btn-restar") as HTMLButtonElement;
let contador: number = 0;

const actualizarValor = (): void => {
  valor.textContent = String(contador);
};

btnSumar.addEventListener("click", () => {
  contador++;
  actualizarValor();
});

btnRestar.addEventListener("click", () => {
  contador--;
  actualizarValor();
});

