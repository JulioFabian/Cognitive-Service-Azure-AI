import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';

import RandomImageUrl from './DefaultImages';

const key = process.env.REACT_APP_AZURE_COMPUTER_VISION_KEY;
const endpoint = process.env.REACT_APP_AZURE_COMPUTER_VISION_ENDPOINT;

// console.log(key);
// console.log(endpoint);

const visualFeatures = [
    "ImageType",
    "Faces",
    "Adult",
    "Categories",
    "Color",
    "Tags",
    "Description",
    "Objects",
    "Brands"
];

export const isConfigured = () => {
    return (key && endpoint && (key.length > 0) && (endpoint.length > 0)) ? true : false;
    // return false;
}

const includesText = async (tags) => {
    return tags.filter((el) => {
        return el.name.toLowerCase() === "text";
    });
}

const includesHandwriting = async (tags) => {
    return tags.filter((el) => {
        return el.name.toLowerCase() === "handwriting";
    });
}

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}


export const computerVision = async (url) => {

    // authenticate to Azure service
    const computerVisionClient = new ComputerVisionClient(
        new ApiKeyCredentials({ 
            inHeader: { 'Ocp-Apim-Subscription-Key': key } 
        }), endpoint);

    const urlToAnalyze = url != null ? url : RandomImageUrl();

    const analysis = await computerVisionClient.analyzeImage(urlToAnalyze, { visualFeatures });

    // text detected - what does it say and where is it
    if (includesText(analysis.tags) || includesHandwriting(analysis.tags)) {
        analysis.text = await readTextFromURL(computerVisionClient, urlToAnalyze);
    }

    // all information about image
    return { "URL": urlToAnalyze, ...analysis};
}
// analyze text in image
const readTextFromURL = async (client, url) => {
    
    let result = await client.read(url);
    let operationID = result.operationLocation.split('/').slice(-1)[0];

    const start = Date.now();
    // console.log(`${start} -${result?.status} `);
    
    while (result.status !== "succeeded") {
        await wait(500);
        // console.log(`${Date.now() - start} -${result?.status} `);
        result = await client.getReadResult(operationID);
    }
    
    return result.analyzeResult; 
}