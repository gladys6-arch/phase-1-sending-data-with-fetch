// Add your code here

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    const p = document.createElement('p');
    // This line must use backticks and include only data.id
    p.innerText = data.id;
    document.body.appendChild(p);
    return data;
  })
  .catch(error => {
    const p = document.createElement('p');
    // This must match the error message exactly ("Unauthorized Access")
    p.innerText = error.message;
    document.body.appendChild(p);
    return error;
  });
}
console.log(submitData);
submitData("Gladys", "gladys@example.com").then(console.log)

