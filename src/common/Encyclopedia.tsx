import { useState } from 'react';
import { Category, Thing } from './Selectors/Selector';
import Details from './Selectors/Details';

export default function Encyclopedia() {
  const [thing, setThing] = useState(0);
  const [cat, setCat] = useState(0);
  const [update, setUpdate] = useState(true);

  const onCatChange = (e: any) => {
    setCat(e);
    if (typeof e !== 'string') {
      setThing(0);
    }
  };

  const forceUpdate = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <Category callback={onCatChange} />
      <Thing callback={setThing} cat={cat} />
      <Details thing={thing} cat={cat} callback={forceUpdate} />
    </div>
  );
}
