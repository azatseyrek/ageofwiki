import {Tab, Tabs} from '@material-ui/core';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {agebarStyle} from '../styles/mui/agebar.mui';

const Agebar = () => {
  const classes = agebarStyle();
  const dispatch = useDispatch();

  //   active tab
  const [age, setAge] = useState('castle');

  const handleChange = (event, newValue) => {
    setAge(newValue);
    dispatch({
      type: 'AGE',
      payload: {
        age: newValue,
      },
    });
  };

  return (
    <Tabs
      className={classes.root}
      value={age}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      centered
    >
      <Tab className={classes.tabLabel} value="all" label="All" />
      <Tab className={classes.tabLabel} value="dark" label="Dark" />
      <Tab className={classes.tabLabel} value="feudal" label="Feudal" />
      <Tab className={classes.tabLabel} value="castle" label="Castle" />
      <Tab className={classes.tabLabel} value="imperial" label="Imperial" />
    </Tabs>
  );
};

export default Agebar;
