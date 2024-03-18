import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner"
import useState from "react";
import satData from "./components/satData";
import "./App.css"
import "./components/styling.css"

function App() {
  return (
    <div>
      <Banner/>
      <Buttons />
      <Table />
    </div>
  );
}

export default App;