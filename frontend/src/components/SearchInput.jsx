import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
    return (
        <div
            className="
                flex
                items-center
                rounded-lg
                px-4
                py-2
                shadow-sm
                w-full
                max-w-xs
                transition-all
                duration-200
                hover:brightness-105
            "
            style={{ backgroundColor: "var(--chalk-white)" }}
        >
            <AiOutlineSearch
                className="w-6 h-6 mr-2"
                style={{ color: "var(--brand-purple)", opacity: 0.75, stroke: "var(--brand-purple)", strokeWidth: 20 }}
            />
            <input
                type="text"
                placeholder="Search..."
                className="
                    w-full
                    bg-[var(--chalk-white)]
                    text-[var(--slate-grey)]
                    placeholder:text-[var(--slate-grey)]/50
                    outline-none
                "
            />
        </div>
    );
};

export default SearchInput;
