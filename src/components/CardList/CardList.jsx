import Card from '../Card/Card';
import Grid from './../UI/Grid/Grid';

function CardList(props) {
  return (
    <Grid>
      {props.items.map((pObj) => (
        <Card
          cardType={props.cardType}
          onDelete={props.onDelete}
          key={pObj.id}
          title={props.cardType === 'log' ? pObj.status : pObj.name}
          body={props.cardType === 'log' ? pObj.description : pObj.client_email}
          {...pObj}
        />
      ))}
    </Grid>
  );
}

export default CardList;
