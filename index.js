function eliCode() {
    return `<section>
    <p class="blue">About</p>
    <br>
    <p>I'm a <span class="bold">web developer</span> studying at Thinkful.
    I like building solutions with code, enjoy my coffee with vanilla JS, 
    and fully invest my self in what I do.
    Mindfulness keeps my operating system humming.</p>
    <br>
<p>A while ago, I read an article by an engineering team leader that opened my mind to a new tool for solving problems.
 That new tool is called software. Since then <span class="bold">solving problems with software captures my drive</span>.  
 Then I decided to fully immerse myself in the world of software and become a Full Stack Web Developer. 
 Ever since <span class="bold">I’m looking forward to solving yet another problem</span>.</p>
          <br>
    <p>Let's solve: developerelireiner@gmail.com</p>
</section>`
}

function renderEli() {
    $('nav').on('click', '.eli-reiner', function () {
        $('div').empty().append(eliCode());
    })
}

function contactCode() {
    return `<section class="profile"><img class="profile" src="profile.jpg" alt="An image of Eli Reiner">
        <p>Eli Reiner</p><p class="small">New York, NY</p></section>
        <div class="contact">
    <section class="contact">
        <p>718-702-4006</p>
        <p>Phone</p>
    </section>
    <hr>
    <section class="contact">
        <p>developerelireiner@gmail.com</p>
        <p>Email</p>
    </section>
    <hr>
    </div>
    <section class="github-linkedin">
        <p><a href="https://github.com/elireiner/" target="_blank">GitHub</a></p>
           <p><a href="https://www.linkedin.com/in/eli-reiner-09b873161" target="_blank">LinkedIn</a></p>
    </section>`;
}
function renderContact() {
    $('nav').on('click', '.contact', function () {
        $('div').empty().append(contactCode());
    })
}

function portfolioCode() {
    return `<div class="portfolio">
    <div class="quiz-app">
    <p class="explanation">This app will let you test your knowledge about SpaceX</p>
    <section class="portfolio-links">
        <p><a href="https://elireiner.github.io/quiz-app/" target="_blank">live</a></p>
        <p><a href="https://github.com/elireiner/quiz-app" target="_blank">repo</a></p>
    </section>
</div>

<section class="portfolio">
    <img src="quiz-app.jpg" alt="screenshot of my quiz-app project">
</section>
</div>`;
}

function renderPortfolio() {
    $('nav').on('click', '.portfolio', function () {
        $('div').empty().append(portfolioCode());
    })
}

function launchPortfolio() {
    renderEli();
    renderContact();
    renderPortfolio();
}

$(launchPortfolio);