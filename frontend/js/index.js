// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
let poly;
let map;
function task(i, poly, path, data) { 
  setTimeout(function() { 
      path.push(new google.maps.LatLng(data["lat"], data["lng"]))
      poly.setPath(path)
  }, 2000*i); 
}
function initMap() {
    fetch("http://localhost:3000/")
    .then(response =>{
      return response.json()
    }).then(data =>{
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: {"lat":13.78911167,"lng":100.60405},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
  
      const poly = new google.maps.Polyline({
        path: [],
        geodesic: true,
        map
      });
      poly.setMap(map);
      for(let i =0; i <data.length; i++){
        var path = poly.getPath()
        task(i, poly, path, data[i]);
      }

      new google.maps.Marker({
        position: {"lat":13.78911167,"lng":100.60405},
        map,
        title:"Testing"
      })


  
    })
      }