var fetch = require('node-fetch');

const baseURL = `http://localhost:3000`;

var resolvers = {
    users: () => fetch(`${baseURL}/users`)
        .then(response => response.json())
        .then(data => {
            return data.values;
        }),
    user: (params) => fetch(`${baseURL}/users/` + params.id)
        .then(response => response.json())
        .then(data => {
            return data.values[0];
        }),
    createUser: (params) => fetch(`${baseURL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                first_name: params.input.first_name,
                last_name: params.input.last_name
            })
        })
        .then(response => response.json())
        .then(data => console.log('data returned:', data)),
    updateUser: (params) => fetch(`${baseURL}/users`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id: params.id,
                first_name: params.input.first_name,
                last_name: params.input.last_name
            })
        })
        .then(response => response.json())
        .then(data => console.log('data returned:', data)),
    deleteUser: (params) => fetch(`${baseURL}/users`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                id: params.id
            })
        })
        .then(response => response.json())
        .then(data => console.log('data returned:', data)),
};

module.exports = resolvers;