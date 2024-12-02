// script.js

const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = {
  about: "Hi, I'm Ian. A software developer with experience in Kotlin, SQLite, and web development!",
  skills: "Languages: HTML, CSS, JavaScript, Kotlin. Tools: Git, GitHub, Jetpack Compose, SQL.",
  projects: "AccountIT: Financial tracking app | Terminal Portfolio: This website!",
  contact: "Email: ian@example.com | GitHub: github.com/ian",
  clear: "clear",
  help: `Available commands:
  about - Learn about Ian
  skills - See Ian's skills
  projects - View Ian's projects
  contact - Get contact info
  clear - Clear the screen
  help - Display this message`
};

// Display a welcome message with ASCII art
function showWelcomeMessage() {
  const welcomeMessage = `
    <div class="ascii-art">
      ____               ______             __  __                
     /  _/___ _____     /_  __/__  _____   / / / /___ _____ ______
     / // __ \`/ __ \\     / / / _ \\/ ___/  / /_/ / __ \`/ __ \`/ ___/
   _/ // /_/ / / / /    / / /  __/ /     / __  / /_/ / /_/ / /    
  /___/\\__,_/_/ /_/    /_/  \\___/_/     /_/ /_/\\__,_/\\__,_/_/     
    </div>
    Welcome to Ian's Portfolio Terminal!

    Type 'about', 'skills', 'projects', or 'contact' to explore.
    Type 'clear' to clear the screen.
    Type 'help' to see all available commands.
  `;
  output.innerHTML += `<div class="result">${welcomeMessage}</div>`;
  output.scrollTop = output.scrollHeight;
}

// Execute commands
function executeCommand(command) {
  if (command === "clear") {
    output.innerHTML = "";
    showWelcomeMessage();
    return;
  }

  const result = commands[command] || `"${command}" is not a valid command. Try: about, skills, projects, contact, clear, help.`;
  output.innerHTML += `<div class="command">visitor@ianterhaar.me:~$ ${command}</div>`;
  output.innerHTML += `<div class="result">${result}</div>`;
  
  // Scroll to the bottom of the output
  output.scrollTop = output.scrollHeight;
}

// Focus the input field on tab focus
window.addEventListener('focus', () => {
  input.focus();
});

// Focus the input field on website click
document.addEventListener('click', () => {
  input.focus();
});

// Event listener for input
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // Get the command without the prompt
    const command = input.value.trim().substring('visitor@ianterhaar.me:~$ '.length);
    
    // Execute the command
    executeCommand(command);

    // Reset the input value with the prompt
    input.value = "visitor@ianterhaar.me:~$ ";
  }
});

// Initialize the terminal with the welcome message
showWelcomeMessage();
input.value = "visitor@ianterhaar.me:~$ ";
input.focus();
