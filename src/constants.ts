export type SlotNote = string;
export type SlotName = string;
export interface Slot {
  slotName: SlotName;
  slotNote: SlotNote;
  slotFileOverride?:string;
}
export type SlotList = Slot[];

export type SetName=string;
export type SetIpfsHash=`Qm${string}`;
export interface SampleSet {
  setName: SetName;
  ipfsHash: SetIpfsHash;
  slotList: SlotList
}

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

export const chimpoko2:SampleSet={
  setName:"CHIMPOKO_2",
  ipfsHash:"QmYZsbc1M4Bp8SoGNrwMyrcgaoH6a8cDxQzy3wzuER1eez",
  slotList:
[  { slotName: "BASS", slotNote: "C3",slotFileOverride: "CHIMPOKO2_BASS" },
  { slotName: "HIHAT", slotNote: "D3" ,slotFileOverride: "CHIMPOKO2_HIHAT"},
  { slotName: "KICKSNARE", slotNote: "E3",slotFileOverride: "CHIMPOKO2_KICKSNARE"},
  { slotName: "MAINSAMPLE", slotNote: "F3" ,slotFileOverride: "CHIMPOKO2_MAINSAMPLE"},
  { slotName: "PERCGLITCH", slotNote: "G3" ,slotFileOverride: "CHIMPOKO2_PERCGLITCH"},
  { slotName: "VOXSAMPLE", slotNote: "A4" ,slotFileOverride: "CHIMPOKO2_VOXSAMPLE"},]
}

export const chimpoko3:SampleSet={
  setName:"CHIMPOKO_3",
  ipfsHash:"QmY76wskXCJRf84WjXzgjMRfP3GSS53YeZ1qrN9Cjqwab2",
  slotList:
[  { slotName: "BASSE", slotNote: "B4" },
  { slotName: "HIHAT", slotNote: "C4" },
  { slotName: "KICK", slotNote: "D4" },
  { slotName: "SNARE", slotNote: "E4" },
  { slotName: "NAPPE", slotNote: "F4" },
  { slotName: "SYNTHHI", slotNote: "G4" },
  { slotName: "SYNTHMED", slotNote: "A5" },
  { slotName: "VAPORSOUNDS", slotNote: "B5" },]
}

export const trackList=["1","2","3","4","5","6","7","8"]

export const oneBarDuration = 1.9512;
export const fourBarDuration = 4 * oneBarDuration;

export const wsProviderUrl = "wss://node.rmrk.app";

export const startBlock = 12063944;
