
import './App.css';
import Card from './component/card/Card';

import Navbar from './component/Nav/Navbar';
import PlaceOrder from './component/placeorder/PlaceOrder';
import Testimonial from './component/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="product" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Card />
        <PlaceOrder />
      </div>
      <Testimonial />

    </div>


  );
}

export default App;
