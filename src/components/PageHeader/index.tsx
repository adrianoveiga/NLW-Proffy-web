import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

// Precisa criar uma interface que irá definir os parâmetros do componente
// Syntax:
//   param: type;    (obrigatório)
//   param?: type;   (opcional)
interface PageHeaderProps {
  title: string;
}


// A função deve se tornar algo constante e usar a notação de arrow function
// Deve usar o React.FC (ou React.FunctionComponent)
// Os parâmetros "props" conterá tudo o que for passado ao componente definido na interface
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
}

export default PageHeader;
