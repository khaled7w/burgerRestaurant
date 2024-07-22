import CartContainer from '../features/Cart/CartContainer';

function Cart() {
  return (
    <div className="bg-[#1b170d] h-lvh">
      <h1 className="text-yellow-600 text-center pt-8 text-4xl font-bold">
        Cart
      </h1>
      <CartContainer />
    </div>
  );
}

export default Cart;
