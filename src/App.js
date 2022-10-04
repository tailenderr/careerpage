import "./App.scss";
import Header from "./Component/Header/index";
import SearchBar from "./Component/SearchBar";
import vacanciesData from "./Component/MainData";
import JobCard from "./Component/JobCard";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

function App() {
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    setCurrentData((currentData) => [...vacanciesData]);
  }, []);
  return (
    <div className="App">
      <MyContext.Provider
        value={{ currentData, setCurrentData, vacanciesData }}
      >
        <Header />
        <SearchBar />
        <JobCard />
      </MyContext.Provider>
    </div>
  );
}

export default App;
