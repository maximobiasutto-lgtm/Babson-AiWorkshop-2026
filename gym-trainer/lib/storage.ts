// Local storage utilities
import { UserData } from './types';

const USER_DATA_KEY = 'gymTrainerUserData';

export function saveUserData(data: UserData): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
  }
}

export function getUserData(): UserData | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(USER_DATA_KEY);
    return data ? JSON.parse(data) : null;
  }
  return null;
}

export function clearUserData(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_DATA_KEY);
  }
}

export function hasUserData(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(USER_DATA_KEY) !== null;
  }
  return false;
}
