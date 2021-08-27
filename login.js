
   function homePage(){
    window.location.href="index.html"
  }


    function checkDetail(){
            let emailLog=document.getElementById("email").value;
            let passwordLog=document.getElementById("password").value;

            let email=localStorage.getItem("email");
            let password=localStorage.getItem("password");
            let mobile=localStorage.getItem("mobile")

            if(emailLog==email&&passwordLog==password){
                alert("You are loggin");
                // window.location.href="index.html";

                
            }
            else{
                alert("Enter correct password and email address");
            }

    }


     function redirectTocart(){
       window.location.href="signup.html";
     }    
        function  home(e){
              e.preventDefault();
            window.location.href="index.html";
        }
