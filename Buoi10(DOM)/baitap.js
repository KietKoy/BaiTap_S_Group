const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const salaryInput = document.getElementById('salary-input');
const cityInput = document.getElementById('city-input');
const idInput = document.getElementById('id-input');
const btnSubmit = document.getElementById('btn-submit');
const btnEdit = document.getElementById('btn-edit');
const render = document.getElementById('render');
let arr = [{
    id: 1,
    fullName: "Truong Tuan Kiet",
    emailId: "dolam3131@gmail.com",
    salary: 1000,
    city: "Quang Nam"
},
{
    id: 2,
    fullName: "Truong Tuan Kiet",
    emailId: "dolam3131@gmail.com",
    salary: 1000,
    city: "Quang Nam"
}
]
const resetInput = () => {
    nameInput.value = "";
    emailInput.value = "";
    salaryInput.value = "";
    cityInput.value = "";
}
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const salary = salaryInput.value;
    const city = cityInput.value;
    const id = Date.now();
    arr.push({id: id, fullName: name, emailId: email, salary: salary, city: city});
    render.innerHTML = "";
    render.innerHTML += '<tr><th>Full Name</th><th>Email</th><th>Salary</th><th>City</th><th>Action</th></tr>';
    arr.forEach((item) => {
        render.innerHTML += `<tr><td>${item.fullName}</td><td>${item.emailId}</td><td>${item.salary}</td><td>${item.city}</td><td><a href="#" onclick="Edit(${item.id})">Edit</a> <a href="#" onclick=Delete(${item.id})>Delete</a></td></tr>`;
    })
    resetInput();
})
btnEdit.addEventListener('click', (e) => {
    e.preventDefault();
    const id = idInput.value;
    console.log(id);
    const name = nameInput.value;
    console.log(name);
    const email = emailInput.value;
    const salary = salaryInput.value;
    const city = cityInput.value;
    const objIndex = arr.findIndex(item => item.id == id);
    console.log(objIndex);
    arr[objIndex].fullName = name;
    arr[objIndex].emailId = email;
    arr[objIndex].salary = salary;
    arr[objIndex].city = city;
    console.log(arr[objIndex]);
    render.innerHTML = "";
    render.innerHTML += '<tr><th>Full Name</th><th>Email</th><th>Salary</th><th>City</th><th>Action</th></tr>';
    arr.forEach((item) => {
        render.innerHTML += `<tr><td>${item.fullName}</td><td>${item.emailId}</td><td>${item.salary}</td><td>${item.city}</td><td><a href="#" onclick="Edit(${item.id})">Edit</a> <a href="#" onclick=Delete(${item.id})>Delete</a></td></tr>`;
    })
})
function Delete(id) {
    console.log(id);
    arr = arr.filter(item =>  item.id != id)
    console.log(arr);
    render.innerHTML = "";
    render.innerHTML += '<tr><th>Full Name</th><th>Email</th><th>Salary</th><th>City</th><th>Action</th></tr>';
    arr.forEach((item) => {
        render.innerHTML += `<tr><td>${item.fullName}</td><td>${item.emailId}</td><td>${item.salary}</td><td>${item.city}</td><td><a href="#" onclick="Edit(${item.id})">Edit</a> <a href="#" onclick=Delete(${item.id})>Delete</a></td></tr>`;
    })
}
function Edit(id) {
    const item = arr.find(item => item.id === id);
    idInput.value = item.id;
    console.log(item);
    nameInput.value = item.fullName;
    emailInput.value = item.emailId;
    salaryInput.value = item.salary;
    cityInput.value = item.city;
    btnSubmit.style.display = 'none';
    btnEdit.style.display = 'block';
}