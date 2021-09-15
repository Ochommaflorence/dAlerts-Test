import { DataProvider } from "./components/DataProvider";
import Navbar from "./components/Navbar";
import Alerts from "./components/Pages/Alerts";



function App() {
  return (
    <DataProvider>
       <Navbar/>
       <Alerts />
    </DataProvider>
  );
}

export default App;
