function storeValues() {
  // e.preventDefault()
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let mobile = document.getElementById("mobile").value;

  if (email.length == 0) {
    alert("Please fillin your email");
  } else if (password.length == 0) {
    alert("Please fill in your password");
  } else if (mobile.length == 0) {
    alert("Please fill in your Mobile Number");
  } else if (mobile.length == 0 && email.length == 0 && password.length == 0) {
    alert("Please fill in your all Informations");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("mobile", mobile);
    window.location.href = "login.html";
    alert("Your account has been created");
  }

  console.log(email, password, mobile);
}

function home(e) {
  e.preventDefault();
  window.location.href = "login.html";
}
