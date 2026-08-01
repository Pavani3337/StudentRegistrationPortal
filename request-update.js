alert("request-update.js loaded");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const student = JSON.parse(localStorage.getItem("loggedInStudent"));

    const request = {

        id: "REQ" + Date.now(),

        roll: student.roll,

        name: student.name,

        field: document.querySelector("select").value,

        currentValue: document.querySelectorAll("input")[0].value,

        requestedValue: document.querySelectorAll("input")[1].value,

        reason: document.querySelector("textarea").value,

        status: "Pending",

        date: new Date().toLocaleDateString()

    };

    let requests = JSON.parse(localStorage.getItem("requests")) || [];

    requests.push(request);

    localStorage.setItem("requests", JSON.stringify(requests));

    alert("Update Request Submitted Successfully");

    window.location.href = "request-status.html";

});



const student = JSON.parse(localStorage.getItem("loggedInStudent"));

const field = document.getElementById("field");

field.addEventListener("change", function () {

    const current = document.getElementById("currentValue");

    switch(field.value){

        case "Phone Number":
            current.value = student.phone;
            break;

        case "Email":
            current.value = student.email;
            break;

        case "Address":
            current.value = student.address;
            break;

        case "Photo":
            current.value = "Current Photo";
            break;

        default:
            current.value = "";
    }

});