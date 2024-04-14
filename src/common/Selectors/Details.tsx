import { getThings, loadNote } from '../utils';
import Note from './Note';
import './styles.css';

function Details(props: any) {
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
  const defaultNote = loadNote(keys[index]);
  return (
    <div className="details">
      {details}
      <Note value={defaultNote} thing={keys[index]} />
    </div>
  );
}

export default Details;
