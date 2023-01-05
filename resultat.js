var sporsmaal1Riktig = document.getElementById("sporsmaal1E");
var sporsmaal1Feil = document.getElementById("sporsmaal1UE");
var sporsmaal2Riktig = document.getElementById("sporsmaal2E");
var sporsmaal2Feil = document.getElementById("sporsmaal2UE");
var sporsmaal3Riktig = document.getElementById("sporsmaal3E");
var sporsmaal3Feil = document.getElementById("sporsmaal3UE");
var sporsmaal4Riktig = document.getElementById("sporsmaal4E");
var sporsmaal4Feil = document.getElementById("sporsmaal4UE");

var svar = [0,0,0,0];

function question1(){
    if(sporsmaal1Riktig.checked == true){
      svar[0]++;
    console.log("Funker");
    } else {
    console.log("Feil");
    }
}

function question2(){
    if(sporsmaal2Riktig.checked == true){
      svar[1]++;
        console.log("Funker");
        } else {
        console.log("Feil");
        }
}

function question3(){
    if(sporsmaal3Riktig.checked == true){
      svar[2]++;
        console.log("Funker");
        } else {
        console.log("Feil");
        }
}

function question4(){
    if(sporsmaal4Riktig.checked == true){
      svar[3]++;
        console.log("Funker");
        } else {
        console.log("Feil");
        }
}

function results() {
        console.log(question1())
        console.log(question2())
        console.log(question3())
        console.log(question4())
        console.log(svar[0])

}

function visChart(){
  var xValues = ["Liker du fish and chips", "Liker du grønne epler", "Liker du spicy thai spicy", "Liker du baguetter"];
  var yValues = [svar[0],svar[1],svar[2],svar[3]];
  var barColors = ["red","blue","green","yellow"];
  
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    
    options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  callback: function (value) { if (Number.isInteger(value)) { return value; } },
                  stepSize: 1
              }
          }]
      },
      legend: {display: false},
      title: {
        display: true,
        text: "Chart"
      }
    }
  });
  
}

