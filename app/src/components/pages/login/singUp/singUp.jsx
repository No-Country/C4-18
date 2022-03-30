import './singUp.scss';
import Header from '../components/header/header'
import FormSingUp from '../components/formSingUp/formSingUp';

function SingIn() {
  return (
    <div className="conatiner-singUp">   
        <Header />
        <div className='background-img'>
          <FormSingUp />
        </div>
    
    </div>
  );
}

export default SingIn;
