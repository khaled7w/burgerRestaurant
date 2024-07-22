import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

function AppLayout() {
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigate('');
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="bg-stone-950">
      <header className="flex w-5/6 mx-auto justify-between py-2 items-center">
        <h1 className="font-bold text-2xl text-yellow-600 capitalize">
          {userName}
        </h1>
        {cart.length && (
          <button
            onClick={() => navigate('/cart')}
            className="bg-yellow-600 hover:bg-yellow-700 text-stone-800 font-bold px-4 py-2 rounded-full">
            Go to Cart ({cart.length})
          </button>
        )}
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
