import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}
	const data = await res.json()
	return data
})

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		items: [],
		status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error?.message || 'Unknown error'
			})
	},
})

export default postsSlice.reducer


