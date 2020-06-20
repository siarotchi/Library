import React from 'react';
import { Checkbox } from 'antd';

const Filter = () => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  //   const plainOptions = ['All', 'Fantasy', 'Art', 'Romance'];
  const options = [
    { label: 'All', value: 'All' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Art', value: 'Art' },
    { label: 'Romance', value: 'Romance' },
  ];

  return (
    <div>
      <Checkbox.Group options={options} onChange={onChange} />
    </div>
  );
};

export default Filter;
