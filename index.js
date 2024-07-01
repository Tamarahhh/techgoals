document.addEventListener("DOMContentLoaded", function () {
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  function updateDateTime() {
    const now = new Date();
    const options = { weekday: "long" };
    const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(now);
    const utcTime = now.toISOString().split("T")[1].split(".")[0];

    currentDay.innerHTML = dayOfWeek;
    currentTimeUTC.innerHTML = utcTime;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
});
