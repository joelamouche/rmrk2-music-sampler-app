export const Menu = (page: string, setPage: (page: string) => void) => {
  return (
    <div className="" style={{ textAlign: "center", width: "100vw" }}>
      <div
        style={{
          color: page === "Music" ? "blue" : "white",
          display: "inline",
          marginRight: "15vw",
        }}
        onMouseDown={async () => {
          setPage("Music");
        }}
      >
        Music
      </div>
      <div
        style={{
          color: page === "About" ? "blue" : "white",
          display: "inline",
          marginRight: "15vw",
        }}
        onMouseDown={async () => {
          setPage("About");
        }}
      >
        About
      </div>
      <div
        style={{
          color: page === "NFTs" ? "blue" : "white",
          display: "inline",
        }}
        onMouseDown={async () => {
          setPage("NFTs");
        }}
      >
        NFTs
      </div>
    </div>
  );
};
