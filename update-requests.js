if (localStorage.getItem("sr_adminLoggedIn") !== "true") {
    alert("Please login first");
    window.location.href = "admin-login.html";
}

let requests = JSON.parse(localStorage.getItem("sr_requests")) || [];
let students = JSON.parse(localStorage.getItem("sr_students")) || [];

const table = document.getElementById("requestTable");

function loadRequests(){

    table.innerHTML = "";

    requests.forEach((request,index)=>{

        table.innerHTML += `

        <tr>

        <td>${request.id}</td>

        <td>${request.roll}</td>

        <td>${request.name}</td>

        <td>${request.field}</td>

        <td>${request.currentValue}</td>

        <td>${request.requestedValue}</td>

        <td>${request.reason}</td>

        <td>${request.status}</td>

        <td>

        ${
            request.status==="Pending"

            ?

            `<button onclick="approve(${index})">Approve</button>

             <button onclick="reject(${index})">Reject</button>`

            :

            "-"

        }

        </td>

        </tr>

        `;

    });

}

loadRequests();

function approve(index){

    requests[index].status="Approved";

    const student = students.find(s=>s.roll===requests[index].roll);

    if(student){

        switch(requests[index].field){

            case "Phone Number":
                student.phone=requests[index].requestedValue;
                break;

            case "Email":
                student.email=requests[index].requestedValue;
                break;

            case "Address":
                student.address=requests[index].requestedValue;
                break;

        }

    }

    localStorage.setItem("sr_students",JSON.stringify(students));

    const loggedInStudent = JSON.parse(localStorage.getItem("sr_loggedInStudent"));

if (loggedInStudent && loggedInStudent.roll === student.roll) {
    localStorage.setItem("sr_loggedInStudent", JSON.stringify(student));
}


    localStorage.setItem("sr_requests",JSON.stringify(requests));

    alert("Request Approved");

    loadRequests();

}

function reject(index){

    requests[index].status="Rejected";

    localStorage.setItem("sr_requests",JSON.stringify(requests));

    alert("Request Rejected");

    loadRequests();

}