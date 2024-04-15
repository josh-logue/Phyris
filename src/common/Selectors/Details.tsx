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
  details.push(
    <div key="header" className="header">
      <p>{keys[index]}</p>
    </div>,
  );
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < fields.length; i++) {
    const label = fields[i];
    const content = choice[fields[i]];
    let parsed;
    const match = /\r|\n/.exec(content);
    if (match) {
      parsed = content.split('\n');
    } else {
      parsed = content;
    }
    let labelBool;
    if (props.cat > 0) {
      labelBool = true;
    } else {
      labelBool = false;
    }
    const passedContent = [];
    if (typeof parsed === 'string') {
      const initial = `${labelBool ? label : ''}: ${parsed}`;
      passedContent.push(<p key="single">{initial}</p>);
    } else {
      const initial = `${labelBool ? label : ''}: ${parsed[0]}`;
      passedContent.push(<p key="list-start">{initial}</p>);
      // eslint-disable-next-line no-plusplus
      for (let j = 1; j < parsed.length; j++) {
        passedContent.push(
          <p key={`${i}-${j}`} className="list-item">
            &#x2022; {parsed[j]}
          </p>,
        );
      }
    }
    details.push(
      <div className="field" key={fields[i]}>
        {passedContent}
      </div>,
    );
  }
  let defaultNote = loadNote(keys[index]);
  const handleInput = (input: string) => {
    defaultNote = input;
    setUpdate(!update);
  };
  details.push(
    <Note
      key={keys[index]}
      value={defaultNote}
      thing={keys[index]}
      callback={handleInput}
    />,
  );
  return <div className="details">{details}</div>;
}

export default Details;
