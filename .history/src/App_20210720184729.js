import React, {useState} from "react";
import axios from "axios";
function App(props) {
  const [ usuario , setUsuario] = useState('');

  function handlePesquisa (){
    console.log (usuario);

  }
  return (
    <>  <p>{usuario}</p>
       <input className ="usuarioInput" placeholder='Usuário' value ={usuario} onChange={e =>setUsuario(e.target.value)} />
       <button type="button" onClick ={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
