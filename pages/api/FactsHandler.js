const axios = require('axios');

function getRandomFact() {
    return axios
        .get('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(({ data }) => data)
        .catch((err) => {
            console.log(err);
        });
}

export default getRandomFact;
