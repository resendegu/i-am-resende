import { AccountCircle } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import './FloatingBtn.css';
import { Tooltip } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const FloatingBtn = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    const { user } = useAuth();

    useEffect(() => {
        setIsVisible(true);
        console.log(user);
    }, [user]);

    return (
        <Tooltip title={user ? user.name : 'Login'}>
            <div
                className='floating-btn'
                onClick={onClick}
            >
                
                    {user ? <img src={user.avatar} alt={user.name} /> : <AccountCircle fontSize='large'/>}
                
                
            </div>
        </Tooltip>
    );
};

export default FloatingBtn;
