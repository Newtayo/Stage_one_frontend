const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day = new Date();



const data = {
    "image":"https://ca.slack-edge.com/T05FFAA91JP-U05R8FKBVSR-0084b66cb1b4-512",
    "today": day.getUTCDay(),
    "name" : "Akande Abdulwasiu",
    "Track" : "Frontend Development",
    "github" : "https://github.com/Newtayo/Stage_one_frontend"
}

const main = document.querySelector('.main')
 main.innerHTML = 
`<img id="placeholder" src=${data.image} alt="Display Picture"  data-testid="slackDisplayImage" />
<div class="details">
<h2 data-testid="slackUserName">${data.name} </h2>
<p data-testid="currentDayOfTheWeek"> ${weekDays[data.today]}</p>
<p  data-testid="currentUTCTime"></p> 
<p data-testid="myTrack">${data.Track}</p>
<a href = ${data.github} alt ="Link to Github"  data-testid="githubURL"> Github Link </a>
</div>
`
  const utcTime = document.querySelector('[data-testid="currentUTCTime"]')
  document.addEventListener("DOMContentLoaded", function () {
    setInterval(function () {
        let currentUTC = new Date().toUTCString();
        utcTime.textContent = currentUTC;
      }, 1000)
  });
  
 


