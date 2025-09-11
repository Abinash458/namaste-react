import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left">
            <div className="py-2 flex justify-between">
                <div>
                    <span className="">{item.card.info.name}</span>
                    <span> - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.price/100}</span>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <img src={CDN_URL + item.card.info.imageId} className="w-24 m-4" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
