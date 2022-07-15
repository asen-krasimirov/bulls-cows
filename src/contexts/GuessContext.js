import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useGuessContext = () => {
	const context = useContext(AuthContext);
	return context;
};

export function AttachGuessContext({ children }) {
    const [numLength, setNumLength] = useState(4);
    
    const changeNumLength = (numLength) => {
        setNumLength(numLength);
    }

	return <AuthContext.Provider value={{
		numLength,
        changeNumLength
	}}>
		{children}
	</AuthContext.Provider>;
};
