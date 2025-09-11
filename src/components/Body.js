import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfResturants, filteredRestarunt, setFilteredRestarunt } =
    useRestaurantList();
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
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            value={searchText}
            type="text"
            className="border border-solid border-black"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4">
          <button
            onClick={() => {
              let resList = listOfResturants.filter(
                (res) => res?.info.avgRating > 4.5
              );
              setFilteredRestarunt(resList);
            }}
            className="px-4 py-2 bg-gray-100 rounded-lg"
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
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
