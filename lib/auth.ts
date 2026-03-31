export function setOwnerSession(user: Record<string, unknown>, token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ownerToken', token);
    localStorage.setItem('ownerUser', JSON.stringify(user));
  }
}

export function getOwnerSession() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('ownerToken');
    const userStr = localStorage.getItem('ownerUser');
    if (token && userStr) {
      return {
        token,
        user: JSON.parse(userStr),
      };
    }
  }
  return null;
}

export function clearOwnerSession() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('ownerToken');
    localStorage.removeItem('ownerUser');
  }
}

export function isOwnerLoggedIn() {
  return getOwnerSession() !== null;
}
