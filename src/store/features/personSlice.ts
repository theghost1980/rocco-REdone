import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface Person {
    id: number;
    name: string;
}

interface PersonState {
    persons: Person[];
    fecthedPerson: any
}

const initialState: PersonState = {
    persons: [],
    fecthedPerson: {}

};

export const fetchPerson = createAsyncThunk("person/fetch", async(thunkAPI) => {
    const response = await fetch("https://dummyjson.com/users/1", {
        method: "GET"
    });
    const data = response.json();
    return data;
});

export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        //TODO check if it is better to name the action as payloadAction???
        addPerson: (state, action:PayloadAction<{ name: string}>) => {
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPerson.fulfilled, (state,action) => {
            state.fecthedPerson = action.payload
        })
    }
});

export default PersonSlice.reducer;

export const {addPerson} = PersonSlice.actions;