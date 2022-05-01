export interface KeyboardState {
  [key: SlotNote]: boolean;
}
export type SamplePath=`https://musicgateway.mypinata.cloud/ipfs/${string}.wav`
export type SlotNote = string;
export type SlotName = string;
export interface Slot {
  slotName: SlotName;
  slotNote: SlotNote;
  slotFileOverride?: string;
}
export type SlotList = (Slot | undefined)[];

export type SetName = string;
export type SetIpfsHash = `Qm${string}`;
export interface SampleSet {
  setName: SetName;
  ipfsHash: SetIpfsHash;
  slotList: SlotList;
}
export type TrackName = string;

export type MusicInputs=[title: string,
    _bpm: number,
    numberOfBars: number,
    allSets: SampleSet[],
    trackList: TrackName[],
    allSamples: SlotList]
