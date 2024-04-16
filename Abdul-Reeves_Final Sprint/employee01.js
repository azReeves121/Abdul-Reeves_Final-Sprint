fetch("employeeTD.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((employeeTD) => {
      console.log(getAddress(employeeTD));
      console.log(getHours(employeeTD));
    });
  })
  .catch((error) => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getAddress(employeeTD) {
  return `${employeeTD.Staddress}, ${employeeTD.city}, ${employeeTD.Province}, ${employeeTD.PostalCode}, ${employeeTD.country}.`;
}

function getHours(employeeTD) {
  try {
    if (employeeTD.Hours >= 400000) {
      return `${employeeTD.FirstName} ${employeeTD.LastName} is available for a raise`;
    } else {
      return `${employeeTD.FirstName} ${employeeTD.LastName} Keep working hard`;
    }
  } catch (error) {
    return `An error occurred while processing ${employeeTD.FirstName} ${employeeTD.LastName}: ${error.message}`;
  }
}
