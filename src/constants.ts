export type SlotNote=string
export type SlotName=string
export interface Slot {
    slotName:SlotName;
    slotNote:SlotNote;
}
export type SlotList=Slot[]
export const slotList:SlotList=[
    {slotName:"BASS",slotNote:"C3"},
    {slotName:"HIHAT",slotNote:"D3"},
    {slotName:"KICKSNARE",slotNote:"E3"},
   {slotName: "MAINSAMPLE",slotNote:"F3"},
    {slotName:"PERCGLITCH",slotNote:"G3"},
    {slotName:"VOXSAMPLE",slotNote:"A4"}
]
export const ipfsHash="QmYZsbc1M4Bp8SoGNrwMyrcgaoH6a8cDxQzy3wzuER1eez"

export const oneBarDuration=1.9512
export const fourBarDuration=4*oneBarDuration

export const wsProviderUrl= "wss://node.rmrk.app"

export const startBlock=12063944