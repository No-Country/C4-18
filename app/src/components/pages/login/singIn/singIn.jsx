import './singIn.scss';
import Header from './components/header/header'
import FormSingIn from './components/formSingIn/formSingIn';

function SingIn() {
  return (
    <div className="conatiner-singIn">   
        <Header />
        <div className='background-img'>
          <FormSingIn />
        </div>
    
    </div>
  );
}

export default SingIn;
