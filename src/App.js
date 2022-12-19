import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import CascadeExample1 from "./components/CascadeExample1";
import FormExample1 from "./components/FormExample1";

import TableExample1 from "./components/TableExample1";
import TableExample2 from "./components/TableExample2";
import TableExample3 from "./components/TableExample3";
import TableExample4 from "./components/TableExample4";
import TableExample5 from "./components/TableExample5";
import TableExample6 from "./components/TableExample6";
import TableExample7 from "./components/TableExample7";
import TableExample8 from "./components/TableExample8";
import TableExample9 from "./components/TableExample9";

import EditableTable from "./components/EditableTable";
import EditableTable2 from "./components/EditableTable2";
import EditableTable3 from "./components/EditableTable3";

import Variants from "./components/Variants";
import Variants2 from "./components/Variants2";
import ImageExample from "./components/ImageExample";
import FormExample2 from "./components/FormExample2";
import IframeComp from "./components/customIframe/IframeComp";
import IframeExample from "./components/IframeExample";


function App () {
  
    return (
        <div className="App">
            <Navbar></Navbar>
            <header className="App-header">
              <Routes>
                    <Route path="/" element={<div>Home PAGE</div>}></Route>
                    <Route path="/sample1" element={<TableExample1 />}></Route>
                    <Route path="/sample2" element={<TableExample2 />}></Route>
                    <Route path="/sample3" element={<TableExample3 />}></Route>
                    <Route path="/sample4" element={<TableExample4 />}></Route>
                    <Route path="/sample5" element={<TableExample5 />}></Route>
                    <Route path="/sample6" element={<TableExample6 />}></Route>
                    <Route path="/sample7" element={<TableExample7 />}></Route>
					<Route path="/sample8" element={<TableExample8 />}></Route>
                    <Route path="/sample9" element={ <TableExample9 /> }></Route>
                    <Route path="/sample10" element={ <FormExample1 /> }></Route>
                    <Route path="/sample11" element={ <CascadeExample1 /> }></Route>
                    <Route path="/sample12" element={ <Variants /> }></Route>
                    <Route path="/sample13" element={ <EditableTable /> }></Route>
                    <Route path="/sample14" element={ <EditableTable2 /> }></Route>
                    <Route path="/sample15" element={ <Variants2 /> }></Route>
                    <Route path="/sample16" element={<EditableTable3 />}></Route>
                    <Route path="/sample17" element={ <ImageExample /> }></Route>
                    <Route path="/sample18" element={<FormExample2 />}></Route>
                    <Route path="/sample19" element={<IframeComp />}></Route>
                    <Route path="/sample20" element={<IframeExample />}></Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
