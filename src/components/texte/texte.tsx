import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Checkbox = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10.9, 80, 40, 20];
  const numerosMaiorQueTres = numeros.filter((num) => num > 5);

  const [nomePessoas, setNomePessoas] = useState([]); // Inicializar como array

  useEffect(() => {
    fetch("https://instafakeapi.com/api/v1/fake/people")
      .then((response) => response.json())
      .then((data) => {
        // Assumindo que a API retorna um array de objetos com o campo `name`
        setNomePessoas(data.data); // Ajuste o nome da chave conforme necessário
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Números maiores que 5:</h3>
      <ul>
        {numerosMaiorQueTres.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <h3>Nomes de pessoas:</h3>
      <ul>
        {nomePessoas.map((person, index) => (
          <li key={index}>
            {person} {/* Assumindo que a chave do nome seja 'name' */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkbox;
