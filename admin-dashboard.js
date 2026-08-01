if (localStorage.getItem("adminLoggedIn") !== "true") {

    alert("Please login first.");

    window.location.href = "admin-login.html";

}

const students = JSON.parse(localStorage.getItem("students")) || [];

const requests = JSON.parse(localStorage.getItem("requests")) || [];

const pending = requests.filter(r => r.status === "Pending").length;
const approved = requests.filter(r => r.status === "Approved").length;
const rejected = requests.filter(r => r.status === "Rejected").length;

const cards = document.querySelectorAll(".dashboard-card p");

cards[0].textContent = students.length;
cards[1].textContent = pending;
cards[2].textContent = approved;
cards[3].textContent = rejected;