if (localStorage.getItem("sr_adminLoggedIn") !== "true") {
    alert("Please login first.");
    window.location.href = "admin-login.html";
}

let students = JSON.parse(localStorage.getItem("sr_students")) || [];

const table = document.getElementById("studentTable");

function displayStudents(data){

    table.innerHTML = "";

    data.forEach((student,index)=>{

        table.innerHTML += `

        <tr>

            <td>
                <img src="default-profile.png" class="student-photo">
            </td>

            <td>${student.roll}</td>

            <td>${student.name}</td>

            <td>${student.branch}</td>

            <td>${student.year}</td>

            <td>

                <button onclick="viewStudent(${index})">View</button>

                <button onclick="editStudent(${index})">Edit</button>

                <button onclick="deleteStudent(${index})">Delete</button>

            </td>

        </tr>

        `;

    });

}

displayStudents(students);

document.getElementById("search").addEventListener("keyup",function(){

    const value = this.value.toLowerCase();

    const filtered = students.filter(student=>

        student.name.toLowerCase().includes(value) ||

        student.roll.toLowerCase().includes(value)

    );

    displayStudents(filtered);

});

function viewStudent(index){

    localStorage.setItem("sr_selectedStudent",JSON.stringify(students[index]));

    window.location.href="student-details.html";

}

function editStudent(index){

    localStorage.setItem("sr_selectedStudent",JSON.stringify(students[index]));

    window.location.href="edit-student.html";

}

function deleteStudent(index){

    if(confirm("Delete this student?")){

        students.splice(index,1);

        localStorage.setItem("sr_students",JSON.stringify(students));

        displayStudents(students);

    }

}