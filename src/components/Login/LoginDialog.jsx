import { Fragment } from 'react';
import FullScreenDialog from '../FullscreenDialog/FullscreenDialog';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import './LoginDialog.css';
import useAuth from '../../hooks/useAuth';

const LoginDialog = ({open, setOpen}) => {

    const { user, loginWithGoogle, loginWithGithub, appSignOut } = useAuth();

    const handleGoogleLogin = () => {
        loginWithGoogle()
    }

    return (
        <FullScreenDialog setOpen={setOpen} open={open} saveButton={false} title={'Login em resende.app'}>
            {user ? (
                <Fragment>
                    <div className='logged-in-user'>
                        <img src={user.avatar} alt={user.name} />
                        <h2>Olá, {user.name}</h2>
                        <p>Você já está logado. Deseja sair?</p>
                        <button onClick={() => appSignOut()}>Sair</button>
                    </div>

                </Fragment>
            ) : (
                <div className='login-methods'>
                    <h2>Login</h2>
                    <div className='login-methods-buttons'>
                        <button onClick={handleGoogleLogin}><span><Google /></span> Google</button>
                    </div>
                </div>
            )}
        </FullScreenDialog>
    )
}

export default LoginDialog;