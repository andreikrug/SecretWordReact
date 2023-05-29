import React from 'react'

const Venceu = () => {
  function refreshPage(){ 
    window.location.reload(); 
  }
  return (
    <div>
        <h1 style={{textAlign:'center', marginTop:'50px'}}>Parabéns, você venceu o Jogo!!!!!</h1>
        <button style={{textAlign:'center', width:'250px', height:'50px', borderRadius:'50px',marginLeft:'600px', marginTop:'100px'}} onClick={refreshPage}>Aperte aqui para jogar novamente</button>j
    </div>
  )
}

export default Venceu;