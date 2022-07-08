
import './App.css';
import Contador from './components/Contardor';
import Temparatura from './components/Temperatura';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Contador/>
      <Temparatura/>
      <Form/>
    </div>
  );
}

export default App;
