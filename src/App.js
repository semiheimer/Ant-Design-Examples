import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TableExample1 from "./components/TableExample1";
import TableExample2 from "./components/TableExample2";
import TableExample3 from "./components/TableExample3";
import TableExample4 from "./components/TableExample4";
import TableExample5 from "./components/TableExample5";
import TableExample6 from "./components/TableExample6";

function App() {

	
  return (
	  <div className="App">
		  <Navbar></Navbar>
		  <header className="App-header">		  
			  <h1>TABLES</h1>			
			  <Routes>			  
				  <Route path="/sample1" element={<TableExample1 />}></Route>
				  <Route path="/sample2" element={<TableExample2 />}></Route>
				  <Route path="/sample3" element={<TableExample3 />}></Route>
				  <Route path="/sample4" element={<TableExample4 />}></Route>
				  <Route path="/sample5" element={<TableExample5 />}></Route>
				  <Route path="/sample6" element={<TableExample6/>}></Route>
			  </Routes>
		  </header>

	
    </div>
  );
}

export default App;
