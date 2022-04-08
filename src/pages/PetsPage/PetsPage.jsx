import Container from './../../components/UI/Container';
import css from './PetsPage.module.css';
import Button from './../../components/UI/Button/Button';
import CardList from '../../components/CardList/CardList';
import { useEffect, useState } from 'react';
import { getFetch, getFetchLocal } from '../../helper/helper';
import { Link } from 'react-router-dom';

function PetsPage() {
  const [petsArr, setPetsArr] = useState([]);

  useEffect(() => {
    getPets();
  }, []);

  async function getPets() {
    const petsFromDb = await getFetch('pets');
    // console.log('petsFromDb ===', petsFromDb);
    console.log(JSON.stringify(petsFromDb));
    setPetsArr(petsFromDb);
  }

  return (
    <Container>
      <div className={css.flex}>
        <h1>Title</h1>
        <Link to={'/add-pet'}>
          <Button>add pet</Button>
        </Link>
      </div>
      <CardList onDelete={getPets} items={petsArr} />
    </Container>
  );
}

export default PetsPage;
