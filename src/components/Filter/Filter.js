import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label="Find contact by name:"
        multiline
        maxRows={4}
        type="text"
        onChange={onChange}
        sx={{ mt: 6, width: '100%' }}
      />
    </>
  );
};
