// import { Footer } from "../../organisms/footer/footer";
import { Header } from "../../organisms/header/header";
import { FilterViewContainer } from "../../templates/FilterViewContainer/FilterViewContainer";
import "./searchPage.scss";

export const SearchPage = () => {
  return (<>
      <Header />
    <div className="searchPage">
      <FilterViewContainer />
    </div>
      {/* <Footer/> */}
    </>
  );
};
