import React from 'react';
import './PageOne.css';

const PageOne = ({change}) => {
  return (
    <div className='principal'>
        <h1>Secret Word, o Jogo das palavras</h1>
        <h2>Clique no botão para jogar</h2>
        <button className='b1' onClick={change}>Jogar</button>
    </div>
  )
}

export default PageOne;