import css from './Button.module.css';

// <Button outline> remove pet</Button>
// <Button> remove pet</Button>

function Button(props) {
  // jei turim props.outline
  // pridekim klase outline
  const extraClass = props.outline ? css.outline : '';
  return (
    <button onClick={props.onClick} className={`${css.btn} ${extraClass}`}>
      {props.children}
    </button>
  );
}

export default Button;
