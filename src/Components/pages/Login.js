import { auth, googleProvider } from '../../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { StyledLogin, LoginContainer, GoogleButton } from  '../styled/Login.styled'

const Login = ({ setIsAuth }) => {
    let navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            localStorage.setItem('isAuth', true)
            setIsAuth(true)
            navigate('/')
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return ( 
        <StyledLogin>
            <LoginContainer>
                <p>Choose a method to login</p>

                <GoogleButton onClick={signInWithGoogle}>
                    Sign in with Google
                </GoogleButton>
            </LoginContainer>
        </StyledLogin>
     );
}
 
export default Login;