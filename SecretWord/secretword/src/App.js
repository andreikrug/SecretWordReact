import logo from './logo.svg';
import './App.css';
import PageOne from './Components/PageOne';
import { useState } from 'react';
import PageTwo from './Components/PageTwo';
import Venceu from './Components/Venceu';


function App() {
 const [change, setChange] = useState('one')
  const troca = () => {
    setChange('two');
    let index = Math.floor(Math.random() * 5);
    
    setEscolhida(words[index].word);
    setDesc(words[index].desc);
  }


  const words = [
    {desc: "tempos passados", word: 'era'},
    {desc: "o que já passou", word:'foi'},
    {desc: "cumprimento", word: 'ola'},
    {desc: "o que alguém é", word:'sou'},
    {desc: "quando alguém já visitou", word:'fui'}
  ]
  const [escolhida, setEscolhida] = useState('');
  const [desc, setDesc] = useState('');
  let f;
  
const funcao =  () => {
  setChange('vencedor');
  console.log(change);
}


  
  return (
    
    <div className="App"> 
      {change == 'one' &&   <PageOne change={troca}/>}
      {change == 'two' && <PageTwo palavra={escolhida} funcao={funcao} desc={desc}/>}
      {change == 'vencedor' && <Venceu/> }
    </div>
  );
}

export default App;
