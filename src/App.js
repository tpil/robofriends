import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';  //we need to destruct cause I didn't export default


const App =()=>{

    return(
        <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    );
}

export default App;
