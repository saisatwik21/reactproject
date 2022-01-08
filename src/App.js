import logo from './logo.svg';
import './App.css';


  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    function App(){
      var name="sai";
      return(
    
    <div>
      <h1>REACT APPLICATION</h1>
      <p>paragraph data</p>
      <h2>{name}</h2>
      <p>(5+6)</p>
    </div>
      );


}

export default App;
