import { MusicInputs, SampleSet, SlotList } from "./types";

export const dep_slotList: SlotList = [
  { slotName: "BASS", slotNote: "C3" },
  { slotName: "HIHAT", slotNote: "D3" },
  { slotName: "KICKSNARE", slotNote: "E3" },
  { slotName: "MAINSAMPLE", slotNote: "F3" },
  { slotName: "PERCGLITCH", slotNote: "G3" },
  { slotName: "VOXSAMPLE", slotNote: "A4" },
];

// MUSICNFT on pinata
export const depr_ipfsHash = "QmYZsbc1M4Bp8SoGNrwMyrcgaoH6a8cDxQzy3wzuER1eez";

export const chimpoko2: SampleSet = {
  setName: "CHIMPOKO_2",
  ipfsHash: "QmYZsbc1M4Bp8SoGNrwMyrcgaoH6a8cDxQzy3wzuER1eez",
  slotList: [
    { slotName: "BASS", slotNote: "C3", slotFileOverride: "CHIMPOKO2_BASS" },
    { slotName: "HIHAT", slotNote: "D3", slotFileOverride: "CHIMPOKO2_HIHAT" },
    {
      slotName: "KICKSNARE",
      slotNote: "E3",
      slotFileOverride: "CHIMPOKO2_KICKSNARE",
    },
    {
      slotName: "MAINSAMPLE",
      slotNote: "F3",
      slotFileOverride: "CHIMPOKO2_MAINSAMPLE",
    },
    {
      slotName: "PERCGLITCH",
      slotNote: "G3",
      slotFileOverride: "CHIMPOKO2_PERCGLITCH",
    },
    {
      slotName: "VOXSAMPLE",
      slotNote: "A4",
      slotFileOverride: "CHIMPOKO2_VOXSAMPLE",
    },
  ],
};

export const chimpoko3: SampleSet = {
  setName: "CHIMPOKO_3",
  ipfsHash: "QmY76wskXCJRf84WjXzgjMRfP3GSS53YeZ1qrN9Cjqwab2",
  slotList: [
    { slotName: "BASSE", slotNote: "B4" },
    { slotName: "HIHAT", slotNote: "C4" },
    { slotName: "KICK", slotNote: "D4" },
    { slotName: "SNARE", slotNote: "E4" },
    { slotName: "NAPPE", slotNote: "F4" },
    { slotName: "SYNTHHI", slotNote: "G4" },
    { slotName: "SYNTHMED", slotNote: "A5" },
    { slotName: "VAPORSOUNDS", slotNote: "B5" },
  ],
};

// NICOLAS aka Billy ray Valentines

// Kick
// Basse
// Hihat: 3 dif
// Nappe
// Snare
// Synth Hi : 2
// Synth Med : 2
// vaporsounds/synthcloud
// samplesfight
// Perc : 2
export const nicolasBaseSet: SampleSet = {
  setName: "New Eyes 1",
  ipfsHash: "QmPuFWxZCiPqq5D9BQTiYaDiqNNdebf41UrkjoAUawBTKD",
  slotList: [
    { slotName: "KICK", slotNote: "A1" },
    { slotName: "BASSE", slotNote: "B1" },
    { slotName: "HIHAT", slotNote: "C1" },
    { slotName: "SNARE", slotNote: "D1" },
    { slotName: "PERC", slotNote: "E1" },
    { slotName: "NAPPE", slotNote: "F1" },
    { slotName: "SYNTHHI", slotNote: "G1" },
    { slotName: "SYNTHMED", slotNote: "A2" },
    { slotName: "VAPORSOUNDS", slotNote: "B2" },
    { slotName: "SAMPLESFIGHT(4BARS)", slotNote: "C2" },
  ],
};

export const nicolaSet2: SampleSet = {
  setName: "New Eyes 2",
  ipfsHash: "QmPuFWxZCiPqq5D9BQTiYaDiqNNdebf41UrkjoAUawBTKD",
  slotList: [
    undefined,
    undefined,
    { slotName: "HIHAT 2", slotNote: "D2" },
    undefined,
    { slotName: "PERC2", slotNote: "E2" },
    undefined,
    { slotName: "SYNTH2HI", slotNote: "F2" },
    { slotName: "SYNTH2MED", slotNote: "G2" },
    { slotName: "SYNTHCLOUD (4BAR)", slotNote: "A3" },
    undefined,
  ],
};
export const nicolaSet3: SampleSet = {
  setName: "New Eyes 3",
  ipfsHash: "QmPuFWxZCiPqq5D9BQTiYaDiqNNdebf41UrkjoAUawBTKD",
  slotList: [undefined, undefined, { slotName: "HIHAT 3", slotNote: "B3" }],
};

