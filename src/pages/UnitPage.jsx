import React from 'react';
import Agebar from '../components/Agebar';
import Checkboxes from '../components/Checkboxs';
import {RangeSlider} from '../components/RangeSlider';

const UnitPage = () => {
  let label = 'wood';
  return (
    <div className="unitContainer">
      <Agebar />
      <div className="checkSlider">
        <Checkboxes label={label} />
        <RangeSlider />
      </div>
    </div>
  );
};

export default UnitPage;
