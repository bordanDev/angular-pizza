export const MOCK_USERS: USER[] = [
  { id: 1, usertype: 'admin', password: '1234', name: 'Nikita'},
  { id: 2, usertype: 'user', password: '1234', name: 'Boba'},
]

interface USER {
  id: number;
  name: string;
  usertype: string;
  password: string;
}
