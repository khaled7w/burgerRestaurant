import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearItems } from './cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function CartContainer() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClearItems() {
    dispatch(clearItems());
    toast.success('Cleared');
    navigate('/menu');
  }

  if (!cart.length)
    return (
      <div className="text-center flex flex-col gap-5 pt-8">
        <h1 className="capitalize font-bold text-yellow-600 text-2xl">
          cart is empty , you need to add items to cart
        </h1>
        <Link
          to="/menu"
          className="bg-yellow-600 hover:bg-yellow-700 text-stone-900 px-5 py-2 text-xl font-semibold rounded-full self-center">
          Go To Menu
        </Link>
      </div>
    );

  const totalPrice = cart.reduce((pre, cur) => pre + +cur.price, 0).toFixed(2);
  return (
    <div className="w-5/6 mx-auto flex flex-col justify-center ">
      {cart.map((item) => (
        <CartItem cartItem={item} key={item.id} />
      ))}

      {totalPrice && cart.length && (
        <h1 className="text-center text-stone-100 mt-5 font-bold text-2xl uppercase">
          Total :{' '}
          <span className="bg-yellow-600 px-3 py-1 rounded-full text-stone-900">
            ${totalPrice}
          </span>
        </h1>
      )}
      {cart.length && (
        <div className="flex my-10 mx-auto gap-5">
          <button
            onClick={handleClearItems}
            className="bg-stone-800 hover:bg-stone-900 text-stone-100 px-5 py-2 text-xl font-semibold rounded-full">
            ClearItems
          </button>
          <button
            onClick={() => navigate('/create/order')}
            className="bg-yellow-600 hover:bg-yellow-700 text-stone-900 px-5 py-2 text-xl font-semibold rounded-full">
            Order Now
          </button>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
