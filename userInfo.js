function createUserProfiles(names, modifiedNames){
    return names.map (
        
        (name, i) => [
            {originalName: name, modifiedName: modifiedNames[i], userID: i + 1}
        ]

);

}
