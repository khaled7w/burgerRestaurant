import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import toast from 'react-hot-toast';

/*eslint-disable */
function CartItem({ cartItem }) {
  const { id, name, price, descrition, image } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between border-b-2 border-yellow-600 py-2">
      <div className="flex items-center gap-5">
        <img src={image} alt={name} className="w-8 h-8" />
        <h1 className="text-yellow-600 font-bold text-xl">{name}</h1>
      </div>
      <div className="flex items-center gap-5">
        <h2 className="text-yellow-600 font-bold text-xl">${price}</h2>
        <button
          onClick={() => {
            dispatch(deleteItem(id));
            toast.success('Deleted');
          }}
          className="bg-yellow-600 hover:bg-yellow-700 text-stone-900 px-2 py-1 text-sm font-semibold rounded-full">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
