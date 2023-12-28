import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Services/>
        <Experience />
        <Work />
    </div>
  );
}

export default App;
