import { IoIosMoon } from "react-icons/io";

function TopNav() {
  return (
    <div className="topNav">
      <div className="container">
        <div className="leftNav">
          <h1>Where in the World?</h1>
        </div>
        <div className="rightNav">
          <div className="logo">
            <IoIosMoon />
          </div>
          <div className="mode">Light Mode</div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
