import {Tab, Tabs} from '@material-ui/core';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {agebarStyle} from '../styles/mui/agebar.mui';

const Agebar = () => {
  const classes = agebarStyle();
  const dispatch = useDispatch();

  //   active tab
  const [age, setAge] = useState('All');

  const handleChange = (event, newValue) => {
    setAge(newValue);
    dispatch({
      type: 'AGE_FILTER',
      payload: newValue,
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
      <Tab className={classes.tabLabel} value="All" label="All" />
      <Tab className={classes.tabLabel} value="Dark" label="Dark" />
      <Tab className={classes.tabLabel} value="Feudal" label="Feudal" />
      <Tab className={classes.tabLabel} value="Castle" label="Castle" />
      <Tab className={classes.tabLabel} value="Imperial" label="Imperial" />
    </Tabs>
  );
};

export default Agebar;
