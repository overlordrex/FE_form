import { useNavigate } from 'react-router-dom';

const Home = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  return (
    <div className=" w-full h-screen grid place-items-center bg-blue-100">
      <div className=" bg-white shadow-lg p-8 rounded-sm flex flex-col items-center justify-center">
        <div className=" text-2xl capitalize">Hello, {user.name}</div>
        <button
          className=" bg-black text-white px-4 py-2 mt-4 rounded-full"
          onClick={() => navigate('/login')}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Home;
