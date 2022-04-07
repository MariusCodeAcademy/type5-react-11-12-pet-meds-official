import Container from './../../components/UI/Container';
import css from './PetsPage.module.css';
import Button from './../../components/UI/Button/Button';

function PetsPage() {
  return (
    <Container>
      <div className={css.flex}>
        <h1>Title</h1>
        <Button>add pet</Button>
        <Button outline> remove pet</Button>
      </div>
    </Container>
  );
}

export default PetsPage;
