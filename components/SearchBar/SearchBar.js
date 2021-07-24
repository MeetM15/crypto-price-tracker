import styles from "./searchbar.module.scss";
const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.search_input} {...rest} />
    </div>
  );
};

export default SearchBar;
