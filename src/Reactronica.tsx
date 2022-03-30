import React, { useEffect } from 'react';
import { Song, Track, Instrument } from 'reactronica';
import * as Tone from 'tone'
const pinataUrlKick='https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_KICKSNARE.wav'
const pinataUrlHH='https://musicgateway.mypinata.cloud/ipfs/QmXDezB5wD2RHrTkRMxGURgQ3k5sChd4gEUEYbZWKLdax7/CHIMPOKO_HIHAT.wav'

// Simplified Drum Pads
export const Reactronica = () => {
  //const [notes, setNotes] = React.useState([]);
  const [notes, setNotes] = React.useState({
    C3:false,
    D3:false
  });
   // Similaire à componentDidMount et componentDidUpdate :
   useEffect(() => {
    console.log('useefct')
    const audioContext=new AudioContext()
    audioContext.resume();
    console.log('done')
  });

  return (
    <>
      <button
        onMouseDown={
          async () => {setNotes({...notes,C3:true})
    ;}
        }
      >
        Kick on
      </button>
      <button
         onMouseUp={() => setNotes({...notes,C3:false})}
      >
        Kick off
      </button>
      <button
        onMouseDown={
          async () => {setNotes({...notes,D3:true})
    ;}
        }
      >
        HH on
      </button>
      <button
         onMouseUp={() => setNotes({...notes,D3:false})}
      >
        HH off
      </button>
      {/* ...other pads */}

      {/* Reactronica Components */}
      <Song isPlaying={true} bpm={90}>
        <Track>
          <Instrument
            type="sampler"
            notes={Object.keys(notes).filter((name)=>notes[name]).map((name)=>{return {name}})}
            samples={{
              C3: pinataUrlKick,
              D3: pinataUrlHH,
              // E3: '/drums/hat.wav',
            }}
            onLoad={(buffers) => {
              // Runs when all samples are loaded
              console.log("loaded")
            }}
          />
        </Track>
      </Song>
    </>
  );
};
