import './header.scss';
import loguito from '../../assets/logoHeader2.png';


function HeaderLogin() {
  return (
    <div className="conatiner-header">   
        <div className='header'> 
           <a href="/"><img src={loguito} alt='logoHeader'/></a> 
        </div>       
    </div>
  );
}

export default HeaderLogin;
