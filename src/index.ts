import { User } from './Models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {});
user.on('change', () => {});
user.on('aljasf', () => {});

console.log(user);
