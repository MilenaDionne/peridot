import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import ItemModalView from './ItemModalView';
import l from './locate';

class Item extends Component {
    state = {
        show: false
    }
    closeModal = () => {
        this.setState({ show: false });
    }
    render() {
        const { item, language } = this.props;

        return (
            <div className="card img-fluid m-3" style={{ width: '18rem' }}>
                <div className="text-left font-weight-bold">
                    {item.name}
                </div >
                <div className="text-left">
                    {item.adress}
                </div >
                <div className="text-left">
                    {item.description}
                </div >
                <div className="row text-center">
                    <span className="col">
                        <img src="./icons/Type.png" alt="" className="img-fluid" style={{ width: '1rem' }} />
                        <span className="" data-tip data-for={item.id + 'type'}>
                            {item.type}
                        </span>
                    </span>


                    <span className="col">
                        <img src="./icons/Size.png" alt="" className="img-fluid" style={{ width: '1rem' }} />
                        <span className="" data-tip data-for={item.id + 'size'}>{l(language, item.size)}</span>
                    </span>

                    <span className="col">
                        <img src="./icons/dollarIcon.png" alt="" className="img-fluid" style={{ width: '1rem' }} />
                        <span className="" data-tip data-for={item.id + 'cost'}>{item.cost}</span>
                    </span>

                </div>
                <button className="btn btn-dark " onClick={() => this.setState({ show: true })}>{l(language, 'MoreInformation')}</button>
                <ReactTooltip id={item.id + 'size'}>{l(language, 'ItemSize')}</ReactTooltip>
                <ReactTooltip id={item.id + 'cost'}>{l(language, 'ItemPrice')}</ReactTooltip>
                <ReactTooltip id={item.id + 'type'}>{l(language, 'ItemType')}</ReactTooltip>
                <ItemModalView
                    show={this.state.show}
                    modalSize="lg"
                    item={item}
                    closeModal={this.closeModal}
                    language={language}

                >
                </ItemModalView>

            </div >
        )
    }
}

export default Item;