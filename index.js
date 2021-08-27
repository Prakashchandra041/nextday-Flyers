function gotocustom() {
  window.location.href = "customPackage.html";
}

function homePage() {
  window.location.href = "index.html";
}

function redirectLogin() {
  window.location.href = "login.html";
}

var left = 1;
var right = 4;

function show1() {
  document.getElementById("slide1image1").style.display = "inline-block";

  for (i = left; i <= right; i++) {
    document.getElementById("slide1image" + i).style.display = "inline-block";
  }
}
function moveLeft1() {
  if (left <= 6 && right >= 3) {
    document.getElementById("slide1image" + left).style.display = "none";
    left += 1;
    right += 1;
    for (i = left; i <= right; i++) {
      document.getElementById("slide1image" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}

function moveRight1() {
  if (left <= 6 && right >= 4) {
    document.getElementById("slide1image" + right).style.display = "none";
    left -= 1;
    right -= 1;
    for (i = left; i <= right; i++) {
      document.getElementById("slide1image" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}

show1();

var left2 = 1;
var right2 = 4;

function show2() {
  document.getElementById("slide2image1").style.display = "inline-block";

  for (i = left2; i <= right2; i++) {
    document.getElementById("slide2image" + i).style.display = "inline-block";
  }
}
function moveLeft2() {
  if (left2 <= 6 && right2 >= 3) {
    document.getElementById("slide2image" + left2).style.display = "none";
    left2 += 1;
    right2 += 1;
    for (i = left2; i <= right2; i++) {
      document.getElementById("slide2image" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}

function moveRight2() {
  if (left2 <= 6 && right2 >= 4) {
    document.getElementById("slide2image" + right2).style.display = "none";
    left2 -= 1;
    right2 -= 1;
    for (i = left2; i <= right2; i++) {
      document.getElementById("slide2image" + i).style.display = "inline-block";
    }
  } else {
    return;
  }
}

show2();
