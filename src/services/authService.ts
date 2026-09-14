export async function authenticateUser(email: string, passwordHash: string) {
  if (!email || !passwordHash) {
    throw new Error('Missing credentials');
  }
  return {
    userId: 'usr_789456',
    email,
    token: 'jwt_mock_token_session_verified',
    expiresIn: 3600,
  };
}
