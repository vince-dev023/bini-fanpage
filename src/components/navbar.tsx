import Binilogo from "../assets/binilogo.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between items-center bg-transparent py-7 px-20 font-outfit">
          <div className="mr-10">
            <img src={Binilogo} />
          </div>
          <div className="flex flex-row 1 decoration-0 text-white gap-12 text-lg ml-10 mt-2">
            <a>Profile</a>
            <a>Music</a>
            <a>Video</a>
            <a>Gallery</a>
            <a>Shop</a>
            <a>Events</a>
            <a>Articles</a>
            <a>Subscribe</a>
          </div>
          <div className="text-white text-2xl bg-[#77CBD1] px-4 py-2 rounded-3xl mr-10">
            <button>Membership</button>
          </div>
        </div>
      </div>
    </>
  );
}
