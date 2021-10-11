const axios = require('axios');

function getRandomFact() {
    return axios
        .get('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(({ data }) => data)
        .catch((err) => {
            return err;
        });
}

export default getRandomFact;
