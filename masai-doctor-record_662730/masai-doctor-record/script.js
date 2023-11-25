document.addEventListener('DOMContentLoaded', function () {
    const doctorForm = document.getElementById('doctorForm');
    const doctorTableBody = document.getElementById('doctorTableBody');
    const filterSelect = document.getElementById('filter');
  
    doctorForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const doctorId = document.getElementById('doctor_id').value;
      const specialization = document.getElementById('specialization').value;
      const experience = document.getElementById('experience').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('mobile').value;
  
      // Calculate role based on experience
      let role;
      if (experience > 5) {
        role = 'Senior';
      } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
      } else {
        role = 'Trainee';
      }
  
      // Create a new row and append it to the table
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${doctorId}</td>
        <td>${specialization}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;
      doctorTableBody.appendChild(newRow);
  
      // Clear the form fields
      doctorForm.reset();
    });
  
    filterSelect.addEventListener('change', function () {
      const selectedSpecialization = filterSelect.value.toLowerCase();
      const rows = doctorTableBody.getElementsByTagName('tr');
  
      for (const row of rows) {
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
  