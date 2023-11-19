let btn = document.getElementById("btn");
let btn_off = document.getElementById("btn_off");


let btn_2 = document.getElementById("btn_2");
let btn_off_2 = document.getElementById("btn_off_2");
let memory  =[20, 37];
// let show = document.getElementById("show");

let btn_pump_span_translate = document.getElementById("btn_pump_span_translate");



btn.addEventListener( "click",()=>{
    console.log("on first led ");

    btn.disabled = true;
    btn_off.disabled = true;
    show.disabled = true;
    
    btn.style =`opacity: 0;`;


        fetch("https://api.thingspeak.com/update?api_key=2E6RA19TJQ0K8HKA&field1=1")
        .then(response => response.json())
        .then((json)=>{
          console.log(json);
        
            setTimeout(()=>{
                btn.disabled = false;
                btn.style =`opacity: 1;`
                // btn_off.disabled = false;
                // show.disabled = false;
            },15000);
        }).catch((err)=>{
            console.log(err , ">--- err");
        }).finally(()=>{
            btn.style =`opacity: 1;`
            btn.disabled = false;
            btn_off.disabled = false;
            show.disabled = false;
        })
})


console.log(btn_off);
btn_off.addEventListener("click",()=>{
    console.log("off first led ");

    btn.disabled = true;
    btn_off.disabled = true;
    show.disabled = true;

    fetch("https://api.thingspeak.com/update?api_key=2E6RA19TJQ0K8HKA&field1=0")
    .then(response => response.json())
    .then((json)=>{
        console.log(json);
        setTimeout(()=>{
            btn.disabled = false;
            btn_off.disabled = false;
            show.disabled = false;
        },15000)
      
    }).catch((err)=>{
        console.log(err , ">--- err");

    }).finally(()=>{
        btn.disabled = false;
        btn_off.disabled = false;
        show.disabled = false;
    })

    
   

})
// __________________________________________________________________________________________________________________



btn_2.addEventListener( "click",()=>{
    console.log("on second led ");
    btn.disabled = true;
    btn_off.disabled = true;
    show.disabled = true;
    
    btn.style =`opacity: 0;`


        fetch("https://api.thingspeak.com/update?api_key=2E6RA19TJQ0K8HKA&field2=1")
        .then(response => response.json())
        .then((json)=>{
          console.log(json);
        
            setTimeout(()=>{
                btn.disabled = false;
                btn.style =`opacity: 1;`
                // btn_off.disabled = false;
                // show.disabled = false;
            },15000);
        }).catch((err)=>{
            console.log(err , ">--- err");
        }).finally(()=>{
            btn.style =`opacity: 1;`
            btn.disabled = false;
            btn_off.disabled = false;
            show.disabled = false;
        })
})



btn_off_2.addEventListener("click",()=>{
    console.log("off second led ");
    btn.disabled = true;
    btn_off.disabled = true;
    show.disabled = true;
     
    fetch("https://api.thingspeak.com/update?api_key=2E6RA19TJQ0K8HKA&field2=0")
    .then(response => response.json())
    .then((json)=>{
        console.log(json);
        setTimeout(()=>{
            btn.disabled = false;
            btn_off.disabled = false;
            show.disabled = false;
        },15000)
      
    }).catch((err)=>{
        console.log(err , ">--- err");

    }).finally(()=>{
        btn.disabled = false;
        btn_off.disabled = false;
        show.disabled = false;
    })

    
   

})



show.addEventListener("click" , ()=>{
    fetch("https://api.thingspeak.com/channels/2350014/feeds.json?results=2")
    .then(res => res.json())
    .then((data)=>{
        console.log(data , " <----- my data");
    })
})





setInterval(()=>{
    getReadings()
}, 16000)


























// Get current sensor readings when the page loads  
window.addEventListener('load', getReadings);
 
// Create Temperature Gauge
var gaugeTemp = new LinearGauge({
  renderTo: 'gauge-temperature',
  width: 120,
  height: 400,
  units: "Ջերմաստիճան C",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  maxValue: 40,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueDec: 2,
  valueInt: 2,
  majorTicks: [
      "0",
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40"
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 30,
          "to": 40,
          "color": "rgba(200, 50, 50, .75)"
      }
  ],
  colorPlate: "#fff",
  colorBarProgress: "#CC2936",
  colorBarProgressEnd: "#049faa",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear",
  barWidth: 10,
}).draw();
   
// Create Humidity Gauge
var gaugeHum = new RadialGauge({
  renderTo: 'gauge-humidity',
  width: 300,
  height: 300,
  units: "Խոնավություն (%)",
  minValue: 0,
  maxValue: 100,
  colorValueBoxRect: "#049faa",
  colorValueBoxRectEnd: "#049faa",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0",
      "20",
      "40",
      "60",
      "80",
      "100"
 
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 80,
          "to": 100,
          "color": "#03C0C1"
      }
  ],
  colorPlate: "#fff",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#007F80",
  colorNeedleEnd: "#007F80",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#007F80",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();
 




// Function to get current readings on the webpage when it loads for the first time
function getReadings(){
    fetch("https://api.thingspeak.com/channels/2350014/feeds.json?results=2")
    .then(res => res.json())
    .then((data)=>{
        console.log(data.feeds[1].field1 , " <----- field1");
        console.log(data.feeds[1].field2 , " <----- field2");
        if(data.feeds[1].field1 && data.feeds[1].field2){
            memory = [data.feeds[1].field1,data.feeds[1].field2]
            gaugeHum.value  = data.feeds[1].field1;
            gaugeTemp.value = data.feeds[1].field2;
        }else{
            gaugeHum.value  = memory[1];
            gaugeTemp.value = memory[0];
        }
   

    })

    //   gaugeTemp.value = 20;
    //   gaugeHum.value = 30;

}
 

