import logo from "../assets/ascent.svg"
import SearchInput from "./SearchInput";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router";
import { useState } from "react";
import CreatePost from "./CreatePost";

const Navbar = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <div className="navbar bg-primary shadow-md px-[12.5%] py-5.25 gap-6">
                <div className="flex-1">
                    <img
                        src={logo}
                        style={{ height: "42px", cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    />
                </div>
                <SearchInput />
                <button className="btn btn-lg btn-accent text-primary rounded-lg" onClick={() => setIsCreateModalOpen(true)}>
                    <IoIosAddCircleOutline
                        className="w-5 h-5"
                        style={{ stroke: "var(--brand-purple)", strokeWidth: 10 }}
                    />
                    Create a Post
                </button>
            </div>
            {isCreateModalOpen && (
                <CreatePost
                    isOpen={isCreateModalOpen}
                    setIsOpen={setIsCreateModalOpen}
                />
            )}
        </>
    );
};

export default Navbar;
