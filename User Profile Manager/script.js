const profiles = [];

document.getElementById('add').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    profiles.push({ name, age });
    displayProfiles();
});

function displayProfiles() {
    const profilesDiv = document.getElementById('profiles');
    profilesDiv.innerHTML = '';
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';
        profileDiv.innerHTML = `<p>Name: ${profile.name}, Age: ${profile.age}</p>`;
        profilesDiv.appendChild(profileDiv);
    });
}
