import React from 'react'

export default props => {

    function uppercaseFirst(str) {

        let array1 = str.split(' ');
        let newarray1 = [];

        for (let x = 0; x < array1.length; x++) {
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
        }
        return newarray1.join(' ');
    }


    if (!props.loading) {
        return (
            <div className='loading'>Loading...</div>
        )
    } else {
        return (
            <div>
                <ul className="list-group">
                    {props.items.map(item => {
                        if (props.search !== "" && item.slug.toLowerCase().indexOf(props.search.toLowerCase()) === -1) {
                            return null
                        }
                        return (
                            <li className="list-group-item" key={item.codePoint}>
                                {item.character} {uppercaseFirst(item.slug.split('-').join(' '))}
                                <span className='copy'>Click to copy</span>
                            </li>
                        )

                    })}
                </ul>
            </div>
        )
    }

}

