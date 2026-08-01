const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let students = JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(s =>
        (s.email === username || s.roll === username) &&
        s.password === password
    );

    if (student) {

        localStorage.setItem("loggedInStudent", JSON.stringify(student));

        alert("Login Successful");

        window.location.href = "student-dashboard.html";

    } else {

        alert("Invalid Email/Roll Number or Password");

    }

});