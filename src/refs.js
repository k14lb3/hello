import { db } from 'firebase.js';

export const REF = {
  USERS: () => db.collection('users'),
  USER: ({ user_uid }) => db.collection('users').doc(user_uid),
};
