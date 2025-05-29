//QUESTION ONE
//You are building a system that sends email reminders to users 5 seconds 
// after they register. Create an async function sendReminder(email) that 
// waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". 
// Simulate sending a reminder to 3 users.

//Creat an asynch function that takes in emailas a parameter
//SetTimeout function that will the waiting for 5 seconds
//Create a function that will simulate the reminders to 3 different users

async function sendReminder(email){
    setTimeout(() => {
        console.log(`Reminder sent to ${email}`);
    }, 5000);
}
function simulateReminders() {
    const emails = ['pauline@gmail.com','emu@gmail.com', 'ruby@gmail.com'];
    for (const email of emails){
        sendReminder(email);
    }
}
simulateReminders();


//QUESTION TWO 
// You want to simulate a login system that tries to log in a user. 
// The first two attempts fail, but the third succeeds. Write a function tryLogin() 
// that uses a counter and Promises. Use setTimeout to simulate a 1-second delay 
// between attempts. Log "Login successful" or "Login failed after 3 attempts" 
// based on whether login succeeds.

//initialize an attempt variable that starts from zero and will be incrementing
//Create a function that will



let attempt = 0;

const tryLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      attempt++;
      if (attempt === 3) {
        resolve("Login successful");
      } else {
        reject("Login failed");
      }
    }, 1000);
  });
};

const simulateLogin = async () => {
  for (let i = 0; i < 3; i++) {
    try {
      const result = await tryLogin();
      console.log(result);
      return; 
    } catch (error) {
      console.log(error);
    }
  }
  console.log("Login failed after 3 attempts");
};

simulateLogin();

// QUESTION THREE 
// Build a countdown timer that counts down from 5 to 0, 
// displaying one number per second using setInterval. When the countdown 
// reaches 0, stop the interval and log "Time's up!".

let count = 5;

const countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log("Time's up!");
  }
}, 1000);

// QUESTION FOUR 
// You are simulating a page that loads data in stages. Create an async
// function called loadPage() that: logs "Loading header...", waits 1 second;
// logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; 
// and finally logs "Page fully loaded". Use setTimeout inside Promises and await them in sequence.

const wait = (mseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
     
    }, mseconds);
  });
};

const loadPage = async () => {
  try {
    console.log("Loading header...");
    await wait(1000);

    console.log("Loading content...");
    await wait(2000);

    console.log("Loading footer...");
    await wait(1000);

    console.log("Page fully loaded");
  } catch (error) {
    console.log({ error });
  }
};

loadPage();

//QUESTION FIVE 
// You are simulating fetching stock prices with delays. Write a function 
// fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the 
// message "Price for [symbol] retrieved". Use async/await to call it for two different 
// stocks ("AAPL" and "GOOG") and log the messages in order. 

const fetchPrice = (symbol) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Price for ${symbol} retrieved`);
    }, 2000);
  });
};

const getPrices = async () => {
  try {
    const priceAAPL = await fetchPrice("AAPL");
    console.log(priceAAPL);

    const priceGOOG = await fetchPrice("GOOG");
    console.log(priceGOOG);
  } catch (error) {
    console.log({ error });
  }
};

getPrices();



