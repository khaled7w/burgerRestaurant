import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../Cart/cartSlice';
import toast from 'react-hot-toast';

/*eslint-disable*/
function MenuItem({ meal }) {
  const { name, price, description, image, id: mealId } = meal;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const ids = cart.map((item) => item.id);
  console.log(ids);
  return (
    <div className="bg-[#110f0d] flex flex-col items-center gap-2 rounded-2xl">
      <div className="w-full">
        <img src={image} alt={name} className="rounded-t-2xl" />
      </div>
      <h2 className="text-stone-200 text-2xl font-bold">{name}</h2>
      <h2 className="text-yellow-600 bg-[#1d1a0b] py-2 px-4 font-semibold text-xl">
        ${price}
      </h2>
      <p className="text-stone-200 text-sm text-center px-2">{description}</p>
      {ids.includes(mealId) ? (
        <button
          onClick={() => {
            dispatch(deleteItem(mealId));
            toast.success('Deleted');
          }}
          className="bg-yellow-600 my-6 px-4 py-2 rounded-full font-semibold hover:bg-yellow-700">
          Delete
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addItem(meal));
            toast.success('Added');
          }}
          className="bg-yellow-600 my-6 px-4 py-2 rounded-full font-semibold hover:bg-yellow-700">
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default MenuItem;
