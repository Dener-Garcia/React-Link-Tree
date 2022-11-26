// Para ter varias paginas num projeto React voce deve apos instalar importe o router dom para trocar de paginas

import {createBrowserRouter} from "react-router-dom" 

// para usar o router de paginas voce deve importar as paginas criadas agora
// observe que como usamos index.js para os nomes dos arquivos basta passar o endereco das pastas sem o nome do arquivo
// quando eu faco um import eu posso dar o nome que eu quiser

import PaginaHome from "./pages/home"
import PaginaLogin from "./pages/login"
import PaginaAdmin from "./pages/admin"
import PaginaErro from "./pages/error"

// criando o roteamento, dentro dos colchetes [vamos estipular nossas rotas e nossos caminhos]
// Apos o [ abra {e defina o caminho da pagina com o Path ele eh personalizado quando usuario digitar o endereco da barra mais o /nome-que-colocar, element seria a componente que voce importo acima}

// Criando um path: "*", e no element direcionando a pagina personalizad, toda vez que o usuario tentar ir para outra pagina ele cai nessa pagina similar a um 404 error

const routerPages = createBrowserRouter([
{
  path: "/",
  element: <PaginaHome/>
},
{
  path: "/login",
  element: <PaginaLogin/>
},
{
  path: "/admin",
  element: <PaginaAdmin/>
},
{
  path: "*",
  element: <PaginaErro/>
}
])

// Agora voce deve exportar a configuracao de rotas nesse caso criamos o routerPages, pois ele esta definindo as rotas mas nao esta renderizando nada entao de um import la no index.js da pasta src. Aqui voce de exportar somente com export e nao com export default

export {routerPages};
