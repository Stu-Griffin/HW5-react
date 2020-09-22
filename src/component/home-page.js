import React from "react";
import {Link} from "react-router-dom";
function HomePage() {
  return (
    <div>
        <p>your home page</p>
        <Link to="/sign-in">Get out =></Link>
    </div>
  );
}
export default HomePage;