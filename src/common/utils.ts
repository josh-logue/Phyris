import Cities from './Selectors/Data/Cities';
import Regions from './Selectors/Data/Regions';
import People from './Selectors/Data/People';
import Events from './Selectors/Data/Events';

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
  let things: any = Cities;

  switch (index) {
    case 1:
      things = Regions;
      break;
    case 2:
      things = People;
      break;
    case 3:
      things = Events;
      break;
    default:
  }

  return things;
}
