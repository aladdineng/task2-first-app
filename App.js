import "./App.css";
import Cards from "./comonants/Cards";
import Productlist from "./comonants/Productlist";
import Image from "./comonants/Image";

function App() {
  return (
    <div
      style={{
        background: "#219ebc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Productlist />
      <Image />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: "10px",
          height: "40vh",
          gap: "20px",
        }}
      >
        <Cards
          image=" https://www.twopeasandtheirpod.com/wp-content/uploads/2021/06/Vanilla-Pudding-Chocolate-Chip-Cookies-13-500x375.jpg "
          name="chocolate cookies"
          price="10 KD"
        />
        <Cards
          image=" https://www.indulgewithmimi.com/wp-content/uploads/2022/11/bear-cookies-homemad-gifts-735x735.jpg "
          name="cute cookies"
          price="10 KD"
        />
      </div>
    </div>
  );
}

export default App;
