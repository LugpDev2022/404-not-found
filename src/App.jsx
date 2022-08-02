import { NotFound } from './components/NotFound/NotFound';
import { ProblemInfo } from './components/ProblemInfo/ProblemInfo';
import { Scarecrow } from './components/Scarecrow/Scarecrow';

function App() {
  return (
    <>
      <NotFound></NotFound>
      <Scarecrow></Scarecrow>
      <ProblemInfo></ProblemInfo>
    </>
  );
}

export default App;
