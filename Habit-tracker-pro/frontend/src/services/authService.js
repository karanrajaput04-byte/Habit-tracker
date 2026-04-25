const authService = {
  login(token) {
    localStorage.setItem('habit-token', token);
  },
  logout() {
    localStorage.removeItem('habit-token');
  },
  isAuthenticated() {
    return Boolean(localStorage.getItem('habit-token'));
  },
};

export default authService;
