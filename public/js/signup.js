const loginForm = document.querySelector("#signup-form");


loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const userObj={
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
        username:document.querySelector("#username").value,
    }
    fetch("/api/user/signup",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.href = "/profile"
        } else {
            alert("trumpet sound")
        }
    })
})