export const getUsers = async() => {
    const peticion = await fetch(`https://jsonplaceholder.typicode.com/users`);
    return await peticion.json();
}

export const getUserById = async (id) => {
    const peticion = await  fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    if (peticion.status == 404) {
        throw new Error("Usuario no encontrado");
    }
    return await peticion.json();
}

