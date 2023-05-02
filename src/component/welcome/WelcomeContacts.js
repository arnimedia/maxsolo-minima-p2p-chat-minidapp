import React from 'react';
import Minimaimage from '../../assets/images/minima_logotype.svg'

const WelcomeContacts = () => {

    return (
        <>
        <div divclassName='welcome-logo'>  
            <div className='welcome-logo-symbol'> 
                <svg width="411" height="411" viewBox="0 0 411 411" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFFFFF" strokeWidth="2" d="M410.877 205.458C410.877 88.7867 313.58 -5.18963 195.74 0.222618C90.4473 5.08134 5.01984 90.5088 0.222618 195.74C-5.18963 313.641 88.7867 410.877 205.458 410.877C248.202 410.877 287.81 397.777 320.652 375.513C326.987 371.208 335.475 371.823 340.887 377.235L366.902 403.251C371.577 408.048 378.096 411 385.292 411C399.499 411 411 399.499 411 385.292L410.877 205.396V205.458ZM331.108 294.821C323.974 304.785 315.732 313.887 306.507 321.944C300.172 327.418 290.639 327.049 284.735 321.144L271.02 307.429C264.439 300.91 264.685 290.024 271.758 284.058C280.552 276.616 288.117 267.698 293.96 257.735C303.001 242.421 308.229 224.585 308.229 205.581C308.229 189.651 304.6 174.583 298.142 161.114C296.236 157.178 291.008 156.378 287.933 159.453L241.867 205.519L216.836 230.551C210.624 236.762 200.476 236.762 194.203 230.551L169.171 205.519L123.105 159.453C120.03 156.378 114.741 157.178 112.896 161.114C106.438 174.583 102.809 189.651 102.809 205.581C102.809 224.646 108.037 242.482 117.078 257.735C122.982 267.698 130.486 276.616 139.281 284.058C146.353 290.024 146.538 300.91 140.019 307.429L126.303 321.144C120.399 327.049 110.866 327.479 104.531 321.944C95.306 313.949 87.0031 304.846 79.9303 294.821C61.9715 269.605 51.393 238.792 51.393 205.519C51.393 172.246 61.9715 141.433 79.9303 116.217C87.0646 106.253 95.306 97.1511 104.531 89.0942C110.866 83.6204 120.399 83.9895 126.303 89.8937L153.365 116.955L198.754 162.344C202.505 166.096 208.594 166.096 212.346 162.344L257.735 116.955L284.796 89.8937C290.701 83.9895 300.233 83.5589 306.568 89.0942C315.794 97.0895 324.096 106.192 331.169 116.217C349.128 141.433 359.707 172.246 359.707 205.519C359.707 238.792 349.128 269.605 331.169 294.821H331.108Z" fill="white" className="svg-symbol"></path></svg>
            </div>
            <div className='welcome-logo-minima'> 
                <img className="light-version-logo" src={Minimaimage} alt="logo" /> 
            </div>          
        </div>
        </>
    )
}

export default WelcomeContacts;