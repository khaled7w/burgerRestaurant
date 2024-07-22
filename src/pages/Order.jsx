import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { clearItems } from '../features/Cart/cartSlice';

function Order() {
  const orders = useSelector((state) => state.orders.orders);
  const params = useParams();
  const id = params.id;
  const order = orders.find((order) => order.orderId === id);
  const totalPrice = order?.cart.reduce((pre, cur) => pre + +cur.price, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!order) {
    return (
      <div className="bg-[#1b170d] h-[100vh]">
        <div className="flex flex-col items-center justify-center gap-4 h-[80vh]">
          <h2 className="text-stone-100 text-2xl">We do not have any Items</h2>
          <Link
            to="/menu"
            className="bg-yellow-600 hover:bg-yellow-700 text-stone-900 px-2 py-1 text-sm font-semibold rounded-full">
            Go To Menu
          </Link>
        </div>
      </div>
    );
  }

  function clear() {
    dispatch(clearItems());
    navigate('/menu');
  }

  return (
    <div className="bg-[#1b170d] h-lvh relative">
      <button
        onClick={clear}
        className="bg-yellow-600 hover:bg-yellow-700 text-stone-900 px-2 py-1 font-semibold rounded-full absolute top-8 text-xl left-1/2 -translate-x-1/2 -translate-y-1/2  p-4">
        Create New Order
      </button>
      <div className="flex items-center w-5/6 justify-between mx-auto pt-24">
        <h1 className="text-stone-100 text-3xl capitalize">
          Name:{' '}
          <span className="bg-yellow-600 text-stone-900 py-1 px-2 capitalize rounded-full">
            {order.data.name}
          </span>
        </h1>
        <h2 className="text-stone-100 text-3xl capitalize">
          OrderId:{' '}
          <span className="bg-yellow-600 text-stone-950 py-1 px-2 rounded-full">
            #{order.orderId}
          </span>
        </h2>
      </div>
      <div>
        <div>
          <div className="mt-7 flex  bg-yellow-600 w-2/3 mx-auto justify-between p-5 py-3">
            <h2 className="font-semibold text-2xl">Meal Name</h2>
            <h2 className="font-semibold text-2xl">Price</h2>
          </div>
          {order.cart.map((meal) => (
            <div
              key={meal.id}
              className="flex mt-1 w-2/3 mx-auto justify-between p-5 py-3 ">
              <h5 className="text-stone-100 text-xl">1 * {meal.name}</h5>
              <h5 className="text-stone-100 text-xl">${meal.price}</h5>
            </div>
          ))}
          <div className="mx-auto w-2/3 border-t-2 border-yellow-600">
            <h1 className="py-2 text-3xl text-center text-slate-100">
              TOTAL :{' '}
              <span className="text-yellow-600 font-bold tracking-wide">
                ${totalPrice}
              </span>
            </h1>
          </div>
          <div className="text-center mt-5">
            <h2 className="text-stone-100 font-semibold text-2xl capitalize">
              The Order will arrive to{' '}
              <span className="text-yellow-600">{order.data.address} </span>
              at<span className="text-yellow-600"> {order.expectedDate}</span>
              <br />
              And We will Receive a call at{' '}
              <span className="text-yellow-600">{order.data.phone} </span>
              To verify your order, be Alert.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
