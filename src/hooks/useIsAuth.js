import {AuthContext} from '../Providers/AuthProvider'
import {useContext} from "react";


const useIsAuth = () => {
    return useContext(AuthContext)
}

export default useIsAuth