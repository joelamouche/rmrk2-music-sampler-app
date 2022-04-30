import { SampleSet, SlotList } from "./types";

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
    { slotName: "KICK", slotNote: "D4" },
    { slotName: "BASSE", slotNote: "B4" },
    { slotName: "HIHAT", slotNote: "C4" },
    { slotName: "SNARE", slotNote: "E4" },
    { slotName: "PERC", slotNote: "F4" },
    { slotName: "NAPPE", slotNote: "G4" },
    { slotName: "SYNTHHI", slotNote: "A5" },
    { slotName: "SYNTHMED", slotNote: "B5" },
    { slotName: "VAPORSOUNDS", slotNote: "C5" },
    { slotName: "SAMPLESFIGHT(4BARS)", slotNote: "D5" },
  ],
};

export const nicolaSet2: SampleSet = {
  setName: "New Eyes 2",
  ipfsHash: "QmPuFWxZCiPqq5D9BQTiYaDiqNNdebf41UrkjoAUawBTKD",
  slotList: [
    undefined,
    undefined,
    { slotName: "HIHAT 2", slotNote: "A3" },
    undefined,
    { slotName: "PERC2", slotNote: "B3" },
    undefined,
    { slotName: "SYNTH2HI", slotNote: "C3" },
    { slotName: "SYNTH2MED", slotNote: "D3" },
    { slotName: "SYNTHCLOUD (4BAR)", slotNote: "E3" },
    undefined,
  ],
};
export const nicolaSet3: SampleSet = {
  setName: "New Eyes 3",
  ipfsHash: "QmPuFWxZCiPqq5D9BQTiYaDiqNNdebf41UrkjoAUawBTKD",
  slotList: [undefined, undefined, { slotName: "HIHAT 3", slotNote: "F3" }],
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
  setName: "Walfroy 2",
  ipfsHash: "QmVV4FGcfw5CtPMYyjY9oFHu3rnq6TkSJPP8fQLxmVuVbL",
  slotList: [
    {
      slotName: "Kick 2",
      slotNote: "F4",
      slotFileOverride: "techno loop 2 1-DS Kick",
    },
    {
      slotName: "Diva 2.1",
      slotNote: "G4",
      slotFileOverride: "techno loop 2 2-Diva",
    },
    {
      slotName: "Diva 2.2",
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
  setName: "Walfroy 3",
  ipfsHash: "QmVV4FGcfw5CtPMYyjY9oFHu3rnq6TkSJPP8fQLxmVuVbL",
  slotList: [
    {
      slotName: "Kick 3",
      slotNote: "C5",
      slotFileOverride: "techno loop 3 1-DS Kick",
    },
    {
      slotName: "Diva 3.1",
      slotNote: "D5",
      slotFileOverride: "techno loop 3 2-Diva",
    },
    {
      slotName: "Diva 3.2",
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
  setName: "Walfroy 4",
  ipfsHash: "QmVV4FGcfw5CtPMYyjY9oFHu3rnq6TkSJPP8fQLxmVuVbL",
  slotList: [
    {
      slotName: "Kick 4",
      slotNote: "A3",
      slotFileOverride: "techno loop 4 1-DS Kick",
    },
    {
      slotName: "Diva 4.1",
      slotNote: "B3",
      slotFileOverride: "techno loop 4 2-Diva",
    },
    {
      slotName: "Diva 4.2",
      slotNote: "C3",
      slotFileOverride: "techno loop 4 3-Diva",
    },
    {
      slotName: "Akustichord Kit",
      slotNote: "D3",
      slotFileOverride: "techno loop 4 4-Akustichord Kit",
    },
  ],
};

// export const oneBarDuration = 1.9512;
// export const fourBarDuration = 4 * oneBarDuration;

export const wsProviderUrl = "wss://node.rmrk.app";

export const startBlock = 12063944;
