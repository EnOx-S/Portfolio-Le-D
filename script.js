document.getElementById('french-btn').addEventListener('click', function() {
    changeLanguage(`
        Salut !<br><br>
        Je suis un garçon de 16 ans né en France. Ma passion, c'est l'informatique. Je suis expert en configuration d'ordinateurs, finance, formation de toutes sortes et OSINT. Je vends des trucs sur Discord quand j'ai le temps. Si vous voulez me contacter, veuillez utiliser Discord ou Telegram.<br><br>
        Chaque projet que j'ai réalisé est unique et reflète mon engagement à créer des solutions uniques.
    `);
});

document.getElementById('english-btn').addEventListener('click', function() {
    changeLanguage(`
        Hey There!<br><br>
        I am a 16-year-old guy born in France. My passion is computing. I am an expert in computer setup, finance, training of all kinds, and OSINT. I sell some stuff on Discord when I have time. If you want to contact me, please use Discord or Telegram.<br><br>
        Every project I have completed is unique and reflects my commitment to creating unique solutions.
    `);
});

document.getElementById('russian-btn').addEventListener('click', function() {
    changeLanguage(`
        Привет!<br><br>
        Мне 16 лет, я родился во Франции. Моя страсть — это компьютеры. Я эксперт в настройке компьютеров, финансах, обучении всех видов и OSINT. Я продаю некоторые вещи на Discord, когда у меня есть время. Если вы хотите связаться со мной, пожалуйста, используйте Discord или Telegram.<br><br>
        Каждый проект, который я завершил, уникален и отражает мою приверженность созданию уникальных решений.
    `);
});

function changeLanguage(newText) {
    const descElement = document.getElementById('desc');

    descElement.style.opacity = 0;

    setTimeout(() => {
        descElement.innerHTML = newText;

        descElement.style.opacity = 1;
    }, 500);
}
