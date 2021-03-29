// Write your JavaScript code here! 

window.addEventListener("load", () => {
   const form = document.querySelector("form");

   form.addEventListener("submit", (event) => {
      event.preventDefault();
      let pilotnameInput = document.querySelector("input[name = pilotName]").value;
      let copilotnameInput = document.querySelector("input[name =copilotName]").value;
      let fuelLevelInput = document.querySelector("input[name = fuelLevel]").value;
      let cargoMassInput = document.querySelector("input[name = cargoMass]").value;   
         
      if (pilotnameInput === "" || copilotnameInput === "" || 
         fuelLevelInput === "" || cargoMassInput === ""){
         alert("All fields are required!");
     //    event.preventDefault();
      } else if ((typeof(pilotnameInput) != "string")  || 
                 typeof(copilotnameInput) != "string") {
            alert("Must be AlphaNumerical Characters")
      //     event.preventDefault()
      }
      
      if (isNaN(fuelLevelInput) || 
                  isNaN(cargoMassInput)){
         alert("Fuel Levels and Cargo mass require a numerical input.");
         event.preventDefault();
      } else {
         fuelLevelInput = Number(fuelLevelInput);
         cargoMassInput = Number(cargoMassInput);
      }

      //Updating Shuttle Requirements
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotnameInput} is ready for launch`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotnameInput} is ready for launch`;

         
      if (fuelLevelInput < 10000) {
         //Make Status Layout Visible
         document.getElementById("faultyItems").style.visibility = "visible";
         //Fuel Status Change
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"

      } else {document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"}
         
      if (cargoMassInput > 10000) {
         //Make Status Layout Visible
         document.getElementById("faultyItems").style.visibility = "visible";
         //Cargo Status Change
         document.getElementById("cargoStatus").innerHTML = "Cargo Mass has Exceeded Maximum Capacity"
         
      } else {document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch"}

         //LaunchStatus Box Modifications  <h2> 
      if (fuelLevelInput < 10000 || cargoMassInput > 10000) { //not ready to Launch
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
         document.getElementById("launchStatus").style.color = "red"
      } else { //Ready for Launch
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
         document.getElementById("launchStatus").style.color = "green"
      }
   });//end of form

         


}); //end of window block  
   

/*
      let NotReadyToLaunch = true;

      let updateRequirements = (documentByID) => {
            let shuttleStatus = `
               <ol>
                  <li id="pilotStatus">Pilot ${pilotnameInput.value} is ready for launch</li>
                  <li id="copilotStatus">Co-pilot ${copilotnameInput.value} is ready for launch</li>
                  `;

            if (Number(fuelLevelInput) < 10000) {
               documentByID.style.visibility = "visible";
               shuttleStatus += 
                  `<li id="fuelStatus">Fuel level too low for launch</li>`;
               
               launchStatus = document.getElementById('launchStatus'); 
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "red";
            }
            documentByID.innerHTML =  shuttleStatus;
            return documentByID.innerHTML;
         }
      if (NotReadyToLaunch) {
        
      }
      let faultyItems = document.getElementById("faultyItems");
      console.log(updateRequirements(faultyItems));
      console.log(faultyItems.innerHTML);
*/

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
