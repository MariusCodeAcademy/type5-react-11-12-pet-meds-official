import css from './Button.module.css';

function Button(props) {
  // jei turim props.outline
  // pridekim klase outline
  const extraClass = props.outline ? css.outline : '';
  return <button className={`${css.btn} ${extraClass}`}>{props.children}</button>;
}

export default Button;
