import rick from '../assets/rick.json';
import Characters from '../Characters/Characters';
export default function Landing() {
    const getCharsWithLimit = (limit,offset) => {

        return rick.results.slice(offset,offset+limit);
    }
  return (
    <div>
      
      <Characters getCharsWithLimit={getCharsWithLimit} />

    </div>
  );
}