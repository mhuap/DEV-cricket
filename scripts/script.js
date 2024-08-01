const hero = document.querySelector("header");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");

let about, join, fees, gamesLocation, schedule;

for (let i = 0; i < sections.length; i++) {
  switch (i) {
    case 0:
      about = sections[i];
      about.id = "about";
      break;
    case 1:
      join = sections[i];
      join.id = "join";
      break;
    case 2:
      fees = sections[i];
      fees.id = "fees";
      break;
    case 3:
      gamesLocation = sections[i];
      gamesLocation.id = "location";
      break;
    case 4:
      schedule = sections[i];
      schedule.id = "schedule";
      break;
    default:
      break;
  }
}

const h1 = document.querySelector("h1");
h1.innerHTML = "Welcome to the<br>New York Recreational<br>Cricket League";

const screen = document.createElement("div");
screen.className = "screen";
const gradient = document.createElement("div");
gradient.id = "gradient";
hero.appendChild(screen);
hero.appendChild(gradient);

const abouth2 = about.querySelector("h2");
abouth2.innerHTML = "About<br>the League";

const squareContainer = document.createElement("div");
squareContainer.id = "square-container";
squareContainer.appendChild(join);
squareContainer.appendChild(fees);
squareContainer.appendChild(gamesLocation);
document.body.insertBefore(squareContainer, schedule);

const scheduleContainer = document.createElement("div");
scheduleContainer.id = "schedule-container";
const img = document.createElement("div");
img.id = "img";
const imgScreen = document.createElement("div");
imgScreen.className = "screen";
img.appendChild(imgScreen);
// img.src = "https://images.unsplash.com/photo-1595210382266-2d0077c1f541?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
scheduleContainer.appendChild(img);
scheduleContainer.appendChild(schedule);
document.body.insertBefore(scheduleContainer, footer);

const footerPs = footer.querySelectorAll("p");
const footerDiv = document.createElement("div");
footerPs[0].id = "footer-h2";
footerDiv.appendChild(footerPs[0]);
footerDiv.appendChild(footerPs[1]);
footer.insertBefore(footerDiv, footerPs[2]);