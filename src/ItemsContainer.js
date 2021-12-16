import React, { Component } from 'react'
import Item from './Item';
import l from './locate';

class ItemsContainer extends Component {
    render() {
        const { items, language } = this.props
        const list = items.length > 0 ? items.map(item => {
            return (<Item item={item} key={'Item' + item.id} language={language}></Item>)
        }) :
            (
                <div className="m-auto">
                    <div className="text-center">
                        <img src="./icons/oops.png" alt="" className="m-auto img-fluid text-centered" style={{ width: '15rem' }}></img>
                    </div>
                    <p style={{ fontSize: '20px' }}>{l(language, 'noResults')}</p>
                </div >
            )


        return (
            <div className="row m-auto">
                {list}
            </div>
        )
    }
}

export default ItemsContainer;