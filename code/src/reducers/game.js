import { createSlice } from '@redux-toolkit';

export const game = createSlice({
    name: 'game',
    initialState: {
        description: '',
        username: '',
        actions: '',
        history: []
    },
    reducers: {
        updateUserName: (state, action) => {
            state.username = action.payload;
        },

        generateNewGame: (state, action) => {
            state.game 

        }
    }



})