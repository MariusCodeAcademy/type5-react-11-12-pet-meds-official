import Container from './../../components/UI/Container';
import css from './PetsPage.module.css';
import Button from './../../components/UI/Button/Button';
import CardList from '../../components/CardList/CardList';
import { useEffect, useState } from 'react';
import { getFetch } from '../../helper/helper';

function PetsPage() {
  const [petsArr, setPetsArr] = useState([]);

  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {
    const petsFromDb = await getFetch('pets');
    console.log('petsFromDb ===', petsFromDb);
    setPetsArr(petsFromDb);
  }

  return (
    <Container>
      <div className={css.flex}>
        <h1>Title</h1>
        <Button>add pet</Button>
      </div>
      <CardList items={petsArr} />
    </Container>
  );
}

export default PetsPage;
