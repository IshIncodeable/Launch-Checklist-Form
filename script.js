// Write your JavaScript code here! 

window.addEventListener("load", () => {
   const form = document.querySelector("form");

   form.addEventListener("submit", (event) => {
      let pilotnameInput = document.querySelector("input[name = pilotName]").value;
      let copilotnameInput = document.querySelector("input[name =copilotName]").value;
      let fuelLevelInput = document.querySelector("input[name = fuelLevel]").value;
      let cargoMassInput = document.querySelector("input[name = cargoMass]").value;   
         
   

      if (pilotnameInput === "" || copilotnameInput === "" || 
         fuelLevelInput === "" || cargoMassInput === ""){
         alert("All fields are required!");
         event.preventDefault();
      } else if ((typeof(pilotnameInput) != "string")  || 
                 typeof(copilotnameInput) != "string") {
            alert("Must be AlphaNumerical Characters")
            event.preventDefault()
      }
      
      if (isNaN(fuelLevelInput) || 
                  isNaN(cargoMassInput)){
         alert("Fuel Levels and Cargo mass require a numerical input.");
         event.preventDefault();
      }else {
         fuelLevelInput = Number(fuelLevelInput);
         cargoMassInput = Number(cargoMassInput);
      }

      console.log("fuel level:", fuelLevelInput, "|| type: ", typeof(fuelLevelInput) );
      console.log("pilot's name:", pilotnameInput, "|| type: ", typeof(pilotnameInput) );
   });//end of form

         


}); //end of window block  
   



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
