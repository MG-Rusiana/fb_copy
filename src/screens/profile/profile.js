import { Header } from "../../components/header/header";
import './profile.css'
import { Outlet, Link } from "react-router-dom";


export const Profile = () => {
    return(
        <>
        <Header />
        <div className='app'>    
          {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FKlasikTitosAndTitasOfManila%2Fposts%2Fpfbid02jhSVJCL7LJcB3DBN7rsL9r2FBUmGu3bL7sbhdr1yFNtPTH3dbZbCBfZ3YdcrgmsUl&show_text=true&width=500" width="500" height="683" style={{border: "none",overflow: "hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SeaC4ZJUhrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <button className='px-[10px] h-[52px] bg-[#42B72A] text-center text-[#ffffff] rounded-md font-bold text-xl mt-10'><Link to="/">Go Back to Login</Link></button>
        </div>
      </>
    );
}