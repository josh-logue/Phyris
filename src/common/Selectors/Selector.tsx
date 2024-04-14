/* eslint-disable no-plusplus */
import { getThings } from '../utils';
import { Categories } from './Data/Categories';
import './styles.css';

export function Thing(props: { cat: Number; callback: (i: any) => void }) {
  const tab = [];

  const things = getThings(props.cat);

  const keys = Object.keys(things);
  for (let i = 0; i < keys.length; i++) {
    tab.push(
      <button
        type="button"
        className="vTablinks"
        key={keys[i]}
        onClick={() => props.callback(i)}
      >
        {keys[i]}
      </button>,
    );
  }

  return <div className="vTab">{tab}</div>;
}

export function Category(props: { callback: (i: any) => void }) {
  const tab = [];

  for (let i = 0; i < Categories.length; i++) {
    tab.push(
      <button
        type="button"
        className="hTablinks"
        key={`Cat${i}`}
        onClick={() => props.callback(i)}
      >
        {Categories[i]}
      </button>,
    );
  }
  return <div className="hTab">{tab}</div>;
}
