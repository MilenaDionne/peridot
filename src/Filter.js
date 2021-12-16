// JavaScript source code
import React, { Component } from 'react';
import Checkbox from './Checkboxe';
import l from './locate'


class Filter extends Component {
   state = {
      activeFilters: 0,
      values: [],
      name: this.props.name,
   }
   componentDidMount() {
      var ready = {};
      this.props.filters.forEach(value => {
         ready[value] = false
      });
      this.setState({ values: ready })
   }

   deleteFilters = (e, filter, removeFilters) => {
      var values = this.state.values;
      Object.keys(values).forEach(key => values[key] = false)
      this.setState({ values: values });
      removeFilters(e, filter)

   }

   selectFilter = (value) => {
      var updated = this.state.values;
      updated[value] = !this.state.values[value];
      this.setState({ values: updated });

   }

   render() {
      const { name, filters, getFilter, removeFilters, language } = this.props;
      var active;
      if (Object.values(this.state.values).filter(value => { return value }).length > 0) {
         active = <button className="btn justify-content-end btn-sm p-0 pl-2 pb-1 align-items-end" onClick={(e) => this.deleteFilters(e, name, removeFilters)}><u>{l(language, 'ClearFilters')}</u> &nbsp;&times;</button>
      }
      const valueList = filters.map((value, key) => {
         return (
            <Checkbox language={language} value={value} key={key} getFilter={getFilter} filter={name} checked={this.state.values[value]} selectFilter={this.selectFilter} />
         )
      })
      return (
         <form>
            <label htmlFor="filters">
               <b>{l(language, name)}&nbsp;
               <img src={"./icons/" + name + ".png"} alt="" className="img-fluid" style={{ width: '1rem' }} /></b>
            </label>
            {active}
            <div className="form-check ml-2" id={name + 'Filter'}>
               {valueList}
            </div>
            <br></br>
         </form>
      );

   }

}

export default Filter;