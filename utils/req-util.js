const { StringDecoder } = require('string_decoder');
const url = require('url');

const reqUtil = {};

reqUtil.extractData = (req) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parsedUrl.query;
    const method = req.method.toLowerCase();
    const headers = req.headers;

    // Getting payload if any
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    // Handling event data
    req.on('data', (data) => {
        buffer += decoder.write(data);
    })

    return new Promise((resolve, reject) => {
            req.on('end', () => {
                try {
                    buffer += decoder.end();
            
                    resolve ({
                        path: trimmedPath,
                        query: queryStringObject,
                        method,
                        headers,
                        body: buffer !== '' ? JSON.parse(buffer): {},
                    });
                } catch (e) {
                    reject(e);
                }
            });
    });

    
}

module.exports = reqUtil;