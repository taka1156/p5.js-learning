import { attributes as attr, html } from '@/assets/md/index.md';

const md2html = () => {
  const { heroText, leadText, infoText, btnText, btnUrl } = attr;

  document.getElementById('hero').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-5">${heroText}</h1>
    <p class="lead">${leadText}</p>
    <hr class="my-2">
    <p>${infoText}</p>
    <a class="btn btn-primary btn-lg" href="${btnUrl}" role="button">
    ${btnText}
    </a>
    </div>
   `;

  document.getElementById('md').innerHTML = html;
};

md2html();

