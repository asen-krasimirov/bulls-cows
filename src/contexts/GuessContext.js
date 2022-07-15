import { createContext, useContext, useState } from 'react';

// import * as userServices from '../services/userServices';

export const AuthContext = createContext();

export const useGuessContext = () => {
	const context = useContext(AuthContext);
	return context;
};

// const initialUserData = {
// 	id: null,
// 	is_business: null,
// };

export function AttachGuessContext({ children }) {
    const [numLength, setNumLength] = useState(4);
    
    const changeNumLength = (numLength) => {
        setNumLength(numLength);
    }

	// const [userInfo, updateUserInfo] = useLocalStorage('user', initialUserData);
	// const [authToken, updateAuthToken] = useLocalStorage('authToken', '');
	// const [isProfileComplete, updateIsProfileComplete] = useLocalStorage('isProfileComplete', false);

	// const changeUserInfo = (data) => {
	// 	updateUserInfo(data.user);
	// 	updateAuthToken(data.token);
	// 	changeProfileInfo(data.user.id);
	// };

	// const clearUserInfo = () => {
	// 	updateUserInfo(initialUserData);
	// 	updateAuthToken('');
	// 	updateIsProfileComplete(false);
	// };

	// const changeProfileInfo = (userId) => {
	// 	userServices.isProfileComplete(userId)
	// 		.then(data => {
	// 			updateIsProfileComplete(data.is_complete);
	// 		});
	// };

	return <AuthContext.Provider value={{
		numLength,
        changeNumLength
	}}>
		{children}
	</AuthContext.Provider>;
};
