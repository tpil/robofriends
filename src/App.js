import React from 'react';
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
    //******we create a trigger function for searchbox. We will pass it as argument from the app component
    onSearchChange = (event) =>{
        //console.log(event.target.value); event.target.value is the way to get the value of the object
        this.setState({searchfield:event.target.value});
      
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());

        });
        //console.log(filteredRobots);

        return(
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );

    }
   
}

export default App;


/*
--------Guide---------
1. we create smaller components first whhich we will use too frequently (Card)
2.We put them in a list container CardList
3.we Created the search input component to filter them
//We use class components to pass props/states between 2 components through the parent Component 
4. we create the class App component to communicate the 2 components
5.We created the states and the event function to pass properties
6. we change the state of searchfiled in the event function
7.we pass the result as parametres to the components
*/
