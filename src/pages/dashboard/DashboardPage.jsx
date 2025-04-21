import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { Sidebar } from "../../components/navbars/Sidebar";
import { useChannels } from "../../shared/hooks/useChannels";
import { useUserDetails } from "../../shared/hooks";
import videoApp from "../../assets/vid/fondoApp.mp4";
import "./dashboardPage.css";

export const DashboardPages = () => {

  const { getChannels, allChannels, isFetching, followedChannels } = useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
  }, []);

  if (isFetching) {
    return <LoadingSpinner/>
  }

  return (
    <div className="dashboard-container">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoApp} type="video/mp4"/>
        </video>
      </div>
      <Navbar/>
      <Content channels={ allChannels } getChannels={ getChannels }/>
      <Sidebar channels={ followedChannels }/>
    </div>
  )
}
