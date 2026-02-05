

const postUsers = async (userId) => {
    const peticion = await fetch (`https://jsonplaceholder.typicode.com/post?userId=${userId}`)
    return await peticion.json();
}