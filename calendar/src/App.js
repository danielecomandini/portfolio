import "./App.css";
import Row from "./UI/materials/grid/Row";
import Column from "./UI/materials/grid/Column";

function App() {
  return (
    <div className="App-header">
    <Row>
      <Column laptop={3}>LEFT</Column>
      <Column laptop={9}>RIGHT</Column>
    </Row>
    </div>
  );
}

export default App;
