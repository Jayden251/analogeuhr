const clockContainer = document.querySelector('.outer-clock-face');

// Add numbers to the clock face
function addClockNumbers() {
  const numbers = [
    { number: 12, angle: 0 },
    { number: 1, angle: 30 },
    { number: 2, angle: 60 },
    { number: 3, angle: 90 },
    { number: 4, angle: 120 },
    { number: 5, angle: 150 },
    { number: 6, angle: 180 },
    { number: 7, angle: 210 },
    { number: 8, angle: 240 },
    { number: 9, angle: 270 },
    { number: 10, angle: 300 },
    { number: 11, angle: 330 },
  ];
 
  numbers.forEach(({ number, angle }) => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('clock-number');
    numberElement.textContent = number;

    const x = 50 + 45 * Math.cos((angle - 90) * (Math.PI / 180));
    const y = 50 + 45 * Math.sin((angle - 90) * (Math.PI / 180));

    numberElement.style.left = `${x}%`;
    numberElement.style.top = `${y}%`;

    clockContainer.appendChild(numberElement);
  });
}

// Select hands
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Update the clock hands
function setClock() {
  const now = new Date();

  // Adjust to Zurich time (CET/CEST)
  const options = { timeZone: "Europe/Zurich" };
  const timeInZurich = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Zurich" })
  );

  const seconds = timeInZurich.getSeconds();
  const minutes = timeInZurich.getMinutes();
  const hours = timeInZurich.getHours();

  const secondsDegrees = ((seconds / 60) * 360) - 90;
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) - 90;
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) - 90;

  secondHand.style.transition = seconds === 0 ? 'none' : 'all 0.05s cubic-bezier(0.4, 2.3, 0.3, 1)';
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Initialize clock
addClockNumbers();
setInterval(setClock, 1000);
setClock();

// Create and style the date container
const dateContainer = document.createElement('div');
dateContainer.style.position = 'absolute';
dateContainer.style.bottom = '10%';
dateContainer.style.left = '50%';
dateContainer.style.transform = 'translateX(-50%)';
dateContainer.style.fontSize = '3vmin';
dateContainer.style.fontWeight = 'bold';
dateContainer.style.color = '#333';
dateContainer.style.textAlign = 'center';
dateContainer.style.background = 'white';
dateContainer.style.padding = '0.5em 1em';
dateContainer.style.borderRadius = '5px';
dateContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
document.querySelector('.outer-clock-face').appendChild(dateContainer);

// Update the date container with the current date
function updateDate() {
  const now = new Date();
  const options = { timeZone: "Europe/Zurich" };
  const timeInZurich = new Date(
    now.toLocaleString("en-US", options)
  );
  const day = timeInZurich.getDate();
  dateContainer.textContent = day;
}

// Initialize and update the date every 1 hour
updateDate(); 
setInterval(updateDate, 3600000);
