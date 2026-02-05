import {postUsers} from './posts.js';
import {getUsersById} from './users.js';

let { id, name, email} = await getUsersById(4);
let posts = await postUsers(id);
postUsers.map(({title, body}) => ({title, body}));

let data = {
    name, 
    email, 
    valor
}

// let data = await getUsersById(2)
// .then (({ name, id }) => {
//     return postUsers(id)
//     .then ((post) => {
//         return {name, email, posts}
//     });
// })
// console.log(data);

// getUsers();
// getUsersById(99);
// postUsers(5);