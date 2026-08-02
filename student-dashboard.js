const student = JSON.parse(localStorage.getItem("sr_loggedInStudent"));

if (!student) {
    alert("Please login first.");
    window.location.href = "student-login.html";
}

const heading = document.querySelector(".dashboard h2");

if (heading) {
    heading.textContent = "Welcome, " + student.name;
}