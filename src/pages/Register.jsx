import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigate = useNavigate();

  const createUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://job-op.herokuapp.com/api/auth/register',
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem('user', JSON.stringify(data));
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    if (password === repeatPassword) {
      createUser();
    } else {
      setIsError(true);
      setIsLoading(false);
      console.log('wrong credientials');
    }
  };

  return (
    <div className=" bg-gray-300   w-full h-screen grid place-items-center">
      <div className=" w-[85%] md:w-[45%] lg:w-[30%] shadow-lg  bg-white  ">
        <form className=" p-5 lg:p-9" onSubmit={handleSubmit}>
          <div className=" mb-8  ">
            <div className=" text-[24px] text-center font-bold">
              Create an Account
            </div>
            <div className=" text-[14px] mb-3 text-center text-gray-400">
              Register to join our community.
            </div>
          </div>
          {isError && (
            <p className=" text-red-600 text-xs mb-3">
              Please check credientials and try again
            </p>
          )}

          <div className="mb-5">
            <input
              type={'text'}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Repeat Password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          {isLoading ? (
            <button
              type="submit"
              className="text-white w-[150px] rounded-full bg-black hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Loading
            </button>
          ) : (
            <button
              type="submit"
              className="text-white w-[150px] rounded-full bg-black hover:bg-blue-800  font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          )}

          <Link to={'/login'}>
            <div className=" text-[14px] mt-6 text-blue-600  font-light">
              Already have an account? Sign in
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
