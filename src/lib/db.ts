export async function createUser(data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) {
    // Implement your database logic here to create a user
    // This is a placeholder, replace with your actual database interaction code
    console.log('Creating user:', data);
    return {
      id: 'fake-user-id',
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
  }