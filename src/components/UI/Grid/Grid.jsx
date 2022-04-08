import css from './Grid.module.css';

function Grid({ children }) {
  return <div className={css.grid}>{children}</div>;
}

export default Grid;
