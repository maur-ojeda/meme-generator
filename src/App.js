import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import html2canvas from 'html2canvas'

function App() {
  //estados
  // linea1 variable , setlinea1 funcion
  const [linea1, setlinea1] = useState('linea uno por defecto');
  const [linea2, setlinea2] = useState('linea dos por defecto');
  const [imagenSeleccionada, setimagenSeleccionada] = useState('https://picsum.photos/id/237/500/500');


  const onChangelinea1 = (valor) => {
    setlinea1(valor.target.value)
  }


  const onChangelinea2 = (valor) => {
    setlinea2(valor.target.value)
  }


  const onChangeImagen = (valor) => {
    setimagenSeleccionada('https://picsum.photos/id/' + valor.target.value + '/500/500');
  }


  const onClickExportar = (valor) => {
    alert('EXPORTAR')

    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas)
    });

  }


  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="1003">Ciervo</option>
        <option value="102">Frambuesa</option>
        <option value="1025">Perro</option>
        <option value="1020">Osos</option>
        <option value="103">Zapatillas</option>
      </select>
      <br />
      <input type="text" name="" id="" placeholder="primera línea" onChange={onChangelinea1} />
      <br />
      <input type="text" name="" id="" placeholder="Segunda línea" onChange={onChangelinea2} />
      <br />
      <button onClick={onClickExportar}>Exportar</button>


      <div className="meme" id="capture">
        <span className='linea1'>{linea1}</span>
        <span className='linea2'>{linea2}</span>
        <img className='imagen' src={imagenSeleccionada} alt="" />
      </div>
    </div>
  );
}

export default App;
