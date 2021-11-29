const element = (
  //   Write your code here.
  //const team1ImageUrl = "https://assets.ccbp.in/frontend/react-js/rcb-img.png"
  //const team2ImageUrl = "https://assets.ccbp.in/frontend/react-js/csk-img.png"
  <div className="bg-container">
    <h1 className="headingEl">Super Over League</h1>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="imageStyle"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="imageStyle"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
