const e1 = document.getElementById("e1");
const e2e1 = document.getElementById("e2e1");
const e2e2 = document.getElementById("e2e2");
const e2e3 = document.getElementById("e2e3");
const e2e4 = document.getElementById("e2e4");
const e2e5 = document.getElementById("e2e5");
const e4 = document.getElementById("e4");
const e5e1 = document.getElementById("e5e1");
const e5e2 = document.getElementById("e5e2");
const e5e3c = document.getElementById("e5e3c");
const e5e4c = document.getElementById("e5e4c");

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

e1.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (e1.value == "운지") {
      window.location.assign(
        "https://i1.sndcdn.com/artworks-ag2vNF1DQMy89Fky-zFgCbg-t500x500.jpg"
      );
    }
  }
});

e5e2.addEventListener("click", () => {
  e5e4c.textContent = "SENT";
  setTimeout(function () {
    e5e4c.textContent = "";
  }, 300);
});

function update() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const day = days[now.getDay()];
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  e2e1.textContent = `${year}.`;
  e2e2.textContent = `${year} *`;
  e2e3.textContent = `${month}${date}.`;
  e2e4.textContent = `${month}${date} ,${day}.`;
  e2e5.textContent = `${month}${date} ,${day} *`;
  e4.textContent = `${hour} : ${minute} : ${second}`;

  const next = 1000 - now.getMilliseconds();

  setTimeout(update, next);
}

update();
