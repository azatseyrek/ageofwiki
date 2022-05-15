import React from 'react';
import Agebar from '../components/Agebar';
import Checkboxes from '../components/Checkboxs';
import {RangeSlider} from '../components/RangeSlider';
import UnitTable from '../components/UnitTable';

const UnitPage = () => {
  const resourceLabels = ['wood', 'food', 'gold'];
  return (
    <div className="unitContainer">
      <Agebar />
      {resourceLabels.map((label) => (
        <div key={label} className="checkSlider">
          <Checkboxes label={label} />
          <RangeSlider label={label} />
        </div>
      ))}

      <UnitTable />
    </div>
  );
};

export default UnitPage;
