import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="py-48 flex flex-col items-center justify-center gap-5">
            <h1 className="text-[84px] leading-[55px] font-[700]">404</h1>
            <p className="text-lg text-base-content/85">
                Lost your footing? Let’s get you back on route.
            </p>
            <Link to="/" className="btn btn-primary">
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;
