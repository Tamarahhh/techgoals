document.addEventListener("DOMContentLoaded", function () {
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  function updateDateTime() {
    const now = new Date();
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    const utcDateString = now.toUTCString().split(" ").slice(1, 5).join(" ");

    currentDay.innerHTML = dayOfWeek;
    currentTimeUTC.innerHTML = utcDateString + " UTC";
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
});
