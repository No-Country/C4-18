import './header.scss';
import loguito from '../../../assets/logoHeader.svg';
//import loguito from '../../../assets/logoHeader-1.png';

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
