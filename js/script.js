// Prendo gli elementi dal DOM
// const list = document.getElementById('list');

const mainContent = document.getElementById('main-content');

// Creo l'array
const teamInformations = [
    {name: 'Wayne Barnett', role: 'Founder & CEO', picture: 'wayne-barnett-founder-ceo.jpg'},
    {name: 'Angela Caroll', role: 'Chief Editor', picture: 'angela-caroll-chief-editor.jpg'},
    {name: 'Walter Gordon', role: 'Office Manager', picture: 'walter-gordon-office-manager.jpg'},
    {name: 'Angela Lopez', role: 'Social Media Manager', picture: 'angela-lopez-social-media-manager.jpg'},
    {name: 'Scott Estrada', role: 'Developer', picture: 'scott-estrada-developer.jpg'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', picture: 'barbara-ramos-graphic-designer.jpg'}
];


let row = '<div class="row padding">';

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

    row += `
    <div class="col border">
        <div class="card">
            <div class="card-image">
                <img src="img/${employee['picture']}" alt="foto_${i+1}">
            </div>
            <div class="card-info">
                <h3>${employee['name']}</h3>
                <h4>${employee['role']}</h4>
            </div>
        </div>
    </div>
    `;
}

row += `
</div>
`;

// Stampo in pagina la lista di informazioni
mainContent.innerHTML = row;