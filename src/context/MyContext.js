import React, { useReducer } from 'react'
import { useCookies } from 'react-cookie'

const Context = React.createContext({})

export function MyContextProvider({ children }) {
    const [cookies] = useCookies()

	const initialState = {
		memclid: cookies.memclid ? cookies.memclid : '',
        memclem: cookies.memclem ? cookies.memclem : ''
	}

	const reducer = (state, action) => {
		switch (action.type) {
		case 'setData': {
			return {
                ...state,
                memclid: action.payload.memclid,
                memclem: action.payload.memclem,
			}
		}
		default: return state
		}
	}

	const [userState, userDispatch] = useReducer(reducer, initialState)

	return <Context.Provider value={{ userState, userDispatch }}>
		{children}
	</Context.Provider>
}

export default Context