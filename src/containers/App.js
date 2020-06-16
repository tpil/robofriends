import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';  //we need to destruct cause I didn't export default
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component{
    constructor(){
        super();//we need super to write about state
        this.state={
            robots: [],
            searchfield :''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));
    }

    /*we create a trigger function for searchbox. We will pass it as argument from the app component
    The trigger function MUST be EQUAL TO AND ARROW FUNCTION because when we pass the function as argument 
    this.setState() can't be used in the searchBox functional component and gets error*/
    onSearchChange = (event) =>{
        //console.log(event.target.value); event.target.value is the way to get the value of the object
        this.setState({searchfield:event.target.value});
      
    }
    render(){
        const {robots,searchfield} = this.state; //we deconstruct this.state so we don't need to use it
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());

        });
        //console.log(filteredRobots);
        if (robots.length === 0){
            return <h1>Loading ...</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }

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
8. We used react lifecycle methods to fetch() (it's a window.fetch() method which come to all browsers) 
    some predefined users from a page (API). Convert to JSON file and setState robots with the new array. 
    Removed the robots.js array.
9. We created a <Scroll /> to wrap the cardlist in so we can see search bar all the time. 
10. Clean up code and ile organize  
11. npm build
*/
