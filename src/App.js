import "./App.css";
import BarCode from "./components/BarCode";

// import QrCode from "./components/QrCode";

function App() {
 
  console.log('first')
  return (
    <div className="App">
      <h3>barCode Generator</h3>
    <BarCode />
      <ul></ul>
      {/*
          <QrCode />
        */}
    </div>
  );
}

export default App;
