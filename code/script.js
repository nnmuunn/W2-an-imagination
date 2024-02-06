// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const nameForm = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    console.log();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log(showMessage);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  };

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
};

const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value;

  if (name !== "") {
    showMessage(`Hii my name is ${name}`, "user");
    nameInput.value = "";
    setTimeout(() => {
      showFavColor(name);
    }, 500);
  } else {
    showMessage(`Please enter something, to call me by your name`, "bot");
  };
  // showMessage(name, "user");
  // nameInput.value = "";

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  // setTimeout(() => showFoodOptions(name), 1000);
};

nameForm.addEventListener('submit', handleNameInput);

const showFavColor = (name) => {

  showMessage(`Welcome ${name} :) What color do you prefer?`, "bot");
  inputWrapper.innerHTML = `
  <button class="send-btn" id="magenta" type="submit">MAGENTA</button>
  <button class="send-btn" id="purple" type="submit">PURPLE</button>
  <button class="send-btn" id="green" type="submit">GREEN</button>
`
  const colorBtn = inputWrapper.querySelectorAll(".send-btn")
  colorBtn.forEach(button => {
    button.addEventListener("click", (event) => {
      const selectedColor = event.target.id;
      showMessage(`${selectedColor}`, "user");
      showMessage(`What a beatiful color! Imagine a ${selectedColor} sky...`, "bot");
      setTimeout(() => {
        showFavWish(selectedColor);
      }, 1000);
    });
  });
};

const showFavWish = (choice) => {
  if (choice === "magenta") {
    showMessage(`What would you like to turn magenta?`, "bot")
    inputWrapper.innerHTML = `
    <label for="choosen-color">make a whish -></label>
    <select id="choosen-color" class="send-select">
    <option disabled selected value>click</option>
    <option value="snow">snow!</option>
    <option value="water">water!</option>
    <option value="sand">sand!</option>
    </select>
    `
  } else if (choice === "purple") {
    showMessage(`What would you like to turn purple?`, "bot")
    inputWrapper.innerHTML = `
    <label for="choosen-color">make a whish -></label>
    <select id="choosen-color" class="send-select">
    <option disabled selected value>click</option>
    <option value="sky">sky!</option>
    <option value="sun">sun!</option>
    <option value="mountain">mountains!</option>
    </select>
    `
  } else if (choice === "green") {
    showMessage(`What would you like to turn green?`, "bot")
    inputWrapper.innerHTML = `
    <label for="choosen-color">make a whish -></label>
    <select id="choosen-color" class="send-select">
    <option disabled selected value>click</option>
    <option value="fire">fire!</option>
    <option value="banana">bananas!</option>
    <option value="snow">snow!</option>
    </select>
    `
  } else {
    showMessage(`choose one plz`, "bot");
  }
  const selectedWish = inputWrapper.querySelector("#choosen-color");
  selectedWish.addEventListener("change", (event) => {
    const selectedTypeOfWish = event.target.value;
    showMessage(`${selectedTypeOfWish}`, "user");
    showMessage(`What an imagination, ${selectedTypeOfWish} in that color!`, "bot");
    setTimeout(() => {
      selectSeason(selectedTypeOfWish)
    }, 1000);
  });
}



    const selectSeason = () => {
      showMessage(`Now is time to choose your favourite season :)`, "bot");
      inputWrapper.innerHTML = `
      <input type="radio" id="season" name="spring" value="HTML">
      <label for="html">spring</label><br>
      <input type="radio" id="season" name="summer" value="HTML">
      <label for="html">summer</label><br>
      <input type="radio" id="season" name="<autmn>" value="HTML">
      <label for="html">autumn</label><br>
      <input type="radio" id="season" name="winter" value="HTML">
      <label for="html">winter</label><br>
      `;
      const seasonBtn = inputWrapper.querySelectorAll("#season");
      seasonBtn.forEach(button => {
        button.addEventListener("click", (event) => {
          const selectedSeason = event.target.id;
          showMessage(`${selectSeason}`, "user");
          if (selectedSeason === "spring") {
            showMessage(`Beautiful! ${selectSeason}`, "bot")
          } else if (selectedSeason === "summer") {
            showMessage(`Beautiful! ${selectSeason}`, "bot")
          } else if (selectedSeason === "autumn") {
            showMessage(`Beautiful! ${selectSeason}`, "bot")
          } else if (selectedSeason === "winter") {
            showMessage(`Beautiful! ${selectSeason}`, "bot")
          } else {
            showMessage(`choose one plz`, "bot");
          }
          setTimeout(() => {
            showImagination(selectedSeason)
          }, 1000)
        })
      })
    }

    const showImagination = () => {
      showMessage(`Let's put your imagination together!`, "bot")
      inputWrapper.innerHTML = `
  <button class="send-btn" id="no" type="submit">ew no!</button>
  <button class="send-btn" id="yes" type="submit">Yeeeeah!</button>
  `
      const confirmButton = inputWrapper.querySelectorAll(".send-btn")
      confirmButton.forEach(button => {
        button.addEventListener("click", (event) => {
          const choosenButton = event.target.id;
          if (choosenButton === "yes") {
            showMessage(`One day your imaniginations will come true!`, "bot");
            inputWrapper.innerHTML = "";
          } else {
            showMessage(`No worries, one day you'll make sure that you want it to know <3`, "bot")
            inputWrapper.innerHTML = "";
          };
        });
      });
    };
    // Here we invoke the first function to get the chatbot to ask the first question when
    // the website is loaded. Normally we invoke functions like this: greeting()
    // To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
    // and pass along two arguments:
    // 1.) the function we want to delay, and 2.) the delay in milliseconds 
    // This means the greeting function will be called one second after the website is loaded.
    setTimeout(greetUser, 1000)
