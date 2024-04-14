import { useState } from 'react';
import { getThings, loadNote } from '../utils';
import Note from './Note';
import './styles.css';

function Details(props: any) {
  const [update, setUpdate] = useState(true);
  const details = [];
  const things = getThings(props.cat);
  const keys = Object.keys(things);
  let index = props.thing;
  if (index > keys.length) {
    index = keys.length - 1;
  }
  const choice = things[keys[index]];
  const fields = Object.keys(choice);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < fields.length; i++) {
    const value = `${fields[i]}: ${choice[fields[i]]}`;
    details.push(
      <div className="field" key={fields[i]}>
        <p>{value}</p>
      </div>,
    );
  }
  let defaultNote = loadNote(keys[index]);
  const handleInput = (input: string) => {
    defaultNote = input;
    setUpdate(!update);
  };
  details.push(
    <Note value={defaultNote} thing={keys[index]} callback={handleInput} />,
  );
  return <div className="details">{details}</div>;
}

export default Details;
