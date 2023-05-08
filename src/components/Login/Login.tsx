import LoginForm from '../common/Forms/LoginForm'
import { withLoginRedirect } from '../../hoc/withLoginRedirect'

import '../../styles/Login.scss'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-title'>LOGIN</div>
            <div className='login-form-area'>
                <LoginForm />
            </div>
        </div>
    )
}

export default withLoginRedirect(Login)
