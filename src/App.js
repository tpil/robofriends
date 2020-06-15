import React from 'react';
import ReactDom from 'react-dom';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';  //we need to destruct cause I didn't export default


class App extends React.Component{
    constructor(){
        super();//we need super to write about state
        this.state={
            robots: robots,
            searchfield :''
        }
    }
    //we create a trigger function for searchbox. We will pass it as argument from the app component
    onSearchChange(event){
        //event.target.value is the way to get the value of event
        console.log(event.target.value);
    }
    render(){
        return(
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={this.state.robots} />
            </div>
        );

    }
   
}

export default App;

//We use class components to pass props/states between 2 components through the parent Component 
