const overlay = document.querySelector('.mobile-overlay');

function mytoggleMenu() {
  overlay.classList.toggle('hide');
}
mytoggleMenu();

const projects = [
  {
    id: 1,
    title: 'Tonic',
    info: {
      client: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    screenshot: 'images/desktop-version/project-1.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
    skills: ['html', 'css', 'javascript'],
    liveLink: 'https://www.canopy.cr/tonic',
    sourceLink: 'https://www.canopy.cr/tonic',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/desktop-version/project-2.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 3,
    title: 'Facebook 360',
    info: {
      client: 'Facebook',
      role: 'Full Stack Dev',
      year: 2015,
    },
    screenshot: 'images/desktop-version/project-3.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
    skills: ['html', 'css', 'Ruby on rails', 'javascript'],
    liveLink: 'https://www.facebook.com/',
    sourceLink: 'https://www.facebook.com/',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    info: {
      client: 'Uber',
      role: 'Lead Developer',
      year: 2018,
    },
    screenshot: 'images/desktop-version/project-4.png',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release`,
    skills: ['html', 'css', 'javascript', 'Ruby on rails'],
    liveLink: 'https://www.uber.com/',
    sourceLink: 'https://www.uber.com/',
  },
];

document.querySelector('.portfolio-card').innerHTML = projects
  .map(
    (project) =>
      `<div class="card-layout">
      <div class="image-container">
        <img
          class="image-fluid"
          src=${project.screenshot}
          alt="background_image"
        />
      </div>

      <div class="p-title">
        <h3 class="title">${project.title}</h3>
        <ul class="flex-items">
          <li class="list-item canopy">CANOPY</li>
          <li class="list-item role">Back End Dev</li>
          <li class="list-item year">2015</li>
        </ul>
        <p class="text_paragraph">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required.
        </p>
        <ul class="btn-container-flex">
          <li class="btn">
            <button class="btn-sm" type="button">html</button>
          </li>
          <li class="btn">
            <button class="btn-md" type="button">css</button>
          </li>
          <li class="btn">
            <button class="btn-lg" type="button">javaScript</button>
          </li>
        </ul>
        <div class="btn-container">
          <button type="button" class="btn-xxl">See Project</button>
        </div>
      </div>
    </div>

    <div class="card-layout">
      <div class="p-title">
        <h3 class="title">Tonic</h3>
        <ul class="flex-items">
          <li class="list-item canopy">CANOPY</li>
          <li class="list-item role">Back End Dev</li>
          <li class="list-item year">2015</li>
        </ul>
        <p class="text_paragraph">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required.
        </p>
        <ul class="btn-container-flex">
          <li class="btn">
            <button class="btn-sm" type="button">html</button>
          </li>
          <li class="btn">
            <button class="btn-md" type="button">css</button>
          </li>
          <li class="btn">
            <button class="btn-lg" type="button">javaScript</button>
          </li>
        </ul>
        <div class="btn-container">
          <button type="button" class="btn-xxl">See Project</button>
        </div>
      </div>
      <div class="image-container">
        <img
          class="image-fluid"
          src="images/works/b.png"
          alt="background_image"
        />
      </div>
    </div>
    <div class="card-layout">
      <div class="image-container">
        <img
          class="image-fluid"
          src="images/works/c.png"
          alt="background_image"
        />
      </div>

      <div class="p-title">
        <h3 class="title">Tonic</h3>
        <ul class="flex-items">
          <li class="list-item canopy">CANOPY</li>
          <li class="list-item role">Back End Dev</li>
          <li class="list-item year">2015</li>
        </ul>
        <p class="text_paragraph">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required.
        </p>
        <ul class="btn-container-flex">
          <li class="btn">
            <button class="btn-sm" type="button">html</button>
          </li>
          <li class="btn">
            <button class="btn-md" type="button">css</button>
          </li>
          <li class="btn">
            <button class="btn-lg" type="button">javaScript</button>
          </li>
        </ul>
        <div class="btn-container">
          <button type="button" class="btn-xxl">See Project</button>
        </div>
      </div>
    </div>
    <div class="card-layout">
      <div class="p-title">
        <h3 class="title">Tonic</h3>
        <ul class="flex-items">
          <li class="list-item canopy">CANOPY</li>
          <li class="list-item role">Back End Dev</li>
          <li class="list-item year">2015</li>
        </ul>
        <p class="text_paragraph">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required.
        </p>
        <ul class="btn-container-flex">
          <li class="btn">
            <button class="btn-sm" type="button">html</button>
          </li>
          <li class="btn">
            <button class="btn-md" type="button">css</button>
          </li>
          <li class="btn">
            <button class="btn-lg" type="button">javaScript</button>
          </li>
        </ul>
        <div class="btn-container">
          <button type="button" class="btn-xxl">See Project</button>
        </div>
      </div>
      <div class="image-container">
        <img
          class="image-fluid"
          src="images/works/d.png"
          alt="background_image"
        />
      </div>
    </div>`
  )
  .join('');

document.getElementsByClassName('.view-btn').onclick = function () {
  viewProject(this.id);
};
