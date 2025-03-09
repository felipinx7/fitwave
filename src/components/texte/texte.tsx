import { useState } from "react";

const dados = [
  { id: 1, nome: "Maçã", categoria: "Vermelha" },
  { id: 2, nome: "Banana", categoria: "Amarela" },
  { id: 3, nome: "Morango", categoria: "Vermelha" },
  { id: 4, nome: "Limão", categoria: "Verde" },
  { id: 5, nome: "Abacaxi", categoria: "Amarela" },
  { id: 6, nome: "Kiwi", categoria: "Verde" },
];

export default function FiltroTreinos() {
  const [ValorInput , setValorInput ] = useState("")

  return (
    <div>
      <select name="" id="">
        <option value="Todos">Todas as Frutas</option>
        <option value="Amarela">Banana</option>
        <option value="Maçã">Maçãs</option>
        <option value="Verde">Pêras</option>
      </select>

      <br />
      <br />
      <br />
      {}
    </div>
  );
}
