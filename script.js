const dateButtons = document.querySelectorAll(".date-grid button");
const holdButton = document.querySelector("#holdButton");
const bookingNote = document.querySelector(".booking-note");
const calendarButtons = document.querySelectorAll(".calendar-grid button.available");
const calendarSummaryTitle = document.querySelector(".calendar-summary h3");
const calendarSummaryText = document.querySelector(".calendar-summary p:not(.eyebrow)");
const appointmentEmail = "Ayurshaktiwellnesscenter@gmail.com";

const openAppointmentEmail = (appointmentLabel) => {
  const subject = encodeURIComponent("Appointment request for Ayurshakti Wellness");
  const body = encodeURIComponent(`Hello Ayurshakti Wellness,\n\nI would like to request this appointment: ${appointmentLabel}.\n\nName:\nEmail:\nPhone:\n\nThank you.`);
  window.location.href = `mailto:${appointmentEmail}?subject=${subject}&body=${body}`;
};

dateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dateButtons.forEach((item) => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    bookingNote.textContent = "";
    const selectedDay = button.childNodes[0].textContent.trim();
    const selectedHour = button.querySelector("strong").textContent.trim();
    openAppointmentEmail(`${selectedDay} ${selectedHour}`);
  });
});

holdButton.addEventListener("click", () => {
  const selected = document.querySelector(".date-grid button.selected");
  const selectedDay = selected ? selected.childNodes[0].textContent.trim() : "your";
  const selectedHour = selected ? selected.querySelector("strong").textContent.trim() : "selected time";
  holdButton.textContent = "Appointment held";
  bookingNote.textContent = `${selectedDay} ${selectedHour} is held for 10 minutes.`;
});

calendarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calendarButtons.forEach((item) => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    calendarSummaryTitle.textContent = `June ${button.textContent.trim()}, 2026`;
    calendarSummaryText.textContent = "Virtual consultations are available at 9:30 AM, 2:00 PM, and 4:15 PM.";
    openAppointmentEmail(`June ${button.textContent.trim()}, 2026 virtual consultation`);
  });
});
