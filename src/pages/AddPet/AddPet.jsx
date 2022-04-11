import Container from './../../components/UI/Container';
import { useState, useEffect } from 'react';
import css from './AddPet.module.css';
import Button from '../../components/UI/Button/Button';
import { sendFetch } from '../../helper/helper';
import { useHistory } from 'react-router-dom';

const initErrors = {
  name: '',
  dob: '',
  userEmail: '',
};

function AddPet() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);

  useEffect(() => {
    console.log('errorObj ===', errorObj);
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorsEmpty) {
      setIsError(true);
    }
  }, [name, dob, userEmail, errorObj]);

  async function submitHandler(e) {
    setIsError(false);
    setErrorObj(initErrors);
    // sustabdyti nuo perkrovimo
    e.preventDefault();

    // validacija
    if (name.trim() === '') {
      setErrorObj((prevState) => ({ ...prevState, name: 'Name cant be blank' }));
    }
    if (dob.trim() === '') {
      setErrorObj((prevState) => ({ ...prevState, dob: 'Dob cant be blank' }));
    }
    if (userEmail.trim() === '') {
      setErrorObj((prevState) => ({ ...prevState, userEmail: 'Email cant be blank' }));
    }

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
          className={`${css.input} ${errorObj.name ? css.errBg : ''}`}
          type='text'
          placeholder='Pet name'
        />
        {errorObj.name && <p>{errorObj.name}</p>}
        <input
          onChange={(e) => setDob(e.target.value)}
          value={dob}
          className={`${css.input} ${errorObj.dob ? css.errBg : ''}`}
          type='date'
          placeholder='Pet DOB'
        />
        {errorObj.dob && <p>{errorObj.dob}</p>}
        <input
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          className={`${css.input} ${errorObj.userEmail ? css.errBg : ''}`}
          type='text'
          placeholder='Your email'
        />
        {errorObj.userEmail && <p>{errorObj.userEmail}</p>}
        <Button>Create</Button>
      </form>
    </Container>
  );
}

export default AddPet;
