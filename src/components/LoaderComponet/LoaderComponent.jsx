import { RotatingLines } from 'react-loader-spinner';

import './LoaderComponent.css';

export const LoaderComponent = () => {
    return (
        <div className='spinnerStyle'>
            <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}
