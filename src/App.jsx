import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import Nav from './components/Nav'
import Cart from "./components/Cart";

function App() {
  return (
    <div className="">
      <Nav />
      <Cart />
      <HomeScreen />
    </div>
  );
}

export default App;
