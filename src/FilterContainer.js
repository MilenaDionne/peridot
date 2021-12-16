import React, { Component } from 'react'
import Filter from './Filter'

class FilterContainer extends Component {

    render() {
        const { filters, getFilter, removeFilters, language } = this.props;
        const filtersToRender = filters.map((filter, key) => {
            return (
                <Filter name={filter.name} key={key} filters={filter.values} getFilter={getFilter} removeFilters={removeFilters} language={language} />
            )
        })
        return (
            <div>
                {filtersToRender}
            </div>
        );
    }


}

export default FilterContainer;