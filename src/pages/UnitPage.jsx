import React from 'react';
import Agebar from '../components/Agebar';
import Checkboxes from '../components/Checkboxs';
import {RangeSlider} from '../components/RangeSlider';
import UnitTable from '../components/UnitTable';

const UnitPage = () => {
  let label = 'wood';
  return (
    <div className="unitContainer">
      <Agebar />
      <div className="checkSlider">
        <Checkboxes label={label} />
        <RangeSlider />
      </div>
      <UnitTable />
    </div>
  );
};

export default UnitPage;
