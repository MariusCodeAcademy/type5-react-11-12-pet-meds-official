import Card from '../Card/Card';
import Grid from './../UI/Grid/Grid';

function CardList(props) {
  return (
    <Grid>
      {props.items.map((pObj) => (
        <Card onDelete={props.onDelete} key={pObj.id} {...pObj} />
      ))}
    </Grid>
  );
}

export default CardList;
