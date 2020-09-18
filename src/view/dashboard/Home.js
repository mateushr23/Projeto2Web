import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div class="green">
            <img src="assets/Images/green.png" alt="Wallpaper"></img>
          </div>

          <div class="greenmobile">
            <img
              src="assets/Images/greenmobile.png"
              alt="Wallpaper Mobile"
            ></img>
          </div>

          <div class="choco">
            <img src="assets/Images/choco.jpg" alt="Chocolate"></img>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
