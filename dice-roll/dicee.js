document.querySelector("#roll-button").addEventListener("click", function () {
    var m = Math.floor(Math.random() * 6) + 1;
    var n = Math.floor(Math.random() * 6) + 1;
    var a = document.querySelector(".img1");
    var b = document.querySelector(".img2");
    var link1 = "images/dice" + m + ".png";
    var link2 = "images/dice" + n + ".png";
    a.setAttribute("src", link1);
    b.setAttribute("src", link2);
  
    // Calculate
    var total = m + n;
  
    document.getElementById("total-value").textContent = total;
  
   
    // var audio = new Audio('dice-roll.mp3');
    // audio.play();
});