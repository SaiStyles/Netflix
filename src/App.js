import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { series, action, Adventure, Animation, Comedy, Drama} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import './Components/RowPost/RowPost'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <h2 className='movie'> TV SHOWS</h2>
      <RowPost  url={series} /> {/*series */}
        <h2 className='movie'>MOVIES</h2>   
      <br />
      <RowPost url={action} title="Action" isSmall/>
      <RowPost url={Comedy} title="Comedy" isSmall />
      <RowPost url={Drama} title="Drama" isSmall />
      <RowPost url={Adventure} title="Adventure" isSmall />
      <RowPost url={Animation} title="Animation" isSmall />
     
    </div>
  );
}

export default App;
