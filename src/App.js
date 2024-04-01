import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import View from './components/View';
import { useState } from 'react';
import Controller from './components/Controller';


function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <Header/>
       <View count={count}/>
       <Controller handleSetCount={handleSetCount}/>
      <Footer/>
    </div>
  );
}

export default App;
