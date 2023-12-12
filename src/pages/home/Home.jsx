import Widget from "../../components/widget/Widget"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";



const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="User"/>
            <Widget type="Total Workers"/>
            <Widget type="Area of site"/>
            <Widget type="Active Workers"/>
          </div>
          <div className="charts">
            <Featured />
            <Chart/>
          </div>
      </div>


    </div>
  );
};

export default Home;