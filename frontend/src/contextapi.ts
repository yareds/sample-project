//state type
export interface State {
    allClients: Client[];
    oneClient: Client | null;
}


//initial state
export const initialState: State = {
    allClients: [],
    oneClient: null
}


//action types
const SET_ALLCLIENTS = "SET_ALLCLIENTS";
const SET_ONECLIENT = "SET_ONECLIENT";


//action creators
export const setAllClients = (payload: Client[]) => ({
    type: SET_ALLCLIENTS,
    payload
});
export const setOneClient = (payload: Client) => ({
    type: SET_ONECLIENT,
    payload
});


//reducer
export function reducer(state: State = initialState, action: any): State {
    if (state === null) {
        localStorage.removeItem('state');
        return initialState;
    }


    switch (action.type) {
        case SET_ALLCLIENTS:
            return {
                ...state,
                allClients: action.payload
            }

        case SET_ONECLIENT:
            return {
                ...state,
                oneClient: action.payload
            }

        default:
            return state;
    }
}


interface AdditionalInfo {
    gender?: string;
    company: string;
    email: string;
    phone: string;
    address: string;
}


interface Client {
    id: string;
    name: string;
    age: number;
    gender?: string;
    additionalInfo: AdditionalInfo;
}