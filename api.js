function fetc(url, method, body) {
  return fetch(url, { method: method || 'GET', body, headers: { 'Content-Type': 'application/json' } })
}
fetc('http://localhost:3000/sign_up', 'POST', JSON.stringify({ email: 'nosov582125@gmail.com', password: 'vanya', firstName: 'shamanya', lastName: 'Pasha' }))
