import './singUp.scss';
import Header from '../singIn/components/header/header'
import FormSingUp from '../singIn/components/formSingUp/formSingUp';

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
