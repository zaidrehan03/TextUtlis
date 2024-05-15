
import React from 'react';
import './Welcome';
import Welcome from './Welcome';

 function BhaiApp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    return (

  <Welcome/>
    )

  }

  export default BhaiApp;
