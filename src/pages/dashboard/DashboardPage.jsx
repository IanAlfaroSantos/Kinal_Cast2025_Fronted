import videoApp from "../../assets/vid/fondoApp.mp4";
import { Navbar } from "../../components/navbars/Navbar";
import "./dashboardPage.css";

export const DashboardPages = () => {
  return (
    <div>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoApp} type="video/mp4"/>
        </video>
      </div>
      <Navbar/>
    </div>
  )
}
