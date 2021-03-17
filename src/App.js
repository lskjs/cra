import logo from './logo.svg';
import './App.css';


function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Qwe {
  asd = 123;
  @readonly
  b() {}
  render() {
    return 'Qwe'
  }
}
const qwe = new Qwe();






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ${qwe.render()}
        </a>
      </header>
    </div>
  );
}

export default App;
