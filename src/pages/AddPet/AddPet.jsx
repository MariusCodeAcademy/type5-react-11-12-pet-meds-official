import Container from './../../components/UI/Container';
import { useState } from 'react';
import css from './AddPet.module.css';
import Button from '../../components/UI/Button/Button';

function AddPet() {
  const [name, setName] = useState('Boby');
  const [dob, setDob] = useState('2002-02-11');
  const [userEmail, setUserEmail] = useState('james@bond.com');

  function submitHandler() {
    // uzdeti formai
    // sustabdyti nuo perkrovimo
  }

  return (
    <Container>
      <h1>Add new pet</h1>
      <form className={css.form}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={css.input}
          type='text'
          placeholder='Pet name'
        />
        <input
          onChange={(e) => setDob(e.target.value)}
          value={dob}
          className={css.input}
          type='date'
          placeholder='Pet DOB'
        />
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          className={css.input}
          type='text'
          placeholder='Your email'
        />
        <Button>Create</Button>
      </form>
    </Container>
  );
}

export default AddPet;
