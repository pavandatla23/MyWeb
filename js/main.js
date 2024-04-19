// Dummy data for courses, users, and enrollments
let courses = [
    { id: 1, title: "Mathematics", description: "Learn basic math concepts", professor: "Smith" },
    { id: 2, title: "Physics", description: "Explore the world of physics", professor: "Johnson" },
    { id: 3, title: "Programming", description: "Introduction to programming", professor: "Williams" },
    { id: 4, title: "Biology", description: "Study of living organisms", professor: "Brown" },
    { id: 5, title: "Chemistry", description: "Explore the composition of substances", professor: "Taylor" },
    { id: 6, title: "History", description: "Understanding past events", professor: "Anderson" },
    { id: 7, title: "Literature", description: "Explore literary works", professor: "Martinez" },
    { id: 8, title: "Geography", description: "Study of the Earth's surface", professor: "Garcia" },
    { id: 9, title: "Computer Science", description: "Introduction to computer programming", professor: "Hernandez" },
    { id: 10, title: "Art", description: "Exploration of artistic expression", professor: "Young" }
];




// Function to display courses
function displayCourses() {
    const coursesTable = document.getElementById('courses-table');
    coursesTable.innerHTML = ''; // Clear existing data
    const headerRow = coursesTable.insertRow();
    const idHeader = document.createElement('th');
    idHeader.textContent = 'Id';
    headerRow.appendChild(idHeader);
    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'CourseName';
    headerRow.appendChild(titleHeader);
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'Description';
    headerRow.appendChild(descriptionHeader);
    const professorHeader = document.createElement('th');
    professorHeader.textContent = 'Professor';
    headerRow.appendChild(professorHeader);
    courses.forEach(course => {
        const row = coursesTable.insertRow();
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.title}</td>
            <td>${course.description}</td>
            <td>${course.professor}</td>
             <td><button onclick="editCourse(${course.id})">Edit</button></td>
            <td><button onclick="deleteCourse(${course.id})">Delete</button></td>
        `;
    });
}


// Function to add a new course
function addCourse() {
    const title = prompt("Enter title for new course:");
    const description = prompt("Enter description for new course:");
    const professor = prompt("Enter professor name for new course:");
    if (title && description && professor) {
        const newCourse = {
            id: courses.length + 1,
            title: title,
            description: description,
            professor: professor
        };
        courses.push(newCourse);
        displayCourses();
    } else {
        alert("Title and description are required for adding a new course.");
    }
}

// Function to edit a course
function editCourse(id) {
    const course = courses.find(course => course.id === id);
    if (course) {
        const newTitle = prompt("Enter new title:", course.title);
        const newDescription = prompt("Enter new description:", course.description);
        const newProfessor = prompt("Enter new professor name:", course.professor);
        if (newTitle !== null && newDescription !== null && newProfessor !== null) {
            course.title = newTitle;
            course.description = newDescription;
            course.professor = newProfessor
            displayCourses();
        }
    } else {
        alert("Course not found!");
    }
}
// Function to delete a course
function deleteCourse(id) {
    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses.splice(index, 1);
        displayCourses();
    } else {
        alert("Course not found!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    /*displayUsers();*/
    displayCourses();
    /*displayEnrollments();*/
});

// JavaScript for adding active class to clicked navigation item
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});





