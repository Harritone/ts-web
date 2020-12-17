import { User } from './Models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Saving');
});

user.trigger('asdf');
