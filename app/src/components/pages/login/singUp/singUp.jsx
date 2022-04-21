import './singUp.scss';
import Header from '../components/header/header'
import FormSingUp from '../components/formSingUp/formSingUp';
import { Footer } from "../../../organisms/footer/footer"

function SingIn() {
  return (
    <div className="container-singUp">   
        <Header />
        <div className='background-img'>
          <FormSingUp />
        </div>
    <Footer/>
    </div>
  );
}

export default SingIn;
