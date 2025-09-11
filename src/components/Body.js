import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfResturants, filteredRestarunt } = useRestaurantList();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

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
          <Link
            style={{ textDecoration: "none" }}
            to={"/restarunts/" + restaurant?.info.id}
            key={restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
