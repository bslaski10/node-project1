const getSport = async () => {
    try {
      return (await fetch("http://localhost:3000/api/sports")).json();
    } catch (error) {
      console.log("error");
    }
  };
  
  const showSport = async () => {
    let sportJSON = await getSport();
    let sportContainer = document.getElementById("sports-div");
  
    if (sportJSON == "") {
      console.log("JSON not loaded");
      return;
    }
  
    sportJSON.forEach((sports) => {
      let section = document.createElement("section");
      section.classList.add("sport-style");
      sportContainer.appendChild(section);
  
      let h2 = document.createElement("h2");
      h2.innerText = sports.name;
      section.appendChild(h2);
  
      let img = document.createElement("img");
      img.src = "http://localhost:3000/" + sports.img;
      section.appendChild(img);
  
      let players = document.createElement("p");
      players.innerText = `Players: ${sports.players}`;
      section.appendChild(players);
  
      let pace = document.createElement("p");
      pace.innerText = `Pace: ${sports.pace}`;
      section.appendChild(pace);
  
      let scoring = document.createElement("p");
      scoring.innerText = `Scoring: ${sports.scoring}`;
      section.appendChild(scoring);
  
      let teams = document.createElement("p");
      teams.innerText = `Teams: ${sports.teams}`;
      section.appendChild(teams);

    });
  };
  
  
  window.onload = () => {
    showSport();
  };