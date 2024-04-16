// FETCH and READ the people.json disk file

fetch("employeeTD.json")
  .then((response) => response.json())
  .then((data) => {
    // Create a container to hold the employee data
    const container = document.createElement("div");
    container.id = "employee";

    // Loop through an array in the JSON data
    data.forEach((employeeTD) => {
      // Create a new div for each person
      const employeeDiv = document.createElement("div");
      employeeDiv.className = "employeeClass";

      // Add the person's data to the div
      employeeDiv.innerHTML = `
        <h2>${getEmployeeID(employeeTD)}</h2>
        <p> ${getEmployeeName(employeeTD)}<>
        <p>Address: ${getAddress(employeeTD)}</p>
        <p>employee Salary ($): ${getSalary(employeeTD)}</p>
        <p>Phone Number: ${getPhone(employeeTD)}</p>
        <p>Emergency Contact: ${getEmergency(employeeTD)}</p>
        <p>Status: ${getStatus(employeeTD)}</p>
      `;

      // Add the employee's div to the container
      container.appendChild(employeeDiv);

      // Also log the data to the console
      console.log(getEmployeeID(employeeTD));
      console.log(getEmployeeName(employeeTD));
      console.log(getAddress(employeeTD));
      console.log(getSalary(employeeTD));
      console.log(getPhone(employeeTD));
      console.log(getEmergency(employeeTD));
      console.log(getStatus(employeeTD));
    });

    // Add the container to the body of the HTML
    document.body.appendChild(container);
  })
  .catch((error) => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getEmployeeName(employeeTD) {
  return `Employee Name: ${employeeTD.FirstName} ${employeeTD.LastName}`;
}
function getEmployeeID(employeeTD) {
  return `Employee ID: ${employeeTD.employeeID}`;
}

function getAddress(employeeTD) {
  return `${employeeTD.Staddress}, ${employeeTD.city}, ${employeeTD.Province}, ${employeeTD.PostalCode}, ${employeeTD.country}.`;
}

function getStatus(employeeTD) {
  return `${employeeTD.SpouseStatus}`;
}

function getPhone(employeeTD) {
  return `${employeeTD.PhoneNumber}`;
}

function getEmergency(employeeTD) {
  return `${employeeTD.EmergencyContact}`;
}

function getSalary(employeeTD) {
  return `${employeeTD.Salary}`;
}
