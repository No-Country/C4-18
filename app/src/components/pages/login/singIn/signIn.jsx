import './singIn.scss';
import Header from '../components/header/header'
import FormSingIn from '../components/formSingIn/formSingIn';
import { Footer } from "../../../organisms/footer/footer"

function SingIn() {
  return (
    <div className="container-singIn">   
        <Header />
        <div className='background-img'>
          <FormSingIn />
        </div>
    <Footer/>
    </div>
  );
}

export default SingIn;
