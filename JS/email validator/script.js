let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let conpass = document.querySelector("#confirmPassword");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";
  document.querySelector("#confirmPasswordError").textContent = "";


  let isValid = true;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  if(!emailans){
    document.querySelector("#emailError").textContent = "Email is incorrect";
    isValid = false;
  }

  if(!passwordans){
    document.querySelector("#passwordError").textContent = "Password is invalid";
    isValid = false;
  }

  let conpassans = password.value === conpass.value;

  if (!conpassans) {
     document.querySelector("#confirmPasswordError").textContent =
        "Passwords do not match";
        isValid = false;
  }
  if(isValid){
    document.querySelector("#successMessage").textContent = "Account Created";
  }
});
