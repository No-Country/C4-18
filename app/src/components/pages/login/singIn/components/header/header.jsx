import './header.scss';
import loguito from '../../../assets/logoHeader2.png';


function HeaderLogin() {
  return (
    <div className="conatiner-header">   
        <div className='header'> 
            <img src={loguito} alt='logoHeader'/>
        </div>       
    </div>
  );
}

export default HeaderLogin;
