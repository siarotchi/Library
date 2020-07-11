import React from 'react';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { Checkbox, Button } from 'antd';
import { updateFilteredValues, addNewFilter } from '../../redux/actions/actions';

const Filter = (props) => {
  const { filteredValues, filters } = props;

  const onChange = (checkedValues) => {
    props.updateFilteredValues(checkedValues);
  };

  const addCategory = () => {
    const categoryName = window.prompt('Add new category name');
    props.addNewFilter(categoryName);
  };

  return (
    <div className={s.filterContainer}>
      <Checkbox.Group className={s.filterGroup} defaultValue={filteredValues} options={filters} onChange={onChange} />

      <button onClick={addCategory}>Add Category</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { filteredValues: state.app.filteredValues, filters: state.app.filters };
};
const mapDispatchToProps = { updateFilteredValues, addNewFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
