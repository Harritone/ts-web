import { Collection } from './models/Collection';

const rootUrl = 'http://localhost:3000/users';

const userCollection = new Collection(rootUrl);

userCollection.on('change', () => {
  console.log(userCollection);
});

userCollection.fetch();

// console.log(userCollection.models);
