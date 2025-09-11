import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const data = useContext(UserContext);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;


  return (
    <div className="m-4 p-4 w-[380px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={`${CDN_URL}` + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{data.loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

// input - ResturantCard => ResturantCardPrometed

export const withDiscountLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Discounted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;