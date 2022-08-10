import Home from "./Components/HomeLayout/Home";
import {Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import reportWebVitals from './reportWebVitals';
import Introduce from './Components/Introduce/introduce';
import Services from './Components/ServicePKg/Services';
import ServiceComponent from './Components/ServicePKg/ServiceComponent/SerCom';
import News from './Components/News/NewsAll/News';
import Register from './Components/Register/Register';
import NewsYte from './Components/News/NewsYte/NewsYte';
import ServiceComponent2 from "./Components/ServicePKg/ServiceComponent/SerCom2";
import ServiceComponent3 from "./Components/ServicePKg/ServiceComponent/SerCom3";
import ServiceComponent4 from "./Components/ServicePKg/ServiceComponent/SerCom4";
import ServiceComponent5 from "./Components/ServicePKg/ServiceComponent/SerCom5";
import ServiceComponent6 from "./Components/ServicePKg/ServiceComponent/SerCom6";
import ServiceComponent7 from "./Components/ServicePKg/ServiceComponent/SerCom7";
import ServiceComponent8 from "./Components/ServicePKg/ServiceComponent/SerCom8";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/introduce" element={<Introduce/>} />
        <Route path="/service" element={<Services/>}/>
        <Route path="/serCom" element={<ServiceComponent/>} />
        <Route path="/serCom2" element={<ServiceComponent2/>} />
        <Route path="/serCom3" element={<ServiceComponent3/>} />
        <Route path="/serCom4" element={<ServiceComponent4/>} />
        <Route path="/serCom5" element={<ServiceComponent5/>} />
        <Route path="/serCom6" element={<ServiceComponent6/>} />
        <Route path="/serCom7" element={<ServiceComponent7/>} />
        <Route path="/serCom8" element={<ServiceComponent8/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/newYte" element={<NewsYte/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
