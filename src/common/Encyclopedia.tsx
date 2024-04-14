import { useState } from 'react';
import { Category, Thing } from './Selectors/Selector';
import Details from './Selectors/Details';

export default function Encyclopedia() {
  const [thing, setThing] = useState(0);
  const [cat, setCat] = useState(0);

  return (
    <div>
      <Category callback={setCat} />
      <Thing callback={setThing} cat={cat} />
      <Details thing={thing} cat={cat} />
    </div>
  );
}
