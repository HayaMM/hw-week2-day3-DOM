document.getElementById("half-button").addEventListener("click", function () {
    var input = document.getElementById("half-input").value;
    var result = (input / 2);
    console.log("Half of  " + input + " = " + result);
    document.getElementById("solution").innerHTML = result;
});

document.getElementById("percent-button").addEventListener("click", function () {
    var input1 = document.getElementById("percent1-input").value;
    var input2 = document.getElementById("percent2-input").value;
    var resultPercent = ((input1 / 100) * input2);
    console.log("percent of " + input1 + " and " + input2 + " = " + resultPercent);
    document.getElementById("solution").innerHTML = resultPercent;
});


document.getElementById("area-button").addEventListener("click", function () {
    var inputar = document.getElementById("area-input").value;
    var areares = ((Math.pow(inputar, 2)) * 3.14);
    console.log("area of " + inputar + "  = " + areares);
    document.getElementById("solution").innerHTML = areares;

}); 
