const contacts = [];

document.getElementById('add').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    contacts.push({ name, email });
    displayContacts();
});

function displayContacts() {
    const contactsDiv = document.getElementById('contacts');
    contactsDiv.innerHTML = '';
    contacts.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact';
        contactDiv.innerHTML = `<p>${contact.name} - ${contact.email}</p>`;
        contactsDiv.appendChild(contactDiv);
    });
}
