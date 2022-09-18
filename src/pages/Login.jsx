import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  let user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const createUser = async () => {
    try {
      setIsError(false);
      await axios.post('https://job-op.herokuapp.com/api/auth/signin', {
        name,
        password,
      });

      navigate('/');
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };

  return (
    <div className=" bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className=" w-[90%] md:w-[45%] lg:w-[30%]  bg-white  ">
        <form className="p-5 lg:p-7 shadow-lg">
          <div className=" mb-8  ">
            <div className=" text-[24px] text-center font-bold">Login</div>
            <div className=" text-[18px] text-center mb-3 text-gray-400">
              welcome back, {user?.name}
            </div>
          </div>

          {isError && (
            <p className=" text-red-600 text-xs mb-3">
              Please check credientials and try again
            </p>
          )}
          <div className="mb-3">
            <input
              type={'text'}
              placeholder="username"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="text-white rounded-full w-[150px] bg-black  font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>

          <Link to={'/register'}>
            <div className=" text-[14px] mt-6 text-blue-600  font-light">
              Don't have an account? Create Account
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
