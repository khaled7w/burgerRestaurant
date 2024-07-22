import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';
import { useGetMeals } from './useGetMeals';
import { Link } from 'react-router-dom';

function MenuContainer() {
  const name = useSelector((state) => state.user.userName);
  console.log(name);
  const { meals, error, isLoading } = useGetMeals();
  if (isLoading) return <div>Loading ...</div>;
  if (error) {
    console.error(error);
  }

  if (name.length < 5) {
    return (
      <div className="bg-[#1b170d] h-[100vh]">
        <div className="flex flex-col items-center justify-center gap-4 h-[80vh]">
          <h2 className="text-stone-100 text-2xl text-center">
            You do not put your name , please put it first to be able to order
          </h2>
          <Link
            to="/"
            className="bg-yellow-600 hover:bg-yellow-700 text-stone-900 px-2 py-1 text-sm font-semibold rounded-full">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-center pt-2 text-yellow-600 text-3xl font-bold">
        Menu
      </h1>
      <div className="grid grid-cols-3 gap-8 w-5/6 mx-auto pt-8">
        {meals.map((meal) => (
          <MenuItem meal={meal} key={meal.id} />
        ))}
      </div>
    </>
  );
}

export default MenuContainer;
