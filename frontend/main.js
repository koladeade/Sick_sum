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

    console.table("Submitting health data:", data);

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


document.getElementById("caretaker").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("Name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const relationship = document.getElementById("relative").value.trim();
  const patientName = document.getElementById("patientName").value.trim(); // Assuming this is a hidden input or similar

  if (!name || !phone || !email || !relationship || !patientName) {
    alert("Please fill in all required fields.");
    return;
  }

  const data = {
    name,
    phone,
    email,
    relationship,
    patientName // 🔁 Replace this with dynamic user name if available
  };
  console.log("Submitting caretaker data:", data);

  try {
    const response = await fetch("http://localhost:3000/api/caretaker/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Caretaker information saved successfully!");
      // Optional: clear form
      e.target.reset();
    } else {
      const err = await response.json();
      console.error("Server error:", err);
      alert(err.message || "Failed to save caretaker.");
    }
  } catch (err) {
    console.error("Network error:", err);
    alert("An error occurred. Please try again.");
  }
});



const container = document.querySelector(".caretaker-info-container");
const openBtn = document.querySelector("#panic-btn");
const closeBtn = document.querySelector(".close-caretaker-info");

openBtn?.addEventListener("click", () => {
  container.classList.remove("hidden");
  setTimeout(() => {
    container.classList.remove("opacity-0");
    container.classList.add("opacity-100");
  }, 10); // slight delay to trigger transition
});

closeBtn?.addEventListener("click", () => {
  container.classList.remove("opacity-100");
  container.classList.add("opacity-0");
  setTimeout(() => {
    container.classList.add("hidden");
  }, 300); // match transition duration
});


 console.log("Frontend main.js loaded successfully");
 