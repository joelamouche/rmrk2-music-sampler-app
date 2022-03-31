import React, { useEffect } from 'react';
import { Song, Track, Instrument } from 'reactronica';
import * as Tone from 'tone'
import { fourBarDuration, ipfsHash, Slot, SlotList, slotList, SlotNote } from './constants';
const pinataUrlKick='https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_KICKSNARE.wav'
const pinataUrlHH='https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_HIHAT.wav'

export const SlotButtons=(slot:Slot,updateNextNotes,isNextPlayingNote:boolean,isPlayingNote:boolean)=>{
  return (<div>
    <button
      onMouseDown={
        async () => {
          updateNextNotes(slot.slotNote,true)
        ;}
      }
    >
      {slot.slotName} on
    </button>
    <button
       onMouseUp={() => {
         updateNextNotes(slot.slotNote,false)
        }
      }
    >
      {slot.slotName} off
    </button>
    <div>Next : {isNextPlayingNote?"on":"off"}</div>
    <div>Playing : {isPlayingNote?"on":"off"}</div>
    </div>)
}

export const buildSamples=(slotList:SlotList,ipfsHash:string)=>{
  let samples={}
  slotList.forEach((slot)=>{
    samples[slot.slotNote]=`https://musicgateway.mypinata.cloud/ipfs/${ipfsHash}/CHIMPOKO2_${slot.slotName}.wav`
  })
  return samples
}

// Simplified Drum Pads
export const Reactronica = () => {
  let initNotes:{[key:SlotNote]:boolean}={}
  slotList.forEach((slot)=>{
    initNotes[slot.slotNote]=false
  })
  const [playingNotes, setPlayingNotes] = React.useState(initNotes);
  const [nextNotes, setNextNotes] = React.useState(initNotes);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [restartLoop, setRestartLoop] = React.useState(false);

   // Resume Audio Context
   useEffect(() => {
    console.log('resuming audio context')
    const audioContext=new AudioContext()
    audioContext.resume();
    console.log('done')

    console.log("start looping for duration "+fourBarDuration)
    setInterval(()=>{
      console.log("NEW LOOP")

      // stop
      setRestartLoop(true)
  
      setIsPlaying(false)
      setPlayingNotes(initNotes)

    },fourBarDuration*1000+100)
  },[]);

  // Restart loop when loading a new note
//   useEffect(() => {
//     // Restart only if a sample is paying
//     if (Object.values(nextNotes).reduce(
//       (previousValue, currentValue) => previousValue || currentValue,
//       false
//     )){
//       console.log("stopping loop")
//       setRestartLoop(true)
  
//       setIsPlaying(false)
//       setPlayingNotes(initNotes)
//     } else {
//       console.log("stopping loop without restarting")
//       setIsPlaying(false)
//       setPlayingNotes(initNotes)
//     }
//  }, [nextNotes]);

 useEffect(() => {
   if (
     //!isPlaying&&
     restartLoop){
    console.log("restarting loop")
    setRestartLoop(false)

    setIsPlaying(true)
    console.log("nextNotes",nextNotes)
    setPlayingNotes(nextNotes)
   }
}, [
  //isPlaying,
  restartLoop]);

  // restart loop at the end of every loop
//   useEffect(() => {
//     console.log("stopping loop")
//     //setIsPlaying(false)
//     setRestartLoop(true)

//     setPlayingNotes(initNotes)
//  }, [playingNotes]);

  const updateNextNotes=(noteName:string,noteValue:boolean)=>{
    setNextNotes({...nextNotes,[noteName]:noteValue})
  }
  console.log("playingNotes",playingNotes)
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Sampler</th>
            </tr>
        </thead>
        <tbody>
          {slotList.map((slot)=>{
            console.log(slot.slotName,playingNotes)
            console.log(slot.slotName,nextNotes[slot.slotNote],playingNotes[slot.slotNote])
            return (<tr key={slot.slotName}>
              <td>{slot.slotName}</td>
              <td>{SlotButtons(slot,updateNextNotes,nextNotes[slot.slotNote],playingNotes[slot.slotNote])}</td>
          </tr>)
          })}
            
        </tbody>
    </table>

      {/* ...other pads */}

      {/* Reactronica Components */}
      <Song isPlaying={isPlaying} bpm={123}>
        <Track>
          <Instrument
            type="sampler"
            notes={Object.keys(playingNotes).filter((name)=>playingNotes[name]).map((name)=>{return {name,duration:fourBarDuration}})}
            samples={buildSamples(slotList,ipfsHash)}
            onLoad={(buffers) => {
              // Runs when all samples are loaded
              console.log("**Samples Loaded**")
            }}
          />
        </Track>
      </Song>
    </>
  );
};
