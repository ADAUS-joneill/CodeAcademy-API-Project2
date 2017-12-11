// Drum Arrays
const kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
const snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
const hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
const rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (arrayName, arrayIndex) => {
    // Requirement - do not alter any arrays when called with missing arguments
    const drums = resolveArrayName(arrayName);
    if (!drums || arrayIndex > 15 || arrayIndex < 0) {
        return;
    }

    drums[arrayIndex] = !drums[arrayIndex];
};

const resolveArrayName = (arrayName) => {
    // Convert a text array name into an actual array, this happens multiple times in code, moved to this function
    // for code re-use as per course guidelines
    
    switch (arrayName) {
        case 'kicks': {
            return kicks;
            break;
        }
        case 'snares': {
            return snares;
            break;
        }
        case 'hiHats': {
            return hiHats;
            break;
        }
        case 'rideCymbals': {
            return rideCymbals;
            break;
        }
        default: {
            return;
        }
    }
}

const clear = (arrayName) => {
    // Requirement - do not do anything if invalid argument
    if (!arrayName) {
        return;
    }

    // Requirement - identify array
    const drumArray = resolveArrayName(arrayName);

    // Requrement - if Unable to resolve array, do nothing
    if (!drumArray) {
        return;
    }

    // Requirement - fill array with false values
    drumArray.fill(false);
};

const invert = (arrayName) => {
    // Requirement - do not do anything if invalid argument
    if (!arrayName) {
        return;
    }

    // Requirement - identify array
    const drumArray = resolveArrayName(arrayName);

    // Requrement - if Unable to resolve array, do nothing
    if (!drumArray) {
        return;
    }

    // Requirement - flip all boolean values in array
    for (let index = 0; index < drumArray.length; index++) {
        drumArray[index] = !drumArray[index];
    };

};
