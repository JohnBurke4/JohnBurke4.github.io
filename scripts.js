var index = 0;
var speed = 70;
var aboutText = "Hi I'm John Burke. Welcome to my website";
var timeout;
var opacity = 0.0;

var cvHtml = `
    <br>
    <p id="fadeIn" style="color: rgba(255, 255, 255, 0);">My CV can be found <a style="text-decoration: none; color: inherit;"href = "John Burke CV.pdf"><u>here</u></a></p>
`;

var aboutHtml = `
  <div id="aboutBox"></div>
`

var workHtml = `
  <h2>Quality Engineer Intern</h2>
  <p>Writing performance tests using Scala and Gatling DSL. Worked closely with Data Analytics to devise a program to simulate a group of users running through the web application.</p>
  <hr>
  <br>
  <h2>PHP web developer</h2>
  <p>Key responsibilities include extending existing web applications, writing unit and e2e tests to prepare for production.</p>
  <hr>
  <br>
`;

var projectsHtml = ``;

function fadeInCV(){
    if (opacity <= 1.0){
      document.getElementById("fadeIn").style.color = "rgba(255, 255, 255," + opacity + ")";
      opacity += 0.1;
      setTimeout(fadeInCV, 70);
    }

}

function addCV(){
  document.getElementById("aboutBox").innerHTML += cvHtml;
  fadeInCV();
}

function typeWriter() {
  if (index < aboutText.length){
    if (index == 2 || index == 18){
      document.getElementById("aboutBox").innerHTML += "<br>";
      speed = 700;
    }
    else {
      document.getElementById("aboutBox").innerHTML += aboutText[index];
      speed = 70;
    }

    index++;
    timeout = setTimeout(typeWriter, speed);
  }
  else{
    setTimeout(addCV, 500);
  }
}

aboutPage()

function aboutPage() {
  document.getElementById("main").innerHTML = aboutHtml;
  index = 0;
  opacity = 0.0;
  timeout = setTimeout(typeWriter, speed);
}

function workPage() {
  clearTimeout(timeout);
  document.getElementById("main").innerHTML = workHtml;
}

document.getElementById("about").addEventListener("click", aboutPage);
document.getElementById("work").addEventListener("click", workPage);
