import Container from './../../components/UI/Container';
import { useState } from 'react';
import css from './AddPet.module.css';
import Button from '../../components/UI/Button/Button';
import { sendFetch } from '../../helper/helper';
import { useHistory } from 'react-router-dom';

function AddPet() {
  const history = useHistory();
  const [name, setName] = useState('Boby');
  const [dob, setDob] = useState('2002-02-11');
  const [userEmail, setUserEmail] = useState('james@bond.com');
  const [isError, setIsError] = useState(false);

  async function submitHandler(e) {
    setIsError(false);
    // sustabdyti nuo perkrovimo
    e.preventDefault();
    // uzdeti formai
    const newPetObj = {
      name: name,
      dob: dob,
      client_email: userEmail,
    };
    // console.log('newPetObj ===', newPetObj);
    const sendResult = await sendFetch('pets', newPetObj);
    console.log('sendResult ===', sendResult);
    if (sendResult.changes === 1) {
      // redirect to pets
      // history
      history.push('/');
    }
    if (sendResult.err) {
      // klaida
      setIsError(true);
    }
  }

  return (
    <Container>
      <h1>Add new pet</h1>
      <form onSubmit={submitHandler} className={css.form}>
        {isError && <h3 className={css.err}>Please check the form</h3>}
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
