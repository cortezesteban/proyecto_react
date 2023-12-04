import { MainRoutes } from './routes/MainRoutes';
import { CartProvider } from './context/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <CartProvider>
      <MainRoutes/>
    </CartProvider>
  )
}

export default App
