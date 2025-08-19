import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestarantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams()

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -
              Rs: {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestarantMenu;
