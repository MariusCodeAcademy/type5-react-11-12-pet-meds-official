import { deleteFetch } from '../../helper/helper';
import Button from '../UI/Button/Button';
import css from './Card.module.scss';
import { Link } from 'react-router-dom';

function Card(props) {
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
      <h3>{props.name}</h3>
      <div className={css.body}>
        <p>{dateFormated}</p>
        <p>{props.client_email}</p>
      </div>
      <div className={css.footer}>
        <Link to={`/logs/${props.id}`}>
          <Button>View logs</Button>
        </Link>
        <Button onClick={handleDelete} outline>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Card;
