import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AuthState } from '../../../models/Auth/Auth';
import { authService } from '../../authService';
import { userService } from '../../userService';

export const initializeAuth = createAsyncThunk(
  'auth/initialize',
  async (_, { rejectWithValue, dispatch }) => {
    const token = authService.getAuthToken();
    if (!token) {
      dispatch(setUser({ token: null, user: null }));
      return { token: null, user: null };
    }

    try {
      const userData = await userService.fetchMe();
      if (!userData) {
        dispatch(setUser({ token: null, user: null }));
        return { token: null, user: null };
      }
      dispatch(setUser({ token, user: userData }));
      return { token, user: userData };
    } catch (error) {
      console.error('Error initializing auth:', error);
      return rejectWithValue(error);
    }
  }
);

// ### Initialisation de l'état par défaut de l'authentification. ### //
const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

// ### Slice contenant l'état et les actions liées à l'authentification. ### //
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action pour connecter un utilisateur et définir son état.
    setUser: (
      state,
      action: PayloadAction<{ token: string | null; user: Record<string, any> | null }>
    ) => {
      state.token = action.payload.token; // Stocke le jeton d'authentification.
      state.isAuthenticated = true; // Marque l'utilisateur comme authentifié.
      state.user = action.payload.user; // Enregistre les informations utilisateur.
    },
    // Action pour déconnecter un utilisateur et réinitialiser son état.
    logout: (state) => {
      state.token = null; // Supprime le jeton d'authentification.
      state.isAuthenticated = false; // Indique que l'utilisateur n'est plus authentifié.
      state.user = null; // Réinitialise les informations utilisateur.
    },
  },
});

export const initializeAuthState = () => {
  return {
    token: authService.getAuthToken() || null,
    isAuthenticated: !!authService.getAuthToken(),
    user: null,
  };
};

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
