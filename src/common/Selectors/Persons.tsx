import { useEffect, useState } from 'react';
import { getPersonDetails, savePerson } from '../utils';

function Person(props: any) {
  let initialKey;
  let initalValue;
  if (props.selection !== 'New' && props.selection !== 0) {
    initialKey = props.selection;
    initalValue = getPersonDetails(props.selection) ?? initalValue;
  } else {
    initialKey = 'Name';
    initalValue = 'Enter Description Here';
  }
  const [key, setKey] = useState(initialKey);
  const [value, setValue] = useState(initalValue);
  useEffect(() => {
    setValue(initalValue);
    setKey(initialKey);
  }, [initalValue, initialKey]);
  const person = [];
  if (props.selection === 'New' || props.selection === 0) {
    person.push(
      <input
        key="setName"
        value={key}
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />,
    );
  } else {
    person.push(
      <div key="header" className="header">
        <p>{props.selection}</p>
      </div>,
    );
  }
  person.push(
    <textarea
      key="setNote"
      className="note"
      rows={4}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />,
  );
  person.push(
    <button
      key="personButton"
      type="button"
      onClick={() => {
        savePerson(key, value);
        props.callback(value);
      }}
    >
      Submit
    </button>,
  );
  return <div className="details">{person}</div>;
}

export default Person;
