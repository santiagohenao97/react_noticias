import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(()=>{

    const ConsultarAPI = async () =>{
      const key = 'd4af8e9fde7245e8a61236a4f7b1374c'
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${key}`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      setNoticias(noticias.articles)
      console.log(url)
    }
    ConsultarAPI()

  }, [categoria])

  return (
    <>
      <Header titulo="Buscador de noticias"/>
      <div className="container white">
        <Formulario setCategoria={setCategoria}/>
      </div>
      <ListadoNoticias noticias={noticias}/>
    </>
    
  );
}

export default App;
