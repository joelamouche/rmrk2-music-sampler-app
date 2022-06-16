import React from "react";
import { billyRayInputs } from "../constants";
import { MusicInputs } from "../types";
import { ArtistTab } from "./DisplayLogicComponents/ArtistTabs";
import { FullSamplerComponent } from "./SamplerComponents/FullSamplerComponent";

export const MusicComponent = () => {
  const [musicInput, setMusicInput] =
    React.useState<MusicInputs>(billyRayInputs);
  return (
    <div>
      {ArtistTab(musicInput, setMusicInput)}
      {FullSamplerComponent(...musicInput)}
    </div>
  );
};
