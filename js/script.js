// Prendo gli elementi dal DOM
const list = document.getElementById('list');

// Creo l'array
const teamInformations = [
    {name: 'Wayne Barnett', role: 'Founder & CEO', picture: 'wayne-barnett-founder-ceo.jpg'},
    {name: 'Angela Caroll', role: 'Chief Editor', picture: 'angela-caroll-chief-editor.jpg'},
    {name: 'Walter Gordon', role: 'Office Manager', picture: 'walter-gordon-office-manager.jpg'},
    {name: 'Angela Lopez', role: 'Social Media Manager', picture: 'angela-lopez-social-media-manager.jpg'},
    {name: 'Scott Estrada', role: 'Developer', picture: 'scott-estrada-developer.jpg'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', picture: 'barbara-ramos-graphic-designer.jpg'}
];


let items = ''; 

// Stampo le informazioni in console
for (let i = 0; i < teamInformations.length; i++) {

    const employee = teamInformations[i]; 

    /*
    // Stampo i nomi
    console.log(`Nome: ${employee['name']}`);

    // Stampo i ruoli
    console.log(`Ruolo: ${employee['role']}`);

    // Stampo le foto
    console.log(`Foto: ${employee['picture']}`);
    */

    items += `
    <li>
        <img src="${employee['picture']}" alt="foto ${i+1}">
        <h3>Nome: ${employee['name']}</h3>
        <h4>Ruolo: ${employee['role']}</h4>   
    </li>
    `
}


// Stampo in pagina la lista di informazioni
list.innerHTML = items;