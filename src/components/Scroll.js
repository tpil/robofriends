import React from 'react';

const Scroll = (props) =>{
    return (
        <div className='p6 tc' style={{overflowY:'scroll', border:'3px solid black', height:'800px'}}>
            {props.children}
        </div>
        );
}

export default Scroll;

/*React includes
    props,chlidren,state
    we use props.children when we want to return the content that is wrapped in our component

    we can also write css inside JSX
*/
