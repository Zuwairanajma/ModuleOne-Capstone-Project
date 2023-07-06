const menu = document.querySelector('.sub-header');
const bars = document.querySelector('.fa-bars');
const close1 = document.querySelector('.fa-xmark');
function showMenu() {
  menu.style.display = 'block';
}

function cancelMenu() {
  menu.style.display = 'none';
}
bars.addEventListener('click', showMenu);
close1.addEventListener('click', cancelMenu);

const speakers = [
  {
    id: '1',
    name: 'Mrs Aisha Kabir Muhammed',
    desc: 'CEO HennaHubUk Glassgow Academy',
    moreDesc: "Aisha is dedicated to bringing nature into the life of people, she always strive to make people appreciate nature and the work of art, HennaHub is her own way of impacting people's life with the beauty of nature",
    img: './images/CEO1.JPG',
    imgAlt: 'Aisha Kabir',
  },
  {
    id: '2',
    name: 'Mrs Amina Modibbo',
    desc: 'CEO Preppy Fashions',
    moreDesc: 'Amina Modibbo is a fshion designer and the founder of preppy fashion. She is best known for her fashion taste and is already to take fashion to the next level.',
    img: './images/Featured2.jpeg',
    imgAlt: 'Amina Modibbo',
  },
  {
    id: '3',
    name: 'Miss Juwairiyya Sadiq',
    desc: 'A HR Officer and Digital Marketer at DCML',
    moreDesc: 'Juwairiyya is a law student and has a taste for henna designs. She is currently training future henna designers at HennaHub academy.',
    img: './images/Featured4.jpg',
    imgAlt: 'Juwairiyyas Sadiq',
  },
  {
    id: '4',
    name: 'Hajiya Maryam Lemu',
    desc: 'Head of Administration and Resource Management at Horizon College Minna Nigeria',
    moreDesc: 'Maryam Lemu is well known for her 3 decades experience as an international speaker, an adept seminar and workshop facilitator.',
    img: './images/Featured1.jpeg',
    imgAlt: 'Maryam Lemu',
  },
  {
    id: '2',
    name: 'Mrs Amina Modibbo',
    desc: 'CEO Preppy Fashions',
    moreDesc: 'Amina Modibbo is a fshion designer and the founder of preppy fashion. She is best known for her fashion taste and is already to take fashion to the next level.',
    img: './images/Featured2.jpeg',
    imgAlt: 'Amina Modibbo',
  },
  {
    id: '3',
    name: 'Miss Zainab Kabir',
    desc: 'A Lawstudent and Henna Design Trainer',
    moreDesc: 'Zainab Kabir is a law student and has a taste for henna designs. She is currently training future henna designers at HennaHub academy.',
    img: './images/Featured3.jpg',
    imgAlt: 'Zainab Kabir',
  },
];

const speakerContainer = document.querySelector('.speaker-holder');
const showSpeakers = speakers.map((speaker) => `
      <div class="speakers">
        <div class="img-holder">
          <img class="bg" src="./images/chessboard-mobile.jpg" alt="background">
          <img src=${speaker.img} alt=${speaker.imgAlt}>
        </div>
        <div class="text-holder">
          <div class="name">
            <h3>${speaker.name}</h3>
            <i>${speaker.desc}</i>
          </div>
          <hr>
          <div class="description">
            ${speaker.moreDesc}  
          </div>
        </div>
      </div>
      `).join('');

speakerContainer.innerHTML = showSpeakers;

const vip = document.querySelector('.speakers:nth-child(1n+3)');
const vip1 = document.querySelector('.speakers:nth-child(n+4)');
const vip2 = document.querySelector('.speakers:nth-child(n+5)');
const vip3 = document.querySelector('.speakers:nth-child(n+6)');
const more = document.querySelector('.more-info');
const less = document.querySelector('.less-info');
function showMore() {
  vip.style.display = 'flex';
  more.style.display = 'none';
  less.style.display = 'flex';
  vip1.style.display = 'flex';
  vip2.style.display = 'flex';
  vip3.style.display = 'flex';
}
function showLess() {
  vip.style.display = 'none';
  vip1.style.display = 'none';
  vip2.style.display = 'none';
  vip3.style.display = 'none';
  less.style.display = 'none';
  more.style.display = 'flex';
}
more.addEventListener('click', showMore);
less.addEventListener('click', showLess);