import './App.css';
import Testimonio from './componentes/Testimonio';

const lista = [
                {nbre: "Tiny Stole",titulo: "Desarrolladora web", src:"shwan"},
                {nbre: "Fefe Garcia",titulo: "Ingeniero Informatico", src:"sarah"},
                {nbre: "Oscar Garcia",titulo: "Data Analytic", src:"emma"},
              ];
let elementos=[];
for(let i=0; i<lista.length;i++){
  elementos.push(<Testimonio
                    key={i}
                    src={lista[i].src }
                    nbre={lista[i].nbre}
                    titulo={lista[i].titulo} />);
}
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
          <h1>Testimonios</h1>
            { elementos}
          
      </div>
      
    </div>
  );
}

export default App;
