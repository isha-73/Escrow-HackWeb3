import Navbar from '../components/NavBar';
import { useRouter } from 'next/router';

const Dashboard = () => {
  let props = {
    disabled: true
  };
  const router = useRouter();
  const { address } = router.query; // Get the address from the query parameters

  return (
    <>
      <Navbar disabled={props.disabled} />
      <div className="m-20">
        <div className=" border-blue-500 border rounded shadow-md flex flex-col items-center justify-center p-5 h-80">
          <div>
            <h1>Welcome to the Dashboard</h1>
            {address && <p>Your wallet address: {address}</p>}
          </div>
          <div className="mt-4 flex flex-wrap justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md mr-2 mb-2">
              Button 1
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
