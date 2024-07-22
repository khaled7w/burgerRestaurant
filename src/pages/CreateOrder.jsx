import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addDetails } from '../features/Home/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getRandomNumber } from '../services/getRandomNumber';
import { createOrder } from '../features/Order/orderSlice';
import toast from 'react-hot-toast';

const StyledLabel = styled.label`
  color: #fff;
  font-size: 25px;
`;

const StyledInput = styled.input`
  background: inherit;
  border: 1px solid rgb(202 138 4);
  width: 100%;
  padding: 5px;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

const StyledError = styled.p`
  color: red;
`;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderId = getRandomNumber();
  const cart = useSelector((state) => state.cart.cart);
  const name = useSelector((state) => state.user.userName);

  function formatDate(dateVal) {
    var newDate = new Date(dateVal);

    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = 'AM';

    var iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
      sAMPM = 'PM';
      sHour = iHourCheck - 12;
    } else if (iHourCheck === 0) {
      sHour = '12';
    }

    sHour = padValue(sHour);

    return (
      sMonth +
      '-' +
      sDay +
      '-' +
      sYear +
      ' ' +
      sHour +
      ':' +
      sMinute +
      ' ' +
      sAMPM
    );
  }
  function formatDate2(dateVal) {
    var newDate = new Date(dateVal);

    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours() + 1;
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = 'AM';

    var iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
      sAMPM = 'PM';
      sHour = iHourCheck - 12;
    } else if (iHourCheck === 0) {
      sHour = '12';
    }

    sHour = padValue(sHour);

    return (
      sMonth +
      '-' +
      sDay +
      '-' +
      sYear +
      ' ' +
      sHour +
      ':' +
      sMinute +
      ' ' +
      sAMPM
    );
  }

  function padValue(value) {
    return value < 10 ? '0' + value : value;
  }

  const onSubmit = (data) => {
    if (data.address < 5 || data.number < 5 || data.name < 5) {
      toast.error('Invalid Data');
      return;
    }
    dispatch(addDetails(data));
    dispatch(
      createOrder({
        data,
        orderId,
        cart,
        createdDate: formatDate(new Date()),
        expectedDate: formatDate2(new Date(new Date() + 2)),
      })
    );
    navigate(`/order/${orderId}`);
  };

  if (!cart.length) {
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

  return (
    <div className="bg-[#1b170d] h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center w-5/6 max-w-md">
        <div>
          <StyledLabel>Name:</StyledLabel>
          <StyledInput
            type="text"
            defaultValue={name}
            {...register('name', {
              minLength: {
                value: 5,
                message: 'Name should be at least 5 characters',
              },
            })}
            placeholder="Enter your name"
          />
          {errors?.name && <StyledError>{errors.name.message}</StyledError>}
        </div>
        <div>
          <StyledLabel>Phone-number:</StyledLabel>
          <StyledInput
            type="number"
            placeholder="Enter your phone number"
            {...register('phone', {
              minLength: {
                value: 5,
                message: 'Phone number should be at least 5 characters',
              },
            })}
          />
          {errors?.phone && <StyledError>{errors.phone.message}</StyledError>}
        </div>
        <div>
          <StyledLabel>Address:</StyledLabel>
          <StyledInput
            type="text"
            placeholder="Enter your Address"
            {...register('address', {
              minLength: {
                value: 6,
                message: 'Address should be at least 6 characters',
              },
            })}
          />
          {errors?.address && (
            <StyledError>{errors.address.message}</StyledError>
          )}
        </div>
        <button className="bg-yellow-600 hover:bg-yellow-700 mt-5 text-stone-900 px-5 py-2 text-xl font-semibold rounded-full self-start">
          Submit
        </button>
      </form>
    </div>
  );
}
