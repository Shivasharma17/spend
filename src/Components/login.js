import user from './user.png';
import password from './key.png';
export default function login(){
    return(
        <div className='container'>
                <div className='left-side-panel'>
                    <h1>Spend</h1>
                </div>
                <div className='right-side-panel'>
                    <span className='heading'>Sign in</span>
                    <img src={user} alt='user-icon' width="20px" id='user-img'/>
                    <input type='text' placeholder='Enter your username' id='user' />
                    <img src={password} alt='password-icon' width="20px" id='pwd-img'/>
                    <input type='password' placeholder='Enter your password' id='pwd'/>
                    <input type ="button" value="Submit" id='btn'/>
                    <span className='register'>
                    Not registered? <a href='#'>Register Now</a></span>
                </div>
        </div>
    )

}