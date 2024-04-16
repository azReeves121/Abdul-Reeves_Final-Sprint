// Fetch the JSON data using Fetch API

fetch("employeeTD.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((employeeTD) => {
      console.log(getAddress(employeeTD));
    });
  })

  .catch((error) => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getAddress(employeeTD) {
  return `${employeeTD.Staddress}, ${employeeTD.city},${employeeTD.Province}, ${employeeTD.PostalCode}, ${employeeTD.country}.`;
}
