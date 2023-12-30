import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-fit bg-orange-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-3xl font-bold">Streamlining Your Productivity Journey</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <NavLink to="/dashBoard">                    <button className="btn btn-primary">Let's  Explore</button>
</NavLink>
                  </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;