interface npcDetails {
  [index: string]: string;
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

const enum f {
  g = 'Grafken Empire',
  s = 'The Golden City',
  q = 'Quenn Chiefdom',
  d = 'Church of Daist',
  t = 'Tairost Trade Guild',
  o = 'The Grasping',
}

const enum p {
  h = 'He/Him',
  s = 'She/Her',
  t = 'They/Them',
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
      pronouns: p.h,
      aliases: 'Emperor of Graf',
      faction: f.g,
      location: 'Graf',
      description: '',
    },
  },
  {
    name: 'Amber',
    details: {
      pronouns: p.s,
      aliases: 'King Tlos III of Simyr',
      faction: f.s,
      location: 'Simyr',
      description: '',
    },
  },
  {
    name: 'Torgaddon',
    details: {
      pronouns: p.h,
      aliases: 'the Elder',
      faction: f.q,
      location: 'Dirth',
      description: '',
    },
  },
  {
    name: 'Tilleon Cotear',
    details: {
      pronouns: p.h,
      aliases: 'Spymaster',
      faction: f.g,
      location: 'Graf',
      description: '',
    },
  },
  {
    name: 'Schren Talos',
    details: {
      pronouns: p.h,
      aliases: 'Master of Augurs',
      faction: f.g,
      location: 'Graf',
      description: '',
    },
  },
  {
    name: 'Surles Camf',
    details: {
      pronouns: p.s,
      aliases: 'Virwatcher',
      faction: f.g,
      location: 'Graf',
      description: '',
    },
  },
  {
    name: 'Nowlet Mojca',
    details: {
      pronouns: p.s,
      aliases: 'Tairost Trade Agent',
      faction: f.t,
      location: 'Graf',
      description: '',
    },
  },
  {
    name: 'Tamron Lindre',
    details: {
      pronouns: p.h,
      aliases: 'King of Nevin',
      faction: f.g,
      location: 'Nevin',
      description: '',
    },
  },
  {
    name: 'Sofen Gallowmoore',
    details: {
      pronouns: p.s,
      aliases: 'Portmaster of Eelsmurth',
      faction: f.g,
      location: 'Eelsmurth',
      description: '',
    },
  },
  {
    name: 'Caleyo Hixson',
    details: {
      pronouns: p.h,
      aliases: 'Emissary of Eels',
      faction: f.g,
      location: 'Nevin',
      description: '',
    },
  },
  {
    name: 'Jekavorian',
    details: {
      pronouns: p.t,
      aliases: 'Sandstone Virkeeper',
      faction: f.g,
      location: 'Nevin',
      description: '',
    },
  },
  {
    name: 'Sweets',
    details: {
      pronouns: p.s,
      aliases: 'Hand Leader',
      faction: f.o,
      location: 'Nevin',
      description: '',
    },
  },
  {
    name: 'Mikho Lifland',
    details: {
      pronouns: p.h,
      aliases: 'Tairost Trade Official',
      faction: f.t,
      location: 'Nevin',
      description: '',
    },
  },
  {
    name: 'Wishnie Ikuta',
    details: {
      pronouns: p.s,
      aliases: 'Governer of Fallview',
      faction: f.g,
      location: 'Fallview',
      description: '',
    },
  },
  {
    name: 'Fama Wrice',
    details: {
      pronouns: p.s,
      aliases: 'Granite Virkeeper',
      faction: f.g,
      location: 'Fallview',
      description: '',
    },
  },
  {
    name: 'Ziemer Kian',
    details: {
      pronouns: p.h,
      aliases: 'Tairost Trade Agent',
      faction: f.t,
      location: 'Fallview',
      description: '',
    },
  },
  {
    name: 'Locke Vaun',
    details: {
      pronouns: p.h,
      aliases: 'King of Ramsmurth',
      faction: f.g,
      location: 'Ramsmurth',
      description: '',
    },
  },
  {
    name: 'Sarpas Arenz',
    details: {
      pronouns: p.h,
      aliases: 'Swineherd',
      faction: f.g,
      location: 'Ramsmurth',
      description: '',
    },
  },
  {
    name: 'Knoth Cai',
    details: {
      pronouns: p.s,
      aliases: 'Tairost Trade Agent',
      faction: p.t,
      location: 'Ramsmurth',
      description: '',
    },
  },
  {
    name: 'Bottle',
    details: {
      pronouns: p.s,
      aliases: 'Finger Leader',
      faction: f.o,
      location: 'Ramsmurth',
      description: '',
    },
  },
  {
    name: 'Ghia Darden',
    details: {
      pronouns: p.s,
      aliases: 'Portmaster of Whalsmurth',
      faction: f.g,
      location: 'Whalsmurth',
      description: '',
    },
  },
  {
    name: 'Taggares',
    details: {
      pronouns: p.h,
      aliases: 'Whaler',
      faction: f.g,
      location: 'Whalsmurth',
      description: '',
    },
  },
  {
    name: 'Strings',
    details: {
      pronouns: p.h,
      aliases: 'Finger Leader',
      faction: f.o,
      location: 'Whalsmurth',
      description: 'Disguised leader of the Grasping: Fiddler',
    },
  },
  {
    name: 'Zulk',
    details: {
      pronouns: p.h,
      aliases: 'Tairost Trade Agent',
      faction: f.t,
      location: 'Whalsmurth',
      description: '',
    },
  },
  {
    name: 'Ceso Balban',
    details: {
      pronouns: p.h,
      aliases: 'Governor of Hawksmurth',
      faction: f.g,
      location: 'Hawksmurth',
      description: '',
    },
  },
  {
    name: 'Alwine Sinoj',
    details: {
      pronouns: p.s,
      aliases: 'Marble Virkeeper',
      faction: f.g,
      location: 'Hawksmurth',
      description: '',
    },
  },
  {
    name: 'Baroni Novak',
    details: {
      pronouns: p.s,
      aliases: 'Portmaster of Squismurth',
      faction: f.g,
      location: 'Squismurth',
      description: '',
    },
  },
  {
    name: 'Dour Silnat',
    details: {
      pronouns: p.h,
      aliases: 'Master of Assassins',
      faction: f.s,
      location: 'Simyr - Central',
      description: '',
    },
  },
  {
    name: 'Nahag Drasc',
    details: {
      pronouns: p.h,
      aliases: 'Tithe Keeper',
      faction: f.s,
      location: 'Simyr - Central',
      description: '',
    },
  },
  {
    name: 'Nahag Sazec',
    details: {
      pronouns: p.s,
      aliases: 'Master of Scribes',
      faction: f.s,
      location: 'Simyr - Central',
      description: '',
    },
  },
  {
    name: 'Fedryk Rose',
    details: {
      pronouns: p.h,
      aliases: 'Tairost Trade Official',
      faction: f.t,
      location: 'Simyr - Central',
      description: '',
    },
  },
  {
    name: 'Opati',
    details: {
      pronouns: p.s,
      aliases: 'North Gatemaster',
      faction: f.s,
      location: 'Simyr - North',
      description: '',
    },
  },
  {
    name: 'Oricco Kawesi',
    details: {
      pronouns: p.h,
      aliases: 'Tairost Trade Agent',
      faction: f.t,
      location: 'Simyr - North',
      description: '',
    },
  },
  {
    name: 'Kaveh',
    details: {
      pronouns: p.h,
      aliases: 'South Gatemaster',
      faction: f.s,
      location: 'Simyr - South',
      description: '',
    },
  },
  {
    name: 'Madar Nosrati',
    details: {
      pronouns: p.t,
      aliases: 'Tairost Trade Agent',
      faction: f.t,
      location: 'Simyr - South',
      description: '',
    },
  },
  {
    name: 'Mangels Henko',
    details: {
      pronouns: p.h,
      aliases: 'Shipwright',
      faction: f.s,
      location: 'Simyr - East',
      description: '',
    },
  },
  {
    name: 'Cuttle',
    details: {
      pronouns: p.h,
      aliases: 'Hand Leader',
      faction: f.o,
      location: 'Simyr - West',
      description: '',
    },
  },
  {
    name: 'Tarr',
    details: {
      pronouns: p.h,
      aliases: 'Finger Leader',
      faction: f.o,
      location: 'Simyr - Slums',
      description: '',
    },
  },
  {
    name: 'Charon',
    details: {
      pronouns: p.h,
      aliases: 'Ferryman',
      faction: f.s,
      location: 'Simyr - Nundia Porta',
      description: '',
    },
  },
  {
    name: 'Semet Culcasi',
    details: {
      pronouns: p.h,
      aliases: 'Clay Virsmith',
      faction: f.s,
      location: 'Simyr - Rage Watchtower',
      description: '',
    },
  },
  {
    name: 'Nevo Lelati',
    details: {
      pronouns: p.s,
      aliases: 'Titanium Virsmith',
      faction: f.s,
      location: 'Simyr - Patience Watchtower',
      description: '',
    },
  },
  {
    name: 'Dour Sand',
    details: {
      pronouns: p.s,
      aliases: 'Opal Virsmith',
      faction: f.s,
      location: 'Simyr - Zeal Watchtower',
      description: '',
    },
  },
  {
    name: 'Pyre Shobe',
    details: {
      pronouns: p.s,
      aliases: 'Sentinel-Captain',
      faction: f.s,
      location: 'Simyr - Drown Watchtower',
      description: '',
    },
  },
  {
    name: 'Pyre Suresh',
    details: {
      pronouns: p.h,
      aliases: 'Ranger-General',
      faction: f.s,
      location: 'Simyr - Drown Watchtower',
      description: '',
    },
  },
  {
    name: 'Absi',
    details: {
      pronouns: p.t,
      aliases: 'Dire Wolf',
      faction: f.q,
      location: 'Dirth',
      description: '',
    },
  },
  {
    name: 'Everrain',
    details: {
      pronouns: p.s,
      aliases: 'Quartz Shaman',
      faction: f.q,
      location: 'Dirth',
      description: '',
    },
  },
  {
    name: 'Jukai Mikva',
    details: {
      pronouns: p.s,
      aliases: 'Tairost Trade Agent',
      faction: f.t,
      location: 'Dirth',
      description: '',
    },
  },
  {
    name: 'Loken',
    details: {
      pronouns: p.s,
      aliases: 'the Younger',
      faction: f.q,
      location: 'Forth',
      description: '',
    },
  },
  {
    name: 'Longtooth',
    details: {
      pronouns: p.h,
      aliases: 'Iron Shaman',
      faction: f.q,
      location: 'Forth',
      description: '',
    },
  },
  {
    name: 'Maybe',
    details: {
      pronouns: p.s,
      aliases: 'Hand Leader',
      faction: f.o,
      location: 'Forth',
      description: '',
    },
  },
  {
    name: 'Pokal Feinsod',
    details: {
      pronouns: p.h,
      aliases: 'Tairost Trade Agent',
      faction: f.t,
      location: 'Forth',
      description: '',
    },
  },
  {
    name: 'Bairith',
    details: {
      pronouns: p.h,
      aliases: 'Warleader',
      faction: f.q,
      location: 'Squash',
      description: '',
    },
  },
  {
    name: 'Opt',
    details: {
      pronouns: p.h,
      aliases: 'Basalt Shaman',
      faction: f.q,
      location: "L'rorar",
      description: '',
    },
  },
];

export default npcArray;
