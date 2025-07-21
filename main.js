function handleSave() {
  // Get textarea input
  const triggers = document.querySelector('.triggers').value;

  // Get selected sickle cell type
  const sickleCell = document.querySelector('input[name="sickle-cell"]:checked')?.value || "";

  // Get selected frequency
  const frequency = document.querySelector('input[name="frequency"]:checked')?.value || "";

  // Combine into a JSON object
  const data = {
    triggers,
    sickleCell,
    frequency
  };

  console.log("Collected data:", data);

  // Optional: send to server
  fetch('https://your-server.com/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (!res.ok) throw new Error("Server error");
    return res.json();
  })
  .then(response => {
    alert("Data saved successfully!");
    console.log("Server response:", response);
  })
  .catch(err => {
    alert("Failed to save data.");
    console.error(err);
  });
}