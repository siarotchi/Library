import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';
import { updateFilteredValues, addNewFilter } from '../../redux/actions/actions';
import { buttonLight, buttonDark, darkStyle, lightStyle } from '../../redux/reducers/constants';

const Filter = () => {
  const filteredValues = useSelector((state) => state.app.filteredValues);
  const filters = useSelector((state) => state.app.filters);
  const style = useSelector((state) => state.app.appTheme.lightTheme);
  const dispatch = useDispatch();

  const onChange = (checkedValues) => {
    dispatch(updateFilteredValues(checkedValues));
  };

  const addCategory = () => {
    const categoryName = window.prompt('Add new category name');
    dispatch(addNewFilter(categoryName));
  };

  return (
    <div className={s.filterContainer} style={style ? lightStyle : darkStyle}>
      <Checkbox.Group className={s.filterGroup} defaultValue={filteredValues} options={filters} onChange={onChange} />

      <button onClick={addCategory} style={style ? buttonLight : buttonDark}>
        Add Category
      </button>
    </div>
  );
};

export default Filter;
