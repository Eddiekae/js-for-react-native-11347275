function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    return originalNames.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

const userProfiles = createUserProfiles(strings, formattedStrings);
console.log(userProfiles);