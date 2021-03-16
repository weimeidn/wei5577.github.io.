    const s = window.screen;
    const w = (q.width = s.width);
    const h = (q.height = s.height);
    const ctx = q.getContext("2d");
    
    const p = Array(Math.floor(w / 10) + 1).fill(0);
    
    const random = (items) => items[Math.floor(Math.random() * items.length)];
    
    const hex = "0123456789IGSINTERNET<>+=&#".split("");
    
    setInterval(() => {
      ctx.fillStyle = "rgba(0,0,0,.01)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#0f0";
      p.map((v, i) => {
        ctx.fillText(random(hex), i * 12, v);
        p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 12;
      });
    }, 1000 / 25);

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
 
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 
  function updateClock() {
    var t = getTimeRemaining(endtime);
 
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
 
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
 
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
 
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);



