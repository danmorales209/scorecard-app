import { BingoCard } from './components';
import { Container } from './layout';
import './App.css';

function App() {
  return (
    <Container 
      classNames={["App"]}
    >
      <BingoCard />
    </Container>
  );
}

export default App;
