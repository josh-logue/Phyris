import { useState } from 'react';
import { Category, Thing } from './Selectors/Selector';
import Details from './Selectors/Details';
import { NpcFilter } from './Selectors/NpcList';

export default function Encyclopedia() {
  const [thing, setThing] = useState(0);
  const [cat, setCat] = useState(0);
  const [update, setUpdate] = useState(true);
  const [faction, setFaction] = useState('');
  const [location, setlocation] = useState('');

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
      <NpcFilter
        setFaction={setFaction}
        setLocation={setlocation}
        show={cat === 3}
      />
      <Thing
        callback={setThing}
        cat={cat}
        faction={faction}
        location={location}
      />
      <Details thing={thing} cat={cat} callback={forceUpdate} />
    </div>
  );
}
