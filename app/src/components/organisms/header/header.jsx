import { logoHeader } from '../../atoms/atomsIndex';
import './header.scss';



export const Header=()=> {
  return (
    <div className="headerContainer">   
        <div className='header'> 
           <a href="/"><img src={logoHeader} alt='logoHeader'/></a> 
        </div>       
    </div>
  );
}
