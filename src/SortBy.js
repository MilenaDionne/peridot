// JavaScript source code
import React, { Component } from 'react';
import l from './locate'


class SortBy extends Component {

    render() {
        const { sortBy, language } = this.props
        return (
            <select className="form-control mr-sm-2" onChange={(e) => sortBy(e.target.value)}>
                <option value='cost_Ascending'>{l(language, 'Price ascending')}</option>
                <option value='cost_Descending'>{l(language, 'Price descending')}</option>
                <option value='name_Ascending'>{l(language, 'Name ascending')}</option>
                <option value='name_Descending'>{l(language, 'Name descending')}</option>
                <option value='id_Descending'>{l(language, 'Most recent')}</option>
                <option value='id_Ascending'>{l(language, 'Least recent')}</option>
            </select>
        )

    }

}

export default SortBy;
