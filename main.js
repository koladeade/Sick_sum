document
  .getElementById("personal")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;

    // Collect checkbox values
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

    console.log("Submitting health data:", data);

    try {
      const response = await fetch("http://localhost:3000/api/health/health-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", // ✅ Ensures cookie gets sent
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Data saved successfully!");
      } else {
        const err = await response.json();
        console.error("Server responded with error:", err);
        alert("Failed to save data.");
      }
    } catch (err) {
      console.error("Network or server error:", err);
      alert("An error occurred.");
    }
  });
