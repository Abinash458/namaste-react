import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  const [listOfResturants, setListOfResturants] = useState(resList);

  return (
    <div className="body">
      <button
        onClick={() => {
          let resList = listOfResturants.filter((res) => res.data.avgRating > 4);
          setListOfResturants(resList)
        }}
        className="filter-btn"
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfResturants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
