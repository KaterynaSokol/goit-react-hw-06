import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filtersSlice";

const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filter.searchValue);
  const handleFilter = (event) => {
    const value = event.target.value;
    const action = setFilterValue(value);
    dispatch(action);
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={searchInputId}>
        <p className={css.title}>Find contacts by name</p>
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={searchInputId}
        value={searchValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
