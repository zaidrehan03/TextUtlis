// import React, { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     setOpen(true);
//   }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

//   return (
//     <div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>HELLO</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             <b>ENTER YOUR NAME :)</b>
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Type something"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>OK</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    if (name !== '') {
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }
  }, [name]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>HELLO</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>ENTER YOUR NAME :)</b>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Type something"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>

      {showWelcome && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Welcome {name}!</h2>
        </div>
      )}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState('');
//   const [showWelcome, setShowWelcome] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleInputChange = (event) => {
//     setName(event.target.value);
//   };

//   useEffect(() => {
//     setOpen(true);
//   }, []);

//   useEffect(() => {
//     if (name !== '') {
//       setShowWelcome(true);


//     } else {
//       setShowWelcome(false);
//     }
//   }, [name]);

//   return (
//     <div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>HELLO</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             <b>ENTER YOUR NAME :)</b>
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Type something"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={name}
//             onChange={handleInputChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>OK</Button>
//         </DialogActions>
//       </Dialog>

//       {showWelcome && (
//        <div style={{ textAlign: 'center', marginTop: '10px', background: 'black', color: 'white' }}>
//           <h2>Welcome {name}!</h2>
//         </div>
//       )}
//     </div>
//   );
// }



