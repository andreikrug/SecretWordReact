import React, { useState } from 'react';
import './PageTwo.css';


const PageTwo = ({palavra, funcao, desc}) => {
  const word = palavra;
  let count = -1;

const [a, setA] = useState('');
const [b, SetB] = useState('');
const [c, setC] = useState('');
const [errada, setErrada] = useState('')
const [contador, setContador] = useState(0);
function valida() {
  var valor = document.getElementById('input').value;

    for(let i = 0; i<3; i++){
    if(word[i] == valor)
    {
      if(i == 0){
        setA(word[i]);
        setContador(contador + 1);
        if(c != '' && b != ''){
          setInterval(funcao, 1000);
        }
      } else if (i == 1){
        SetB(word[i]);
        setContador(contador + 1);
        if(c != '' && a != ''){
          setInterval(funcao, 1000);
        }
      } else {
        setC(word[i]);
        setContador(contador + 1);
        if(b != '' && a != ''){
          setInterval(funcao, 1000);
        }
      }
      
      
    } else 
    {
      for(let u = 0; u<errada.length; u++){
        if(errada[u] == valor ){
           return;
        }
      }
      setErrada(valor + '\n' + errada)
    }
  
     
  if(contador == 3){
    console.log('venceu');
    funcao();
  }
  }
  
 

    
}

function handleButton(){
    var valor = document.getElementById('input').value;
    valida();
   
         

}





  return (
    <div className='principal'>
      <div>
        <h1>Dica:{desc}</h1>
      </div>
      <div className='main'>
      <div className='box'>
          <h1 className='palavra'>{a}</h1>
        </div>
        <div className='box'>
          <h1 className='palavra'>{b}</h1>
        </div>
        <div className='box'>
          <h1 className='palavra'>{c}</h1>
        </div>
      </div>
      <div className='form'>
          <form>
              <label htmlFor="digite" className='label'>digite uma letra aqui:</label>
              <input type="text" name='digite' maxLength={1} className='input' id='input'/>
              <input type="button" value="inserir" className='botao' onClick={handleButton} />
          </form>
      </div>
      <div className="errada">
         <h2>Letras usadas : {errada}</h2>
      </div>
    
    </div>
    
    
  )
}

export default PageTwo;