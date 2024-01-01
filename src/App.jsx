import './App.css';
import Routing from './Routing/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AuthProvider } from '../src/Contexts/AuthContext';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routing />
      </AuthProvider>
     
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        closeButton={false}
        toastStyle={{
          backgroundColor: 'black',
          color: '#ffd230',
          borderRadius: '25px',
          width: 'auto'
        }}
        bodyClassName="toast-body"
        icon={<div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
       
          <HiOutlineShoppingCart size={20} style={{ marginLeft: '5px' }} />
        </div>}
      />
    </div> 
  );
}

export default App;
