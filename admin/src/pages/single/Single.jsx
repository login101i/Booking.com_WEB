import "./single.scss";
import { Link, useLocation } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";

const Single = () => {
  const location = useLocation();

  const path = location.pathname.slice("/");

  const { data, loading, error } = useFetch(`${path}`);
  

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={
                  data.img ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJ_4IkdK5v2qxNiln5-ntq7WQBe03wykLdA&usqp=CAU"
                }
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">
                    {data.email || "no email yet"}
                  </span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country/city :</span>
                  <span className="itemValue">
                    {data.country || " unknown"}
                    {data.city || " unknown"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Operations</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;
