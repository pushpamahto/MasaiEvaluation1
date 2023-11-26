document.addEventListener('DOMContentLoaded', function () {
    

    let form=document.querySelector('form');
    let tbody=document.querySelector('tbody');
    let filter=document.querySelector('filter')

  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      let name = document.getElementById('name').value;
      let doctorId = document.getElementById('doctor_id').value;
      let specialization = document.getElementById('specialization').value;
      let experience = document.getElementById('experience').value;
      let email = document.getElementById('email').value;
      let mobile = document.getElementById('mobile').value;
  
      
      let role;
      if (experience > 5) {
        role = 'Senior';
      } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
      } else {
        role = 'Trainee';
      }
  
    
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${doctorId}</td>
        <td>${specialization}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button onclick="deleteRow(this)" style="background-color: red";>Delete</button></td>
      `;
      tbody.appendChild(newRow);
  
      
      form.reset();
    });
  
    filter.addEventListener('change', function () {
      let selectedSpecialization = filter.value.toLowerCase();
      let rows = tbody.getElementsByTagName('tr');
  
      for (let row of rows) {
        const specializationCell = row.getElementsByTagName('td')[2];
        const showRow = selectedSpecialization === '' || specializationCell.textContent.toLowerCase() === selectedSpecialization;
  
        row.style.display = showRow ? '' : 'none';
      }
    });
  });
  
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  