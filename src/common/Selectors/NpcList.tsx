/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Select from 'react-select';
import Factions from '../../../data/Factions';
import Cities from '../../../data/Cities';
import Regions from '../../../data/Regions';
import npcArray from '../../../data/Npcs';

interface sOption {
  value: string;
  label: string;
}

export function NpcFilter(props: any) {
  const show = props.show ? 'flex' : 'none';
  const defaultFaction = { value: '', label: 'No Faction Filter' };
  const defaultLocation = { value: '', label: 'No Location Filter' };
  const factions: sOption[] = [defaultFaction];
  const locations: sOption[] = [defaultLocation];
  for (const faction in Factions) {
    factions.push({ value: faction, label: faction });
  }
  factions.push({ value: 'The Grasping', label: 'The Grasping' });
  factions.push({ value: 'Harbingers', label: 'Harbingers' });
  for (const location in Cities) {
    locations.push({ value: location, label: location });
  }
  for (const location in Regions) {
    locations.push({ value: location, label: location });
  }
  const newFaction = (newValue: any) => {
    props.setFaction(newValue.value);
  };

  const newLocation = (newValue: any) => {
    props.setLocation(newValue.value);
  };

  return (
    <div style={{ display: show }} className="selector">
      <Select
        className="dropdown"
        options={factions}
        onChange={newFaction}
        defaultValue={defaultFaction}
      />
      <Select
        className="dropdown"
        options={locations}
        onChange={newLocation}
        defaultValue={defaultLocation}
      />
    </div>
  );
}

export function NpcList(props: any) {
  const tab = [];
  let list = [];
  if (props.faction === '' && props.location === '') {
    list = npcArray.filter((individual) => {
      return individual;
    });
  } else {
    list = npcArray.filter((individual) => {
      const factionMatching =
        individual.details.Faction.includes(props.faction) ||
        props.faction === '';
      const locationMatching =
        individual.details.Location.includes(props.location) ||
        props.location === '';
      return factionMatching && locationMatching;
    });
  }
  list = list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === '') {
      // eslint-disable-next-line no-continue
      continue;
    }
    tab.push(
      <button
        type="button"
        className="vTablinks"
        key={list[i].name}
        onClick={() => props.callback(list[i].name)}
      >
        {list[i].name}
      </button>,
    );
  }

  return (
    <div className="vTab" id="npcList">
      {tab}
    </div>
  );
}

export function NPC(props: any) {
  const output = [];
  const npc = npcArray.filter((individual) => {
    return individual.name === props.name;
  });
  if (npc[0]) {
    output.push(
      <div key="name" className="header">
        {props.name}
      </div>,
    );
    for (const elem in npc[0].details) {
      const value = `${elem}: ${npc[0].details[elem]}`;
      output.push(<p key={elem}>{value}</p>);
    }
    return (
      <div className="details" id="npc">
        {output}
      </div>
    );
  }
}
