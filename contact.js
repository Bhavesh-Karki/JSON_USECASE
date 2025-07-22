const data = [];

function saveData() {
  const entry = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  if (!entry.name || !entry.email) {
    alert("Name and Email are required!");
    return;
  }

  data.push(entry);
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
