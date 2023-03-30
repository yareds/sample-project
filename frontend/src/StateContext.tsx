import { createContext, useContext, useReducer, useEffect } from 'react';
import { initialState, reducer, State } from './contextapi';


interface StateContextType {
    state: State;
    dispatch: React.Dispatch<any>;
}


const StateContext = createContext<StateContextType>({
    state: initialState,
    dispatch: () => null,
});


interface StateProviderProps {
    children: JSX.Element | JSX.Element[];
}


export function StateProvider({ children }: StateProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('state', JSON.stringify(state));
        }
    }, [state]);


    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateValue = () => useContext(StateContext);