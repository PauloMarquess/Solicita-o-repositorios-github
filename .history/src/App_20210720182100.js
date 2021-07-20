import React,{userState} from "react";

function App(props) {
  const [ usuario , setUsuario] = userState('');
  
  return (
    <>
       <input className ="usuarioInput" placeholder='usuário' />
       <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
