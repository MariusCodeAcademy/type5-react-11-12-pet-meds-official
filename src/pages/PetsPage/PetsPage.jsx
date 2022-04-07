import Container from './../../components/UI/Container';
import css from './PetsPage.module.css';

function PetsPage() {
  return (
    <Container>
      <div className={css.flex}>
        <h1>Title</h1>
        {/* <Button>add pet</Button> */}
        {/* <Button outline>add pet</Button> */}
      </div>
    </Container>
  );
}

export default PetsPage;
