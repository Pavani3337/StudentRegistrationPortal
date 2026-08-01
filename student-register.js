const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

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

        password: document.getElementById("password").value

    };

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Successful");

    window.location.href = "student-login.html";

});