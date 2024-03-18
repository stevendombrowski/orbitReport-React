import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner"
import useState from "react";
import satData from "./components/satData";
import "./App.css"
import "./components/styling.css"

function App() {
  const [sat, setSat] = useState(satData)
  const displayStats = [...new Set(satData.map((data) => data.orbitType))]
  let filterByType = (currentType) => {
    let displayStats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displayStats)
  };
  return (
    <div>
      <Banner/>
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displayStats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;