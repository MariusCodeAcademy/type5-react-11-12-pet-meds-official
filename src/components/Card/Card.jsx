import Button from '../UI/Button/Button';
import css from './Card.module.scss';

function Card(props) {
  const dateFormated = new Date(props.dob).toLocaleString('lt', { dateStyle: 'long' });
  return (
    <div className={css.card}>
      <h3>{props.name}</h3>
      <div className={css.body}>
        <p>{dateFormated}</p>
        <p>{props.client_email}</p>
      </div>
      <div className={css.footer}>
        <Button>View logs</Button>
        <Button outline>Delete</Button>
      </div>
    </div>
  );
}

export default Card;