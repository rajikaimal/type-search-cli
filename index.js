#!/usr/bin/env node

const got = require("got");
const typeSearchUri = 'https://typespublisher.blob.core.windows.net/typespublisher/data/search-index-min.json';

const typeSearch = async (type) => {
    try {
        const response = await got(typeSearchUri);
        console.log(response.body);
    }
    catch(err) {
        console.error(`Error: ${err.response.body}`);
    }
}
