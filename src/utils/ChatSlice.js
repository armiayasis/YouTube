import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Constants";
const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers:{
        addMessage: (state, action) => {
            if (state.messages.length === LIVE_CHAT_COUNT  ) {
                state.messages.splice(0,1);
            } 
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;