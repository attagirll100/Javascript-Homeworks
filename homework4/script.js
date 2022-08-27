//The coding train API 

const api_url = "https://api.wheretheiss.at/v1/satellites/25544"

async function getSatellites() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {altitude} = data;
    
    document.getElementById("alt").textContent = altitude; 


}
   getSatellites();
   


   //makeup API 
   /*
  
   fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
   .then(res => res.json())
   .then(makeupdata => {
     console.log(makeupdata);
     console.log(makeupdata.results);
     makeupdata.results.map (makeup => {
       const list =document.getElementById("makeup");
       const listitem = document.createElement("li");
       listitem.innerHTML = `
       <h4>${[makeup.name]}</h4>`;
       list.appendChild(listitem);
     });
   })
   */ 
