function eliCode() {
    return `<section class="header index dark">
<p>Hi, from Eli Reiner</p></section>
<section class="bio index light">
<p>bio</p></section>
<section class="connect index dark">
<p>Let's solve: developerelireiner@gmail.com</p></section>`
}

function renderEli() {
    $('nav').on('click', '.eli-reiner', function () {
        $('div').empty().append(eliCode());
    })
}

function contactCode() {
    return `<img src="test-profile.jpg" alt="An image of Eli Reiner">
<section class="name contact light"><p>Eli Reiner</p>
</section><section class="number contact dark"><p>Phone: 718-702-4006</p>
</section><section class="email contact light"><p>Email: developerelireiner@gmail.com</p>
</section><section class="github-linkedin contact dark">
<p><a href="https://github.com/elireiner/" target="_blank">GitHub</a>
<a href="https://www.linkedin.com/in/eli-reiner-09b873161"target="_blank">LinkedIn</a></p></section>`;
}
function renderContact() {
    $('nav').on('click', '.contact', function () {
        $('div').empty().append(contactCode());
    })
}

function portfolioCode() {
    return `<section class="explanation portfolio dark"><p>This app will let you test your knowledge about SpaceX</p>
</section><section class="links portfolio light"><p><a href="https://elireiner.github.io/quiz-app/" target="_blank">live</a>
<a href="https://github.com/elireiner/quiz-app" target="_blank">repo</a></p>
</section><section class="explanation portfolio dark">
<img src="quiz-app.jpg" alt="screenshot of my quiz-app project"></section>`;
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