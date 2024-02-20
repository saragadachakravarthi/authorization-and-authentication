import {Route} from 'react-router-dom'

import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = props =>{
    const token = Cookies.get('jwt_token')
    if (token === undefined){
        return <Redirect to path="/" />
    }
    return <Route {...props} />
}

export default ProtectedRoute
//we make this protected route reusable