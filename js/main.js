// Dummy data for  users

let users = [
    { id: 1, name: "John Doe", email: "john@usf.edu", country: "USA", gender: "Male" },
    { id: 2, name: "Jane Smith", email: "jane@usf.edu", country: "USA", gender: "Female" },
    { id: 3, name: "Alice Johnson", email: "alice@usf.edu", country: "France", gender: "Female" },
    { id: 4, name: "Bob Brown", email: "bob@usf.edu", country: "France", gender: "Male" },
    { id: 5, name: "Eva Lee", email: "eva@usf.edu", country: "India", gender: "Female" },
    { id: 6, name: "Mike Clark", email: "mike@usf.edu", country: "India", gender: "Male" },
    { id: 7, name: "Sarah White", email: "sarah@usf.edu", country: "USA", gender: "Female" },
    { id: 8, name: "David Lee", email: "david@usf.edu", country: "India", gender: "Male" },
    { id: 9, name: "Emily Johnson", email: "emily@usf.edu", country: "France", gender: "Female" },
    { id: 10, name: "Michael Smith", email: "michael@usf.edu", country: "USA", gender: "Male" },
    { id: 11, name: "Maria Garcia", email: "maria@usf.edu", country: "India", gender: "Female" },
    { id: 12, name: "Daniel Martinez", email: "daniel@usf.edu", country: "France", gender: "Male" },
    { id: 13, name: "Laura Taylor", email: "laura@usf.edu", country: "USA", gender: "Female" },
    { id: 14, name: "Carlos Hernandez", email: "carlos@usf.edu", country: "India", gender: "Male" },
    { id: 15, name: "Sophia Brown", email: "sophia@usf.edu", country: "France", gender: "Female" },
    { id: 16, name: "William Lee", email: "william@usf.edu", country: "USA", gender: "Male" },
    { id: 17, name: "Olivia Johnson", email: "olivia@usf.edu", country: "India", gender: "Female" },
    { id: 18, name: "James Garcia", email: "james@usf.edu", country: "France", gender: "Male" },
    { id: 19, name: "Isabella Clark", email: "isabella@usf.edu", country: "USA", gender: "Female" },
    { id: 20, name: "Alexander Smith", email: "alexander@usf.edu", country: "India", gender: "Male" }
];


// Function to display users
function displayUsers() {
    const usersTable = document.getElementById('users-table');
    usersTable.innerHTML = ''; // Clear existing data
    const headerRow = usersTable.insertRow();
    const idHeader = document.createElement('th');
    idHeader.textContent = 'Id';
    headerRow.appendChild(idHeader);
    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'StudentName';
    headerRow.appendChild(titleHeader);
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'Email';
    headerRow.appendChild(descriptionHeader);
    const countryHeader = document.createElement('th');
    countryHeader.textContent = 'Country';
    headerRow.appendChild(countryHeader);
    const genderHeader = document.createElement('th');
    genderHeader.textContent = 'Gender';
    headerRow.appendChild(genderHeader);

    users.forEach(user => {
        const row = usersTable.insertRow();
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.country}</td>
            <td>${user.gender}</td>
            <td><button onclick="editUser(${user.id})">Edit</button></td>
            <td><button onclick="deleteUser(${user.id})">Delete</button></td>
           
        `;
    });
}

// Function to add a new user
function addUser() {
    const name = prompt("Enter title for new user:");
    const email = prompt("Enter email for new user:");
    const country = prompt("Enter country for new user:");
    const gender = prompt("Enter gender for new user:");
    if (name && email && country && gender) {
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            country: country,
            gender: gender
        };
        users.push(newUser);
        displayUsers();
    } else {
        alert("Title and description are required for adding a new courses.");
    }
}


// Function to edit a user
function editUser(id) {
    const name = prompt("Enter new name:");
    const email = prompt("Enter new email:");
    const country = prompt("Enter new country:");
    const gender = prompt("Enter new gender:");
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index].name = name;
        users[index].email = email;
        users[index].country = country;
        users[index].gender = gender;

        displayUsers();
    } else {
        alert("User not found!");
    }
}

// Function to delete a user
function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        displayUsers();
    } else {
        alert("User not found!");
    }


}





// Call functions to display initial data
// Call functions to display initial data
document.addEventListener("DOMContentLoaded", function () {
    displayUsers();
    displayCourses();
    displayEnrollments();
});

       



