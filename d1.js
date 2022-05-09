function updatelist()
{
fetch("/data.json")
.then(ref => ref.json())
.then(rep => { 
    console.log(rep);
   rep.members.forEach(element => {
        longitude = element.longitude;
        latitude = element.latitude; 
       // var marker = new mapboxgl.Marker()
        new mapboxgl.Marker({
            draggable: false
        })
        .setLngLat([longitude, latitude ])
        .addTo(this.map);
    });
})
}
updatelist();