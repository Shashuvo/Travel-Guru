import React from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
    const [user,setUser] = useState();
    const authData = {
        me: 2,
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;