import { useContext, useRef, useState } from "react";
import "./index.scss";
import { MyContext } from "../../App";

const JobCard = () => {
  const { currentData, setCurrentData, vacanciesData } = useContext(MyContext);
  const ref = useRef();

  // funtion to show and hide description
  const showDescription = () => {};
  return (
    <div className="cardContainer">
      {currentData.length == 0 ? (
        <h2>There are no jobs right now for this title</h2>
      ) : (
        currentData.map((item) => {
          return (
            <div className="card">
              <h3>Title - {item.title}</h3>
              <span>
                <b>Company Name -</b> {item.companyname}
              </span>
              <span>
                <b>Experience -</b> {item.Experience}
              </span>
              <span>
                <b>Job Type -</b> {item.Jobtype}
              </span>
              <span>
                <b>Location -</b> {item.location}
              </span>
              <span>
                <b>Country -</b> {item.country}
              </span>
              <br />
              <button onClick={showDescription}>Description</button>
              <div className="description" ref={ref}>
                <p>{item.description}</p>
                <button>Apply Now</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default JobCard;
