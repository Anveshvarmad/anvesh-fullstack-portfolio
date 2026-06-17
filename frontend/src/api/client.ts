import type { ContactPayload, PortfolioSnapshot } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://127.0.0.1:8000/api';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getPortfolioSnapshot() {
  return request<PortfolioSnapshot>('/snapshot/');
}

export function sendContactMessage(payload: ContactPayload) {
  return request<{ message: string }>('/contact/', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
