import CardList from './../../components/CardList/CardList';

function LogsPage() {
  // gauti ir iskonsolinti suniukoId
  // prisideti state,
  // prisideti useEfecta
  // prisideti getLogs()
  // getLogs() kviesti getFetchLocal() ir gauti logs 'logs51.json'
  // gavus atnaujinti state
  return (
    <div>
      <h1>Logs</h1>
      <CardList items={[]} />
    </div>
  );
}

export default LogsPage;
