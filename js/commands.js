var youtube = "https://www.youtube.com/@ianterhaar";
var password = "Ian";
var linkedin = "https://www.linkedin.com/in/iterhaar/";
var instagram = "https://www.instagram.com/ian.th_xd/";
var facebook = "https://www.facebook.com/ianterhaar03";
var github = "https://github.com/IanTerHaar";
var email = 'mailto:ian.terhaar1004@gmail.com';
var repo = "https://github.com/IanTerHaar/ianterhaar.me"

whois = [
  "<br>",
  "Hi, I’m Ian Ter Haar, a recent graduate from Eduvos University with a Bachelor’s degree in Information Technology.",
  "I’m an aspiring software engineer with a passion for crafting innovative solutions and building efficient, user-friendly applications.",
  "during my studies, I had the privilege of leading a team project called AccountIT,", "a financial management application designed to help users track budgets and savings goals.",
  "as the group leader, I managed version control through GitHub and took charge of developing the database backend using SQLite.",
  "this experience not only honed my technical skills but also strengthened my ability to collaborate and lead a team effectively.",
  "I’m deeply enthusiastic about learning and growing as a developer.",
  "whether it’s tackling complex coding challenges or exploring new technologies, I thrive on opportunities", "that push me to think critically and creatively.",
  "I’m currently seeking a role where I can contribute to meaningful projects, continue refining my coding abilities,", "and make a positive impact through technology.",
  "let’s create something awesome together!",
  "<br>"
];

social = [
  "<br>",
  '<a href="' + github + '" target="_blank"><span>GitHub</span></a>',
  '<a href="' + linkedin + '" target="_blank"><span>LinkedIn</span></a>',
  '<a href="' + instagram + '" target="_blank"><span>Instagram</span></a>',
  '<a href="' + facebook + '" target="_blank"><span>Facebook</span></a>',
  '<a href="' + youtube + '" target="_blank"><span>Youtube</span></a>',
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

projects = [
  "<br>",
  "<a href='https://github.com/IanTerHaar/AccountIT' target='_blank'><span>AccountIT</span></a>     A financial management application",
  "<a href='https://github.com/IanTerHaar/EcoGrow' target='_blank'><span>EcoGrow</span></a>       A Third year e-commerce website",
  "<a href='https://github.com/IanTerHaar/hello.' target='_blank'><span>hello.</span></a>        An Online messaging app built using Java WebSocket Server",
  "<br>"
];

docs = [
  "<br>",
  (() => {
    const path = "docs/Ian Ter Haar CV.pdf";
    const fileName = path.split('/').pop();
    return `<a href="${path}" target="_blank">${fileName}</a>`;
  })(),
  (() => {
    const path = "docs/Ian Ter Haar Academic Transcript.pdf";
    const fileName = path.split('/').pop();
    return `<a href="${path}" target="_blank">${fileName}</a>`;
  })(),
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who is Ian?',
  '<span class="command">social</span>         Display my social networks',
  '<span class="command">email</span>          Reach me via email',
  '<span class="command">projects</span>       View my coding projects',
  '<span class="command">docs</span>           View my CV and Transcript',
  '<span class="command">repo</span>           Visit the GitHub Repository',
  '<span class="command">secret</span>         Find the password',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           I am sure you know what it does',
  '<span class="command">clear</span>          Clear the terminal',
  '<span class="command">banner</span>         Display the header',
  
  "<br>",
];

banner = [
  '<span class="index">Ian Ter Haar (ITH) definitely not a company. All rights reserved.</span>',
  `<pre style="text-align: left; font-family: monospace;">
    ____               ______             __  __                
   /  _/___ _____     /_  __/__  _____   / / / /___ _____ ______
   / // __ \`/ __ \\     / / / _ \\/ ___/  / /_/ / __ \`/ __ \`/ ___/
 _/ // /_/ / / / /    / / /  __/ /     / __  / /_/ / /_/ / /    
/___/\\__,_/_/ /_/    /_/  \\___/_/     /_/ /_/\\__,_/\\__,_/_/     
  </pre>`,
  '<span class="color2">Welcome to my portfolio terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];
