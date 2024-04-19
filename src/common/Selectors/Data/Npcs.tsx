interface npcDetails {
  pronouns: string;
  aliases: string;
  faction: string;
  location: string;
  description: string;
}

export interface npc {
  name: string;
  details: npcDetails;
}

const npcArray: npc[] = [
  {
    name: '',
    details: {
      pronouns: '',
      aliases: '',
      faction: '',
      location: '',
      description: '',
    },
  },
  {
    name: 'Kell Devin',
    details: {
      pronouns: 'He/Him',
      aliases: 'Emperor of Graf',
      faction: 'Grafken Empire',
      location: 'Graf',
      description: '',
    },
  },
  {
    name: 'Amald',
    details: {
      pronouns: 'He/Him',
      aliases: 'King Tlos II of Simyr',
      faction: 'The Golden City',
      location: 'Simyr',
      description: '',
    },
  },
  {
    name: 'Torgaddon',
    details: {
      pronouns: 'He/Him',
      aliases: '',
      faction: 'Quenn Chiefdom',
      location: 'Dirth',
      description: '',
    },
  },
];

export default npcArray;
