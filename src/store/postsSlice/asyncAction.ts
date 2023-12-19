import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataType } from './types';
import axios from 'axios';

export const fetchPosts = createAsyncThunk<fetchDataType, string>(
  'posts/fetchPosts',
  async (params) => {
    const { data } = await axios.get<fetchDataType>(
      `https://catfact.ninja/facts?page=${params}`,
    );
    return data;
  },
);
