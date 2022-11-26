import "./logo.css"

// componente reutilizavel e comum a todas as telas

// usando o componente do react router para transformar o DevLINK em um link clicavel para levar para pagina de home

import { Link } from "react-router-dom"

const Logo = ()=>{
    return (
        <Link to="/">
        <h1 className="logo-main">Dev<span>LINK</span></h1>
        </Link>
    )
}

export default Logo