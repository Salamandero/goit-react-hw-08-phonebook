import toast from 'react-hot-toast';
import css from './ContactEditor.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return toast.error(`Type field ${name} don't read `);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleClick = e => {
    e.preventDefault();
    if (!name.trim()) {
      return toast.error('The field Name is empty, write Name');
    }
    if (!phone.trim()) {
      return toast.error('The field Phone is empty, write Phone');
    }
    if (phone.length < 3 || phone.length > 24) {
      return toast.error(
        `You wrote ${phone.length} symbols, but need from 3 to 24   `
      );
    }
    const newName = name.trim();
    const proofName = Object.values(contacts).map(contact => contact.name);
    if (proofName.includes(newName)) {
      reset();
      return toast.error(`${newName} is already in contacts.`);
    }

    dispatch(addContact({ name: name, number: phone }));

    reset();
  };

  return (
    <>
      <form className={css.form}>
        {/* <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label> */}
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          multiline
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          id="outlined-textarea"
          label="Phone"
          placeholder="Phone"
          multiline
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.button} type="submit" onClick={handleClick}>
          Add contact
        </button>
      </form>
    </>
  );
};
