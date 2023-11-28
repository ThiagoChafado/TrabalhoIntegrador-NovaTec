import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SalesTable from "./components/SalesTable/SalesTable";
import Login from "./components/Login/Login";
import ExitsTable from "./components/ExitsTable/ExitsTable";
import Footer from "./components/Footer/Footer";
import AddSale from "./components/AddSale/AddSale";
import AddExit from "./components/AddExit/AddExit";
import EditSeller from "./components/EditSeller/EditSeller";
import PreferencesPage from "./components/PreferencesPage/PreferencesPage";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* responsivo */}

      <Navbar/>  
      {/* responsivo - falta tablet; esperar rotas */}

      {/* <AddSale/>   */}
      {/* responsivo */}

      {/* <AddExit/>  */}
      {/* responsivo */}

      <SalesTable />
      {/* precisa fazer */}

      {/* <ExitsTable/> */}
      {/* <EditSeller/> */}
      {/* precisa fazer */}

      <PreferencesPage/>
      {/* nao terminei ainda */}

      {/* <Footer/> */}
      {/* responsivo - falta tablet; esperar rotas    */}
    </div>
  );
}

export default App;
