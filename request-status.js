const student = JSON.parse(localStorage.getItem("sr_loggedInStudent"));

let requests = JSON.parse(localStorage.getItem("sr_requests")) || [];

const myRequest = requests.find(r => r.roll === student.roll);

if(myRequest){

    const rows = document.querySelectorAll("table tr");

    rows[0].children[1].textContent = myRequest.id;
    rows[1].children[1].textContent = myRequest.field;
    rows[2].children[1].textContent = myRequest.currentValue;
    rows[3].children[1].textContent = myRequest.requestedValue;
    rows[4].children[1].textContent = myRequest.reason;
    rows[5].children[1].textContent = myRequest.status;
    rows[6].children[1].textContent = myRequest.date;

}