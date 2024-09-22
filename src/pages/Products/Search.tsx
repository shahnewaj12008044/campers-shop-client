import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

interface QueryParams {
  search?: string;
  price?: string;
  category?: string;
  sort?: string;
}

interface SearchProps {
  setQueryParams: (params: QueryParams) => void;
  queryParams: QueryParams;
}

const Search: React.FC<SearchProps> = ({ setQueryParams, queryParams }) => {
  const { register, handleSubmit } = useForm();
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("price");

  const onSubmit = (data: FieldValues) => {
    const search = data.search;
    setQueryParams({ ...queryParams, search });
  };

  const handleClear = () => {
    setPrice("");
    setSort("");
    setQueryParams({});
  };

  const handleFilterChange = (filterKey: string, value: string) => {
    setQueryParams({ ...queryParams, [filterKey]: value });
  };

  const toggleSort = () => {
    const newSort = sort === "price" ? "-price" : "price";
    setSort(newSort);
    handleFilterChange("sort", newSort);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 py-4 flex flex-col md:flex-row gap-4 justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-sm items-center"
      >
        <Input
          className="focus-visible:ring-offset-0 rounded-r-none bg-gray-100"
          type="text"
          placeholder="Search..."
          {...register("search")}
        />
        <Button type="submit" className="btn-primary">
          <FaSearch />
        </Button>
      </form>
      <div className="flex items-center justify-between gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-gray-500 font-semibold">
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Filter by Price</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                     value={price}
                     onValueChange={(value) => {
                       setPrice(value);
                       handleFilterChange("price", value);
                     }}
                  >
                    <DropdownMenuRadioItem value="0-40">
                      0-40
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="41-50">
                      41-80
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="81-1000">
                      81-1000
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Filter by Categories</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={queryParams.category}
                    onValueChange={(value) => {
                      handleFilterChange("category", value);
                    }}
                  >
                    <DropdownMenuRadioItem value="backpacks">
                      Backpacks
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="cookware">
                      Cookware
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="tents">
                      Tents
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="accessories">
                      Accessories
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          onClick={handleClear}
          className="font-semibold border-gray-500"
        >
          Clear
        </Button>
      </div>
      <div>
        <Button
          variant="outline"
          onClick={toggleSort}
          className="font-semibold border-gray-500"
        >
          Sort: {sort === "-price" ? "Low to High" : "High to Low"}
        </Button>
      </div>
    </div>
  );
};

export default Search;
