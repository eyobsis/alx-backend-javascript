import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  try {
    const results = await Promise.all(promises);
    console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
