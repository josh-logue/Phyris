import Cities from '../../data/Cities';
import Regions from '../../data/Regions';
import People from '../../data/People';
import Events from '../../data/Events';
import Factions from '../../data/Factions';
import Gods from '../../data/Gods';

const defaultNote = 'Enter Notes Here';

export function saveNote(thing: string, note: string) {
  window.electron.store.set(thing, note);
}

export function loadNote(thing: string): string {
  let note = defaultNote;
  try {
    note = window.electron.store.get(thing);
  } catch {
    note = defaultNote;
  }
  if (note === undefined) {
    note = defaultNote;
  }
  return note;
}

export function getThings(index: Number) {
  let things: any = Factions;

  switch (index) {
    case 1:
      things = Cities;
      break;
    case 2:
      things = Regions;
      break;
    case 3:
      things = People;
      break;
    case 4:
      things = Events;
      break;
    case 5:
      things = Gods;
      break;
    default:
  }

  return things;
}

function makeKey(name: string) {
  return `_${name}`;
}

export function getAllPersons() {
  return window.electron.store.get('Persons') ?? [];
}

export function getPersonDetails(key: string) {
  const newKey = makeKey(key);
  return window.electron.store.get(newKey);
}

export function savePerson(name: string, note: string) {
  const key = makeKey(name);
  window.electron.store.set(key, note);
  const persons = window.electron.store.get('Persons') ?? [];
  if (persons.indexOf(name) < 0) {
    persons.push(name);
    window.electron.store.set('Persons', persons);
  }
}

export function deletePerson(name: string) {
  const key = makeKey(name);
  window.electron.store.delete(key);
}

export const gmMode = true;

export function resize() {
  const detailsContainer = window.document.getElementById('detailsContainer');
  const hTab = window.document.getElementsByClassName('hTab')[0];
  const vTab = window.document.getElementsByClassName('vTab')[0];
  if (detailsContainer !== null && vTab && hTab) {
    const rect = (
      hTab.getBoundingClientRect().width - vTab.getBoundingClientRect().width
    ).toFixed(0);

    detailsContainer.style.width = `${rect}px`;
  }
}
