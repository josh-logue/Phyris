import Cities from './Selectors/Data/Cities';
import Regions from './Selectors/Data/Regions';
import People from './Selectors/Data/People';
import Events from './Selectors/Data/Events';
import Factions from './Selectors/Data/Factions';
import Gods from './Selectors/Data/Gods';

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
