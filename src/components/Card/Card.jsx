import { deleteFetch } from '../../helper/helper';
import Button from '../UI/Button/Button';
import css from './Card.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './../../store/authContext';

function Card(props) {
  const authCtxValue = useContext(AuthContext);
  const dateFormated = new Date(props.dob).toLocaleString('lt', { dateStyle: 'long' });

  async function handleDelete() {
    console.log('delete', props.id);
    const delRezult = await deleteFetch('pets', props.id);
    console.log('delRezult ===', delRezult);
    if (delRezult.changes === 1) {
      // success delete
      console.log('success delete');
      props.onDelete();
    }
  }
  return (
    <div className={css.card}>
      <h3>{props.title}</h3>
      <div className={css.body}>
        <p>{dateFormated}</p>
        <p>{props.body}</p>
      </div>
      {!props.cardType && (
        <div className={css.footer}>
          <Link to={`/logs/${props.id}`}>
            <Button>View logs</Button>
          </Link>
          <Button onClick={handleDelete} outline>
            Delete
          </Button>
          <Button onClick={authCtxValue.logout} outline>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}

export default Card;
