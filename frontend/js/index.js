// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {
    fetch("http://localhost:3000/")
    .then(response =>{
      return response.json()
    }).then(data =>{
      console.log(data)
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {"lat":13.78911167,"lng":100.60405},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
  
      const flightPlanCoordinates = data;
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      flightPath.setMap(map);

      new google.maps.Marker({
        position: {"lat":13.78911167,"lng":100.60405},
        map,
        title:"Testing"
      })


  
    })
      }