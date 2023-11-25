import "./App.css";
import ResultsModal from "./components/resultsModal/ResultsModal";
import AppLayout from "./components/AppLayout";
import AllSelectedNominess from "./components/selectedNominees/AllSelectedNominess";

function App() {
  return (
    <div className="App">
      <AppLayout />
      <ResultsModal>
        <AllSelectedNominess />
      </ResultsModal>
    </div>
  );
}

export default App;
