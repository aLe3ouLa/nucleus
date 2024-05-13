import { Search } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "react-use";

// const Input = styled.input`
//   width: 100%;
//   padding: var(--space-md) var(--space-lg);
//   max-height: 60px;
//   border-color: var(--input-border-color);
//   border-radius: var(--border-radius);
//   border-style: solid;
//   border-width: 3px;
//   margin: var(--space-lg) 0;
//   color: rgb(var(--input-border-color));
//   font-size: 24px;
//   appearance: none;

//   background-color: rgb(var(--input-background-color));

//   @media (max-width: 600px) {
//     font-size: 16px;
//     }
// `;

// const SearchIcon = styled(Search)`
//     position: absolute;
// 	right: 30px;
// 	top: 34px;
// 	display: block;
//     @media (max-width: 600px) {
//         display: none;
//     }
// `

type DebouncedSearchInputProps = {
    onSearchChange: (search: string) => void;
    placeholder?: string;
    delay?: number;
    disabled?: boolean;
};

export const DebouncedSearchInput = ({
    onSearchChange,
    placeholder = "Search...",
    delay = 300,
    disabled = false,
}: DebouncedSearchInputProps) => {
    const [searchValue, setSearchValue] = useState("");

    useDebounce(() => onSearchChange(searchValue), delay, [searchValue]);

    return (
        <div className="relative self-center">
            <input
                className="px-3 py-2 bg-slate-200 text-slate-800 font-bold"
                type="search"
                placeholder={placeholder}
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchValue(e.target.value);
                }}
                disabled={disabled}
            />
            {!searchValue && <Search className="text-slate-800 absolute top-2 right-2" />}
        </div>
    );
}