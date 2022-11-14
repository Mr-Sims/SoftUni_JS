const baseUrl = 'http://localhost:3005/api/users'

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
}

export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();

    return result.user;
}

export const create = async (data) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (response.ok) {
        const result = await response.json()
        console.log(result)
        return result
    }
    else {
         throw new Error('Cannot be able to create user! :D')
    }
    
}