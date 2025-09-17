function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.textContent = "Please enter your full date and time of birth.";
    return;
  }

  const dob = new Date(dobInput);
  const now = new Date();

  if (dob > now) {
    result.textContent = "Date of birth cannot be in the future!";
    return;
  }

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  let hours = now.getHours() - dob.getHours();

  // Adjust for negative values
  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  result.innerHTML = `
    <p><strong>Years:</strong> ${years}</p>
    <p><strong>Months:</strong> ${months}</p>
    <p><strong>Days:</strong> ${days}</p>
    <p><strong>Hours:</strong> ${hours}</p>
  `;
}
