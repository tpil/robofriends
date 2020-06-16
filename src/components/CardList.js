import React from 'react';
import Card from './Card.js';
const CardList =({robots}) =>{
    /*This will use our custom ErrorBoundary component
    if(true){
        throw new Error('This is some error');
    }
    */
    return(
        <div>
         {
                robots.map((user, i) =>{
                //return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
                return (
                    <Card key={i} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email} 
                        />
                    );
                    
                  })
        }
        </div>

    );
}

export default CardList;