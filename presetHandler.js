// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
    // Requirement - Evaluate requestType
    switch (requestType) {
        case 'GET': {
            // Build response to 'GET'
            if (presets[presetsIndex]) {
                return [200,presets[presetsIndex]];
            } else {
                return [404];
            }
        }
        case 'PUT': {
            // Build response to 'PUT'
            if (presets[presetsIndex]) {
                presets[presetsIndex] = newPresetArray;
                return [200, newPresetArray];                
            } else {
                return [404];
            }
        }
        default: {
            // Not called with a 'GET' or a 'PUT', build response
            return [400];
        }
    }    
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
