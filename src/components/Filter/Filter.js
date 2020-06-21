import React from 'react';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { Checkbox, Button } from 'antd';
import { updateFilteredValues, addNewFilter } from '../../redux/actions/actions';

const Filter = (props) => {
  const onChange = (checkedValues) => {
    props.updateFilteredValues(checkedValues);
  };

  const addCategory = () => {
    const categoryName = window.prompt('Add new category name');
    props.addNewFilter(categoryName);
  };

  // const options = [
  //   { label: 'All', value: 'All' },
  //   { label: 'Fantasy', value: 'Fantasy' },
  //   { label: 'Art', value: 'Art' },
  //   { label: 'Romance', value: 'Romance' },
  // ];

  return (
    <div className={s.filterContainer}>
      <Checkbox.Group
        className={s.filterGroup}
        defaultValue={props.filteredValues}
        options={props.filters}
        onChange={onChange}
      />
      <Button style={{ borderColor: '#91d5ff' }} onClick={addCategory}>
        Add Category
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { filteredValues: state.app.filteredValues, filters: state.app.filters };
};
const mapDispatchToProps = { updateFilteredValues, addNewFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
