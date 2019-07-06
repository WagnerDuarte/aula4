const cat = {
    name: "Alfred Marcus",
    breed: "Persian"
};

const { name: fullname, breed, age: yearsOld = 3 } = cat;
//fullname = Alfred
//breed = Persian
//yearsOld = 3
