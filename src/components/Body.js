import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredRestarunt, setFilteredRestarunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestarunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            type="text"
            className="search-box"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestarunt = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestarunt(filteredRestarunt);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            let resList = listOfResturants.filter(
              (res) => res?.info.avgRating > 4.5
            );
            setFilteredRestarunt(resList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestarunt.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
