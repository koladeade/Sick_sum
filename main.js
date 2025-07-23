document
  .getElementById("personal")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Collect checkbox values (multiple with same name)
    const triggers = [];
    form.querySelectorAll('input[name="crisisTriggers"]:checked').forEach((el) => {
      triggers.push(el.value);
    });

    const data = {
      crisisTriggers: triggers,
      sickleCellType:
        form.querySelector('input[name="sickleType"]:checked')?.value || null,
      crisisFrequency:
        form.querySelector('input[name="frequency"]:checked')?.value || null,
    };
    console.log(data);

    const token = localStorage.getItem('auth_token');
    try {
      const response = await fetch("http://localhost:3000/api/health/health-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        'Authorization': `Bearer ${token}`,
        credentials: 'include',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Data saved successfully!");
      } else {
        alert("Failed to save data.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred.");
    }
  });
