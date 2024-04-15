import { getAllPersons } from '../utils';

function PersonList(props: any) {
  const tab = [];
  const persons = getAllPersons();
  // eslint-disable-next-line no-restricted-syntax
  for (const person of persons) {
    tab.push(
      <button
        type="button"
        className="vTablinks"
        key={person}
        onClick={() => props.callback(person)}
      >
        {person}
      </button>,
    );
  }
  return (
    <div className="vTab">
      {tab}
      <button
        type="button"
        className="vTablinks"
        key="New"
        onClick={() => props.callback('New')}
      >
        New
      </button>
    </div>
  );
}

export default PersonList;
