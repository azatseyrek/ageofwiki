import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import {checkboxStyle} from '../styles/mui/checkbox.mui';

export default function Checkboxes({label}) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function StyledCheckbox(props) {
    const classes = checkboxStyle();

    return (
      <Checkbox
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        inputProps={{'aria-label': 'decorative checkbox'}}
        {...props}
      />
    );
  }

  return (
    <div className="checkboxContainer">
      <StyledCheckbox
        checked={checked}
        onChange={handleChange}
        inputProps={{'aria-label': 'primary checkbox'}}
      />
      <div>
        <span className="resourceLabel">{label}</span>
      </div>
    </div>
  );
}
