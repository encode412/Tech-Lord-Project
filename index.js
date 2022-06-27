var sidebar = document.querySelector("#sidebar");
var closeIcon = document.querySelector("#close-icon");
var MobileIcon = document.querySelector("#mobile-icon");

// Show Mobile Icon 
function show() {
  sidebar.style.opacity = "100%";
  sidebar.style.top = "0";
}
function hide() {
  sidebar.style.opacity = "0";
  sidebar.style.top = "-100%";
}

closeIcon.addEventListener("click", hide);
MobileIcon.addEventListener("click", show);

// StopWatch

const countdown = () => {
  const countDate = new Date("May 17, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector('.day').innerHTML = textDay;
  document.querySelector('.hour').innerHTML = textHour;
  document.querySelector('.min').innerHTML = textMinute;
  document.querySelector('.second').innerHTML = textSecond;
 
};
setInterval(countdown, 1000);