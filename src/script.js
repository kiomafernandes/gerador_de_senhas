// Elementos
const generatePasswordButton = document.querySelector('#generate-password');
const genaretadPasswordElement = document.querySelector('#generated-password')


// Funções
const getLatterLowerCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 25) + 97));
};

const getLatterUpperCase = () => {
    return (String.fromCharCode(Math.floor(Math.random() * 25) + 65));
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/.,:;@$#%&*!?|+-";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = (getLatterLowerCase, getLatterUpperCase, getNumber,  getSymbol) => {
    let password = ""

    const passwordLength = 10

    const generators = [
        getLatterLowerCase,
        getLatterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i=0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        })
    }

    password = password.slice(0, passwordLength)
    

    genaretadPasswordElement.style.display = "block"
    genaretadPasswordElement.querySelector('h4').innerText = password;
}

// Eventos
generatePasswordButton.addEventListener('click', () => {
    generatePassword(
        getLatterLowerCase,
        getLatterUpperCase,
        getNumber,
        getSymbol
    )
    
})