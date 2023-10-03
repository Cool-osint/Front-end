import { TextField } from "@mui/material";
import "./App.css";
import swiggyLogo from "./images/Swiggy_logo.png";
import blinkitLogo from "./images/Blinkit-yellow-rounded.svg";
import amazonLogo from "./images/amazonLogo.jpg";
import flipkartLogo from "./images/flipkartLogo.png";
import WebsiteCard from "./components/WebsiteCard/WebsiteCard";
import { useEffect } from "react";

function App() {
  return (
    <div className="container-lg mt-5">
      <div className="d-flex justify-content-center">
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          placeholder="Enter Phone Number"
          type="number"
        />
      </div>

      <div className="cards-container mt-5 column-md-gap-4 row-gap-4">
        <WebsiteCard img={swiggyLogo} name={"Swiggy"} />
        <WebsiteCard img={blinkitLogo} name={"Blinkit"} />
        <WebsiteCard img={flipkartLogo} name={"Flipkart"} />
        <WebsiteCard img={amazonLogo} name={"Amazon"} />
        <WebsiteCard img={swiggyLogo} name={"Swiggy"} />
        <WebsiteCard img={blinkitLogo} name={"Blinkit"} />
        <WebsiteCard img={flipkartLogo} name={"Flipkart"} />
        <WebsiteCard img={amazonLogo} name={"Amazon"} />
        <WebsiteCard img={swiggyLogo} name={"Swiggy"} />
        <WebsiteCard img={blinkitLogo} name={"Blinkit"} />
        <WebsiteCard img={flipkartLogo} name={"Flipkart"} />
        <WebsiteCard img={amazonLogo} name={"Amazon"} />
        <WebsiteCard img={flipkartLogo} name={"Flipkart"} />
        <WebsiteCard img={amazonLogo} name={"Amazon"} />
      </div>
    </div>
  );
}

export default App;
