let students = JSON.parse(localStorage.getItem("sr_students")) || [];

let student = JSON.parse(localStorage.getItem("sr_selectedStudent"));

if (!student) {
    window.location.href = "students.html";
}

document.querySelector('input[type="text"]').value = student.name;
document.querySelectorAll('input[type="text"]')[1].value = student.roll;
document.querySelector('input[type="email"]').value = student.email;
document.querySelectorAll('input[type="text"]')[2].value = student.phone;

document.querySelectorAll("select")[0].value = student.gender;
document.querySelectorAll("select")[1].value = student.branch;
document.querySelectorAll("select")[2].value = student.year;

document.querySelector('input[type="date"]').value = student.dob;
document.querySelector("textarea").value = student.address;

document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    student.name = document.querySelector('input[type="text"]').value;
    student.email = document.querySelector('input[type="email"]').value;
    student.phone = document.querySelectorAll('input[type="text"]')[2].value;

    student.gender = document.querySelectorAll("select")[0].value;
    student.branch = document.querySelectorAll("select")[1].value;
    student.year = document.querySelectorAll("select")[2].value;

    student.dob = document.querySelector('input[type="date"]').value;
    student.address = document.querySelector("textarea").value;

    const index = students.findIndex(s => s.roll === student.roll);

    students[index] = student;

    localStorage.setItem("sr_students", JSON.stringify(students));

    localStorage.setItem("sr_selectedStudent", JSON.stringify(student));

    alert("Student Updated Successfully");

    window.location.href = "students.html";

});