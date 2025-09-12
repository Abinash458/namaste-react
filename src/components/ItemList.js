import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left">
          <div className="py-2 flex justify-between">
            <div>
              <span className="">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
              <button onClick={() => handleAddItem(item)} className="my-2 p-2 bg-black text-white rounded-lg shadow-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-24 m-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
