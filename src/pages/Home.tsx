//
import { useEffect } from "react";
import screen from "../assets/images/screen.png"
import TaskBar from "../components/TaskBar";
import { TaskbarProvider } from "../contexts/TaskbarContext/TaskbarContext";
//
const Home = () => {
  //
  useEffect(() => {
    //

    //
  }, []);
  //
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <img src={screen} alt="" className="w-full h-full" />
      </div>
      <div className="box">
        <div className="w-full h-full relative box__">
          <TaskbarProvider>
            <TaskBar isShow={true} />
          </TaskbarProvider>
        </div>
      </div>
    </>
  )
}

export default Home;