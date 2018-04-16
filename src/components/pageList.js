import React from 'react'
import PageItem from './pageItem'

const PageList = (props) => {
    const Pageitem = props.heading.map((item, idx) => {return (<PageItem
                key={idx} 
                heading = {item} 
                description = {props.items[2][idx]} 
                url = {props.items[3][idx]}
                />)})
    
    return (
        <ul className="list-group">
            {Pageitem}
        </ul>
    )
}

export default PageList;