const BASE = import.meta.env.VITE_API_URL || '';

export const api = async (path, { method = 'GET', body, auth = false } = {}) => {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include'
  });
  const isJSON = res.headers.get('content-type')?.includes('application/json');
  const data = isJSON ? await res.json() : await res.text();
  if (!res.ok) throw new Error(data?.message || data || 'Request failed');
  return data;
};
