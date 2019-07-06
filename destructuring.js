const cat = {
    name: "Alfred",
    breed: "Persian"
};

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
