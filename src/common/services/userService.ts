import { toast } from 'react-toastify';

import { UpdatePassword, UpdateProfileDatas, User } from '../models/User';
import axiosInstance from './axiosInstance';

export const userService = {
  fetchMe: async (): Promise<User> => {
    try {
      let response;
      if (import.meta.env.MODE === 'development') {
        response = {
          id: '1234',
          username: 'johnDoe',
          email: 'john.doe@ex.com',
          role: 'owner',
        };

        return response;
      } else {
        response = await axiosInstance.get('/me');

        return response.data;
      }
    } catch (error: any) {
      throw new Error('Error fetching user');
    }
  },

  updateMyProfile: async (newDatas: UpdateProfileDatas): Promise<void> => {
    try {
      await axiosInstance.put('/me', newDatas);
      toast.success('Profile updated successfully');
    } catch (error: any) {
      throw new Error('Error updating profile');
    }
  },

  updatePassword: async (datas: UpdatePassword): Promise<void> => {
    try {
      await axiosInstance.put('/me-password', {
        currentPassword: datas.currentPassword,
        newPassword: datas.newPassword,
      });
    } catch (error: any) {
      throw new Error('Error updating password');
    }
  },

  deleteMyAccount: async (): Promise<void> => {
    try {
      await axiosInstance.delete('/me');
      toast.success('Account deleted successfully');
    } catch (error: any) {
      throw new Error('Error deleting account');
    }
  },
};
