import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import KeyIcon from "@mui/icons-material/Key";
import useFetch from "../../../../admin/src/hooks/useFetch";

const Widget = ({ type }) => {
  const { data, loading, error } = useFetch(`/admin/dashboardInfo`);
  console.log(
    "%cMyProject%cline:12%cdata",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px",
    data
  );

  let info;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "users":
      info = {
        title: "Użytkownicy",
        isMoney: false,
        link: "Zobacz wszystkich użytkowników",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)"
            }}
          />
        )
      };
      break;
    case "hotels":
      info = {
        title: "Hotele",
        isMoney: false,
        link: "Zobacz wszystkie hotele",
        icon: (
          <LocalHotelIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod"
            }}
          />
        )
      };
      break;
    case "rooms":
      info = {
        title: "POKOJE",
        isMoney: false,
        link: "Zobacz listę pokoi",
        icon: (
          <KeyIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        )
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{info.title}</span>
        <span className="counter">
          {data[type] && data[type].length} {info.isMoney && "zł"}
        </span>
        <span className="link">{info.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {info.icon}
      </div>
    </div>
  );
};

export default Widget;
