import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
const SearchBar = () => {
  const { currentData, setCurrentData, vacanciesData } = useContext(MyContext);
  const [title, setTitle] = useState("");

  const searchJob = (event) => {
    event.preventDefault();
    if (title.length == 0) {
      setCurrentData([...vacanciesData]);
    } else {
      let tempArray = vacanciesData.filter((item) => {
        if (item.title.toLowerCase().includes(title)) {
          return item;
        }
      });
      setCurrentData([...tempArray]);
    }
  };

  return (
    <div className="container">
      <form>
        <input
          placeholder="job title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value.toLowerCase());
          }}
        />
        <button onClick={searchJob}>
          <FontAwesomeIcon icon={faSearch} color="#4d4d4e" />
          {"  "}
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
