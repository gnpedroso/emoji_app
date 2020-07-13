import React from 'react';

export default props => {
    return (
        <div>
            <form>
                <input 
                type='text' 
                className='input'
                onChange={props.searchSpace}
                placeholder='Type something...'></input>
            </form>
        </div>
    )
}