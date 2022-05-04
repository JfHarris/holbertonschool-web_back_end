import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return [
    await signUpUser(firstName, lastName)
      .then((value) => ({ status: 'settled', val: value })),
    await uploadPhoto(filename)
      .catch((value) => ({ status: 'rejected', val: value.toString() })),
  ];
}
