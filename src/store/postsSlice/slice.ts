import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemsType, PostSliceState, Status } from './types';
import { fetchPosts } from './asyncAction';
import { RootState } from '../store';

const initialState: PostSliceState = {
  posts: [],
  status: Status.LOADING,
  totalPages: 1,
  currentPage: 1,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePost(state, action: PayloadAction<ItemsType[]>) {
      state.posts = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.posts = action.payload.data;
      state.totalPages = action.payload.last_page;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.status = Status.ERROR;
    });
  },
});

export const { changePost, setPage } = postSlice.actions;
export const postState = (state: RootState) => state.posts;
export default postSlice.reducer;
