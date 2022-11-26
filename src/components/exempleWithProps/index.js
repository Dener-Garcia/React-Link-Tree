import React from "react";

// Criando componente que sao utilizados e reutilizados varias vezes e lembre-se componentes sempre devem iniciar com letra maiuscula
// quando se coloca o props dentro dos (colchetes) voce pode parametrizar quando for usar trocando os valores
function Aluno(props){
    return(
      <div>
        <h4>Bem vindo {props.nome}</h4>
        <h6>Aluno do curso {props.curso}</h6>
      </div>
    )
  }

  export default Aluno