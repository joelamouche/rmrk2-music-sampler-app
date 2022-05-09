export const Menu=(page:string,setPage:(page:string)=>void)=>{
    return (<div className="" style={{ textAlign:"center",width:"100vw"}}>
      {/* <div>Choose Artist</div> */}
          {/* <div style={{ display: "inline" }}> */}
            <div
            //   className={
            //     musicInput[0] === "Billy Ray Valentine"
            //       ? "nes-btn is-success"
            //       : "nes-btn is-primary"
            //   }
            style={{color:page === "Music"
                  ? "blue"
                  : "white",display: "inline",marginRight:"25vw"
        }}
              onMouseDown={async () => {
                setPage("Music");
              }}
            >
              Music
            </div>
          {/* </div> */}
          {/* <div style={{ display: "inline" }}> */}
            <div
              style={{color:page === "About"
                  ? "blue"
                  : "white",display: "inline"
        }}
              onMouseDown={async () => {
                setPage("About");
              }}
            >
              About
            {/* </div> */}
          </div>
        </div>)
}