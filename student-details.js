const student = JSON.parse(localStorage.getItem("sr_selectedStudent"));

if (!student) {
    window.location.href = "students.html";
}

document.querySelector("h2").textContent = student.name;

const rows = document.querySelectorAll("table tr");

rows[0].children[1].textContent = student.roll;
rows[1].children[1].textContent = student.email;
rows[2].children[1].textContent = student.phone;
rows[3].children[1].textContent = student.gender;
rows[4].children[1].textContent = student.branch;
rows[5].children[1].textContent = student.year;
rows[6].children[1].textContent = student.dob;
rows[7].children[1].textContent = student.address;