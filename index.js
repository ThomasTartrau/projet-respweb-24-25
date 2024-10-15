const School = {
    Epsi: 'Epsi',
    Wis: 'Wis',
    Idrac: 'Idrac',
    Ifag: 'Ifag',
    Sup2Com: 'Sup2com'
}

const Location = {
    Nantes: 'Nantes',
    Paris: 'Paris',
    Lyon: 'Lyon',
    Lille: 'Lille'
}

class Profile {
    constructor(firstName, lastName, school, schoolYear, location, instagram, phoneNumber, email, isStar) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.school = school;
        this.schoolYear = schoolYear;
        this.location = location;
        this.instagram = instagram;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.isStar = isStar;
    }
}

const profiles = []

const firstNames = ["John", "Jane", "Jack", "Jill", "James", "Jenny", "Jesse", "Jasmine", "Jared", "Jocelyn"];
const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", "Rodriguez"];

function renderProfiles() {
    const profilesContainer = document.getElementById('profiles');
    profilesContainer.innerHTML = '';

    profiles.forEach(profile => {
        const profileCard = `
            <a href="profile.html" class="block">
                <div class="bg-gray-100 rounded-lg shadow p-4 lg:p-6 flex items-center hover:bg-gray-200 transition duration-300">
                    <img src="assets/man.jpg" alt="Photo de profil" class="w-16 h-16 lg:w-32 lg:h-32 mr-4 lg:mr-6">
                    <div class="flex flex-col flex-grow">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center mb-4">
                                <h3 class="text-lg lg:text-3xl font-bold">${profile.firstName} ${profile.lastName}</h3>
                                ${profile.isStar ? '<i class="fa-solid fa-star text-yellow-500 ml-2"></i>' : ''}
                            </div>
                        </div>
                        <div class="pr-24">
                            <div class="flex items-center text-sm lg:text-xl text-gray-600">
                                <img src="assets/schools/${profile.school.toLowerCase()}.png" alt="${profile.school}" class="w-4 h-4 lg:w-6 lg:h-6 mr-2">
                                ${profile.school}
                            </div>
                            <div class="flex items-center text-sm lg:text-base text-gray-600 mt-1">
                                <div class="lg:text-xl">
                                    <i class="fa-solid fa-map-marker-alt mr-2 text-blue-900"></i>
                                    ${profile.location}
                                </div>
                                <div class="ml-6 lg:text-xl">
                                    <i class="fa-solid fa-school text-blue-900 mr-2"></i>
                                    ${profile.schoolYear}e année
                                </div>
                            </div>
                        </div>
                    </div>
                    <i class="fa-solid fa-angle-right text-gray-800 lg:text-3xl"></i>
                </div>
            </a>
        `;
        profilesContainer.innerHTML += profileCard;
    });
}

function main() {
    const numStaredProfiles = Math.floor(Math.random() * 4) + 1; 
    for (let i = 0; i < 10; i++) {
        const isStar = i < numStaredProfiles;
        const profile = new Profile(
            firstNames[Math.floor(Math.random() * firstNames.length)],
            lastNames[Math.floor(Math.random() * lastNames.length)],
            Object.values(School)[Math.floor(Math.random() * Object.values(School).length)],
            Math.floor(Math.random() * 5) + 1,
            Object.values(Location)[Math.floor(Math.random() * Object.values(Location).length)],
            `@${firstNames[Math.floor(Math.random() * firstNames.length)]}${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
            `06${Math.floor(Math.random() * 100000000)}`,
            `${firstNames[Math.floor(Math.random() * firstNames.length)]}.${lastNames[Math.floor(Math.random() * lastNames.length)]}@gmail.com`,
            isStar
        )
        profiles.push(profile)
    }
    renderProfiles();

    document.getElementById('addfilter').addEventListener('click', function() {
        const searchSection = document.getElementById('searchs');
        const newFilter = document.createElement('div');
        newFilter.innerHTML = `
            <section class="rounded-lg bg-stone-100 w-5/6 max-w-lg mx-auto mt-2">
                <div class="flex justify-between gap-4">
                    <div class="flex items-center grow rounded-lg bg-stone-300 px-2">
                        <i class="fa-solid fa-magnifying-glass mr-2 text-gray-800"></i>
                        <input type="text" placeholder="Rechercher" class="w-full rounded bg-stone-300 focus:outline-none placeholder-gray-800">
                    </div>
    
                    <div class="flex items-center p-2">
                        <i class="fa-sharp fa-solid fa-filter-list mr-2 text-blue-400"></i>
                        <select name="filter" id="filter" class="bg-stone-100 focus:outline-none appearance-none">
                            <option disabled value="1">Filtrer</option>
                            <option value="2">Nom</option>
                            <option value="3">Ecole</option>
                            <option value="4">Ville</option>
                            <option value="5">Année</option>
                        </select>
                    </div>
                </div>
            </section>
        `;
        searchSection.appendChild(newFilter);
        newFilter.style.opacity = '0';
        setTimeout(() => {
            newFilter.style.opacity = '1';
        }, 10);
    });
}

document.addEventListener('DOMContentLoaded', main);