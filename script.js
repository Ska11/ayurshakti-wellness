const calendarButtons = document.querySelectorAll(".calendar-grid button.available");
const calendarSummaryTitle = document.querySelector(".calendar-summary h3");
const calendarSummaryText = document.querySelector(".calendar-summary p:not(.eyebrow)");
const appointmentEmail = "Ayurshaktiwellnesscenter@gmail.com";

const openAppointmentEmail = (appointmentLabel) => {
  const subject = encodeURIComponent("Appointment request for Ayurshakti Wellness");
  const body = encodeURIComponent(`Hello Ayurshakti Wellness,\n\nI would like to request this appointment: ${appointmentLabel}.\n\nName:\nEmail:\nPhone:\n\nThank you.`);
  window.location.href = `mailto:${appointmentEmail}?subject=${subject}&body=${body}`;
};

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
