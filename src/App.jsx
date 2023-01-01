import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/icons-material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FormControlLabel } from '@mui/material';

const App = () => {
  const arr = [
    'friday',
    'saturday',
    'monday',
    'tousday',
    'sunday',
    'wednesday',
    'thursday',
  ];
  const order = ['thursday', 'monday', 'tousday'];

  const sort1 = arr.sort((a, b) => {
    return order.includes(b) > order.includes(a) ? 1 : -1;
  });

  // const sort2 = sort1.sort((a, b) =>
  //   a === 'monday' || a === 'tousday' || a === 'wednesday' ? -1 : 1
  // );
  console.log(sort1);

  return (
    <div>
      <ButtonGroup>
        <Button
          startIcon={<SaveIcon />}
          variant='contained'
          color='success'
          size='large'
        >
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          variant='contained'
          color='error'
          size='large'
        >
          Remove
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default App;
