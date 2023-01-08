import React, { useState } from "react";
import "../Styles/Filter.css";
import { useDispatch } from "react-redux";
import { filterFood } from "../action/foodaction";

const Filter = () => {
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterFood(search, option));
  };
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("all");
  const dispatch = useDispatch();

  // console.log(search);
  // console.log(option);

  return (
    <div className="Filter-container">
      <form className="Filter-from">
        <input
          type="text"
          placeholder="Enter the food name"
          className="search_input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-select"
          onChange={(e) => setOption(e.target.value)}
        >
          <option>--Select--</option>
          <option>all</option>
          <option>veg</option>
          <option>nonveg</option>
        </select>
        <input
          type="submit"
          value="Search"
          className="searchButton"
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

export default Filter;
