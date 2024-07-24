async function report(x,y){
    const res= await fetch(`http://api.weatherapi.com/v1/current.json?key=5c350d3b6e134cda95595002240507&q=${x},${y}&aqi=yes`)
    return await res.json()
}




async function gotlocation(position){
    const lat =position.coords.latitude;
    const long= position.coords.longitude;
    console.log(position)
    console.log(await report(lat,long))
    
}
function failedloaction(){
    console.log("there is some loaction issues")
}

function fn(){
    const res= navigator.geolocation.getCurrentPosition(gotlocation,failedloaction)
    console.log(res)
}
 fn()