// usando um css dedicado para essa pagina

import "./error.css";

// Agora para atribuir uma classe basta usar o prefixo className no elemento desejado

// Usando componentes globais da pasta shared

import Logo from "../../components/exempleWithProps/shared/logo";

// para criar um link que pode ser um botao que tem poder de voltar para outra pagina, primeiro de um import + {Link} deve ser esse nome Link pois ele eh um elemento do proprio react-router-dom a frente coloque o from react-router-dom e por fim em vez de usar o href voce vai usar o to="path" como queremos voltar para a home basta usar a /

import {Link} from "react-router-dom";

// import com {} se deve quando o export foi feito sem o default

const Error = () => {
  return (
    <div className="error">
     <Logo/>
      <h1>Pagina nao encontrada</h1>
      <p>Algo deu errado, essa página foi apagada, volte par ao site</p>

      <Link className="btn-link" to="/">
      Voltar para Home</Link>
    </div>
  );
};

export default Error
