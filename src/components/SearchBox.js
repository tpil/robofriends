import React from 'react';

//we can deconstruct props inside arrow function so we don't use props.searchChange
//onChange is an html event in form elements
const SearchBox = ({searchfield,searchChange}) => {

    return(
        <div >
            <input 
                type='search' 
                className='pa3 ba b--green bg-lightest-blue' 
                placeholder='search robots'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;


