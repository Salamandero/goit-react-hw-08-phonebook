import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
// import { FindByName, FilterInput } from './Filter.styled';
// import css from './Filter.module.css';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.filter);
  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    // <label className={css.findByName}>
    //   Find contact by name:
    //   <input
    //     className={css.filterInput}
    //     type="text"
    //     onChange={onChange}
    //   />
    // </label>
    <TextField
      id="outlined-multiline-flexible"
      label="Find contact by name:"
      multiline
      maxRows={4}
      type="text"
      onChange={onChange}
      sx={{ mt: 6 }}
    />
  );
};