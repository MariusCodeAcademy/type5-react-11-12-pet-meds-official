import CardList from './../../components/CardList/CardList';

function LogsPage() {
  // gauti ir iskonsolinti suniukoId
  // prisideti state,
  // prisideti useEfecta
  // prisideti getLogs()
  // getLogs() kviesti getFetch() ir gauti logs
  // gavus atnaujinti state
  return (
    <div>
      <h1>Logs</h1>
      <CardList items={[]} />
    </div>
  );
}

export default LogsPage;
