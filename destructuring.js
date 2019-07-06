const cat = {
    name: "Alfred Marcus",
    breed: "Persian"
};

<<<<<<< HEAD
const cities = {
    paris: {
        country: "France",
        language: "French"
    },
    brazil: {
        country: "Brazil",
        language: "Portuguese"
    }
};

const { name, breed, age = 3 } = cat;
//name = Alfred
//breed = Persian
//age = 3
const {
    brazil: { country },
    paris
} = cities;
//country = Brazil
//paris = {country: 'France', language: 'French'}
=======
const { name: fullname, breed, age: yearsOld = 3 } = cat;
//fullname = Alfred
//breed = Persian
//yearsOld = 3
>>>>>>> conflito
