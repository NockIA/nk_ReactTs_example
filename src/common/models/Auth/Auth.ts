// ###  Définition de l'interface représentant l'état de l'authentification. ### //
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: Record<string, any> | null; // Informations sur l'utilisateur connecté, ou null si non connecté.
}
