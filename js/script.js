const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];
console.log(team);
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

// dichiaro l´elemento container
const teamContainer = document.querySelector(".team-container");

// creo un ciclo for per creare le carte
for (let i = 0; i < team.length; i++) {
  teamContainer.innerHTML += 
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src="img/${}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${}</h3>
      <p>${}</p>
    </div>
  </div>
  `;
}