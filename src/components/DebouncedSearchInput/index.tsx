import { Search } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "react-use";


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
                className="px-3 py-2 bg-slate-200 text-slate-800 font-bold text-sm"
                type="search"
                placeholder={placeholder}
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchValue(e.target.value);
                }}
                disabled={disabled}
            />
            {!searchValue && <Search className="text-slate-800 absolute top-2 right-2 w-4" />}
        </div>
    );
}