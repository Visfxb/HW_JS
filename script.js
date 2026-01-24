let auditoriums = JSON.parse(localStorage.getItem('auditoriums')) || [
    { name: 'A-101', seats: 15, faculty: 'Компютерні технології' },
    { name: 'B-202', seats: 20, faculty: 'Економіка' },
    { name: 'C-303', seats: 12, faculty: 'Агрономія' }
];
let editIndex = null;

function render(list = auditoriums) {
    const table = document.getElementById('auditoriumTable');
    table.innerHTML = '';

    list.forEach((a, i) => {
        table.innerHTML += `
            <tr>
                <td>${a.name}</td>
                <td>${a.seats}</td>
                <td>${a.faculty}</td>
                <td>
                    <button onclick="editAuditorium(${i})">Редагувати</button>
                    <button onclick="deleteAuditorium(${i})">Видалити</button>
                </td>
            </tr>
        `;
    });

    saveToStorage();
}

render();


function saveToStorage() {
    localStorage.setItem('auditoriums', JSON.stringify(auditoriums));
}

function filterByFaculty() {
    const faculty = document.getElementById('facultyFilter').value;
    render(auditoriums.filter(a => a.faculty === faculty));
}

function sortBySeats() {
    auditoriums.sort((a, b) => a.seats - b.seats);
    render();
}

function sortByName() {
    auditoriums.sort((a, b) => a.name.localeCompare(b.name));
    render();
}

function saveAuditorium() {
    const name = document.getElementById('name').value;
    const seats = +document.getElementById('seats').value;
    const faculty = document.getElementById('faculty').value;

    if (editIndex !== null) {
        auditoriums[editIndex] = { name, seats, faculty };
        editIndex = null;
    }
    else
        auditoriums.push({ name, seats, faculty });

    render();
}

function editAuditorium(i) {
    const a = auditoriums[i];
    document.getElementById('name').value = a.name;
    document.getElementById('seats').value = a.seats;
    document.getElementById('faculty').value = a.faculty;
    editIndex = i;
}

function deleteAuditorium(i) {
    if (confirm('Видалити аудиторію?')) {
        auditoriums.splice(i, 1);
        render();
    }
}