export const nicolasTrackList = [
  "Kick",
  "Bass",
  "Hihat",
  "Snare",
  "Perc",
  "Nappe",
  "Synth Hi",
  "Synth Med",
  "Vapor",
  "Samples",
];

// OScar aka Walfroy
export const walfroyTrackList = ["Kick", "Diva 1", "Diva 2", "Kit"];

export const walfroySet1: SampleSet = {
  setName: "Walfroy 1",
  ipfsHash: "QmVV4FGcfw5CtPMYyjY9oFHu3rnq6TkSJPP8fQLxmVuVbL",
  slotList: [
    {
      slotName: "Kick 1",
      slotNote: "D4",
      slotFileOverride: "techno loop 1 1-DS Kick",
    },
    {
      slotName: "TAL",
      slotNote: "B4",
      slotFileOverride: "techno loop 1 2-TAL BassLine 101",
    },
    {
      slotName: "TAL 2",
      slotNote: "C4",
      slotFileOverride: "techno loop 1 3-TAL BassLine 101",
    },
    {
      slotName: "RKU_ALEPH",
      slotNote: "E4",
      slotFileOverride:
        "techno loop 1 4-RKU_ALEPH_RAVE_LOOP_DRUM_TECHNO_HATS_130BPM",
    },
  ],
};
export const walfroySet2: SampleSet = {
  setName: "module01",
  ipfsHash: "QmVV4FGcfw5CtPMYyjY9oFHu3rnq6TkSJPP8fQLxmVuVbL",
  slotList: [
    {
      slotName: "Kick 1",
      slotNote: "F4",
      slotFileOverride: "techno loop 2 1-DS Kick",
    },
    {
      slotName: "Diva 1.1",
      slotNote: "G4",
      slotFileOverride: "techno loop 2 2-Diva",
    },
    {
      slotName: "Diva 1.2",
      slotNote: "A5",
      slotFileOverride: "techno loop 2 3-Diva",
    },
    {
      slotName: "808 Kit",
      slotNote: "B5",
      slotFileOverride: "techno loop 2 4-808 Core Kit",
    },
  ],
};
export const walfroySet3: SampleSet = {
  setName: "module02",
  ipfsHash: "QmVV4FGcfw5CtPMYyjY9oFHu3rnq6TkSJPP8fQLxmVuVbL",
  slotList: [
    {
      slotName: "Kick 2",
      slotNote: "C5",
      slotFileOverride: "techno loop 3 1-DS Kick",
    },
    {
      slotName: "Diva 2.1",
      slotNote: "D5",
      slotFileOverride: "techno loop 3 2-Diva",
    },
    {
      slotName: "Diva 2.2",
      slotNote: "E5",
      slotFileOverride: "techno loop 3 3-Diva",
    },
    {
      slotName: "Selector Kit",
      slotNote: "F5",
      slotFileOverride: "techno loop 3 4-Selector Kit Clean",
    },
  ],
};
export const walfroySet4: SampleSet = {
  setName: "module03",
  ipfsHash: "QmVV4FGcfw5CtPMYyjY9oFHu3rnq6TkSJPP8fQLxmVuVbL",
  slotList: [
    {
      slotName: "Kick 3",
      slotNote: "A6",
      slotFileOverride: "techno loop 4 1-DS Kick",
    },
    {
      slotName: "Diva 3.1",
      slotNote: "B6",
      slotFileOverride: "techno loop 4 2-Diva",
    },
    {
      slotName: "Diva 3.2",
      slotNote: "C6",
      slotFileOverride: "techno loop 4 3-Diva",
    },
    {
      slotName: "Akustichord Kit",
      slotNote: "D6",
      slotFileOverride: "techno loop 4 4-Akustichord Kit",
    },
  ],
};

export const billyRayInputs: MusicInputs = [
  "Billy Ray Valentine",
  126,
  4,
  [nicolasBaseSet, nicolaSet2, nicolaSet3],
  nicolasTrackList,
  [...nicolasBaseSet.slotList, ...nicolaSet2.slotList, ...nicolaSet3.slotList],
];
export const walfroyInputs: MusicInputs = [
  "Walfroy",
  140,
  4,
  [
    //walfroySet1,
    walfroySet2,
    walfroySet3,
    walfroySet4,
  ],
  walfroyTrackList,
  [
    //...walfroySet1.slotList,
    ...walfroySet2.slotList,
    ...walfroySet3.slotList,
    ...walfroySet4.slotList,
  ],
];

// export const oneBarDuration = 1.9512;
// export const fourBarDuration = 4 * oneBarDuration;

export const wsProviderUrl = "wss://node.rmrk.app";

export const startBlock = 12063944;
