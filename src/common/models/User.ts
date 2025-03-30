export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  created_at?: string;
  updated_at?: string;
}

export interface UpdateProfileDatas {
  username: string;
  email: string;
}

export interface PasswordDatas {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UpdatePassword {
  currentPassword: string;
  newPassword: string;
}
