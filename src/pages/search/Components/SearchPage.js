import styles from "./SearchPage.module.css";
import searchData from "../search.json";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className={styles.page_container}>
      <SearchForm className={styles.search_form}></SearchForm>
      <SearchResults
        className={styles.search_results}
        searchData={searchData}
      ></SearchResults>
    </div>
  );
};

export default SearchPage;
