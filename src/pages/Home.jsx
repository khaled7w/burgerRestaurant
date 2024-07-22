import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createUser } from '../features/Home/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Input = styled.input`
  background: inherit;
  border: 1px solid #d58042;
  padding: 5px;
  color: #fff;
  width: 300px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 1px solid #d58042;
  }
`;

function Home() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 5) {
      console.log('here');
      toast.error('Please Enter a Valid Name');
      return;
    }
    dispatch(createUser(name));
    navigate('/menu');
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="bg-[#1b170d] h-lvh">
      <main className="flex flex-col items-center justify-center w-full h-[80vh]">
        <h1 className="text-yellow-600 text-2xl capitalize font-bold text-center mb-6 ">
          Welcome to our restaurant , please put your name to continue ordering
        </h1>
        <Input
          type="text"
          placeholder="Enter your name"
          className="rounded-full"
          onChange={(event) => setName(event.target.value)}
        />
        <button className="bg-yellow-600 hover:bg-yellow-700 text-stone-900 mt-4 px-4 py-3 text-sm font-semibold rounded-full">
          Start Ordering
        </button>
      </main>
    </form>
  );
}

export default Home;
