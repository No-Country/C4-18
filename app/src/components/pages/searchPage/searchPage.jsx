import { Footer } from "../../organisms/footer/footer";
import { Header } from "../../organisms/header/header";
import { FilterViewContainer } from "../../templates/filterViewContainer/filterViewContainer";
import "./searchPage.scss";

export const SearchPage = () => {
  return (<>
  
      <Header />
    <div className="searchPage">
      <FilterViewContainer />
    </div>
      <Footer/>
    </>
  );
};
