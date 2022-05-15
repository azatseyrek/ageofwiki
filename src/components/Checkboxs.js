import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyledCheckbox} from '../styles/mui/checkbox.mui';

export default function Checkboxes({label}) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const labelState = useSelector((state) => state[label]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch({
      type: 'COST',
      payload: {
        resourceName: label,
        checked: event.target.checked,
      },
    });
  };

  return (
    <div>
      <div className="checkboxContainer">
        <StyledCheckbox
          checked={checked}
          onChange={handleChange}
          inputProps={{'aria-label': 'primary checkbox'}}
          value={labelState.checked}
        />
        <div>
          <span className="resourceLabel">{label}</span>
        </div>
      </div>
    </div>
  );
}
