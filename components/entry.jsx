import './entry.css'
import user_icon from '../src/assets/user_icon.png'

function Entry({signInFunc}) {
    
    return (
        <>
            <div className='signInContainer'>
                <div style={{backgroundColor: 'white', borderRadius: '50%', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '4%'}}>
                    <img src={user_icon}/>
                </div>
                <p>User</p>
                <button onClick={signInFunc}>Sign In</button>
            </div>
        </>
    )
}
export default Entry