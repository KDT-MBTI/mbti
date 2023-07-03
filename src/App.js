import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/Test1' element={<Test1 />}></Route>
          <Route path='/Test2' element={<Test2 />}></Route>
          <Route path='/Test3' element={<Test3 />}></Route>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
