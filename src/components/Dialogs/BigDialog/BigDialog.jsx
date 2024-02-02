/* eslint-disable react/prop-types */
import {} from 'react';
import './BigDialog.css';
import { Close } from '@mui/icons-material';

const BigDialog = ({setOpen, children}) => {

    console.log(setOpen, children)
    return (
        <div className='big-dialog open'>
            <button
                onClick={() => {
                    setOpen(false);  
                }}
            >
                <Close />
            </button>
            {children}
        </div>
    );
};

export default BigDialog;
