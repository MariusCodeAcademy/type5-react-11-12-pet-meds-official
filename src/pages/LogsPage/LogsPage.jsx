import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch, getFetchLocal } from '../../helper/helper';
import CardList from './../../components/CardList/CardList';
import Container from './../../components/UI/Container';

function LogsPage() {
  // gauti ir iskonsolinti suniukoId
  const { suniukoId } = useParams();
  // prisideti state,
  const [logsArr, setLogsArr] = useState([]);

  // prisideti useEfecta
  useEffect(() => {
    getLogs();
  }, []);
  // prisideti getLogs()
  async function getLogs() {
    const logsFromDb = await getFetch('logs/' + suniukoId);
    console.log('logsFromDb ===', logsFromDb);
    setLogsArr(logsFromDb);
  }
  // getLogs() kviesti getFetchLocal() ir gauti logs 'logs51'
  // gavus atnaujinti state
  return (
    <Container>
      <h1>Logs</h1>
      <CardList cardType='log' items={logsArr} />
    </Container>
  );
}
// jei <CardList listType='log' tai nerodom carde mygtuku
export default LogsPage;
