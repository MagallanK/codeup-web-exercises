// "use strict";


let gitHubAPI = fetch('https://api.github.com/users', {headers: {'Authorization': 'gitHubAPIKey'}});
console.log(gitHubAPI);


gitHubAPI
    .then((response) => {
        console.log(response);
        response.json()
            .then((result) => {
            console.log(result)
        })
        .then(() => {

        })
    })
