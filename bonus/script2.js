
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
 
  const teamContainer = document.querySelector(".team-container");
  
 
  for (let i = 0; i < team.length; i++) {
    teamContainer.innerHTML += 
    `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${team[i].image}"
          alt="Wayne Barnett"
        />
      </div>
      <div class="card-text">
        <h3>${team[i].name}</h3>
        <p>${team[i].role}</p>
      </div>
    </div>
    `;
  }


// Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale, e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

// dichiaro le variabili
let nameUser = document.getElementById("name");
let roleUser = document.getElementById("role");
let imageUser = document.getElementById("image");
console.log(nameUser);
console.log(roleUser);
console.log(imageUser);

// creo l´evento click
document.getElementById("addMemberButton").addEventListener("click", function(){
    nameUser = nameUser.value;
    roleUser = roleUser.value;
    imageUser = imageUser.value;
    console.log(nameUser);
    console.log(roleUser);
    console.log(imageUser);
    let newMember = {
        name: nameUser,
        role: roleUser,
        image: imageUser
      }
    team.push(newMember);
    console.log(newMember);
    console.log(team);
    teamContainer.innerHTML += 
    `
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${newMember.image}"
          alt="Wayne Barnett"
        />
      </div>
      <div class="card-text">
        <h3>${newMember.name}</h3>
        <p>${newMember.role}</p>
      </div>
    </div>
    `;
});


