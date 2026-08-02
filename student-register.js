const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if(document.getElementById("password").value !==
       document.getElementById("confirmPassword").value){

        alert("Passwords do not match");
        return;
    }

    const file = document.getElementById("photo").files[0];

    const reader = new FileReader();

    reader.onload = function(){

        const student = {

            name: document.getElementById("name").value,
            roll: document.getElementById("roll").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            gender: document.getElementById("gender").value,
            branch: document.getElementById("branch").value,
            year: document.getElementById("year").value,
            dob: document.getElementById("dob").value,
            address: document.getElementById("address").value,
            password: document.getElementById("password").value,

            photo: reader.result
        };

        let students = JSON.parse(localStorage.getItem("sr_students")) || [];

        students.push(student);

        localStorage.setItem("sr_students", JSON.stringify(students));

        alert("Registration Successful");

        window.location.href="student-login.html";

    };

    if(file){
        reader.readAsDataURL(file);
    }
    else{
        alert("Please upload a photo");
    }

});