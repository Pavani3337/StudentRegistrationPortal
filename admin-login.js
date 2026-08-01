const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (username === "admin" && password === "admin123") {

        alert("Admin Login Successful");

        localStorage.setItem("adminLoggedIn", "true");

        window.location.href = "admin-dashboard.html";

    } else {

        alert("Invalid Username or Password");

    }

});