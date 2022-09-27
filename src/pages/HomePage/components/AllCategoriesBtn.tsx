import { useEffect, useState } from "react";
import { IProps, ICoinEcosytems } from "../../../types/coinGecko.interface";
import "../../../css/AllCategoriesBtn.css";

const AllCategoriesBtn = ({ coinEcosystems }: IProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [categories, setCategories] = useState<ICoinEcosytems[]>();

  useEffect(() => {
    setCategories(coinEcosystems);
  }, [isSelected]);

  const search = (name: string) => {
    setCategories(
      coinEcosystems?.filter((category) => {
        return category.name.includes(name);
      })
    );
  };

  return (
    <div className="allCategories__container">
      <button
        onClick={() => setIsSelected((prev) => !prev)}
        className="allCategories__btn"
      >
        All Categories
      </button>
      <div
        className={
          isSelected
            ? "allCategories__listContainer"
            : "allCategories__listContainerHide"
        }
      >
        <div>
          <input
            type="text"
            placeholder="Search.."
            onChange={(e) => search(e.target.value)}
          />
        </div>
        <ul
          className="allCategories__list"
          tabIndex={0}
          onBlur={() => setIsSelected(false)}
        >
          {categories?.map((ecosystem) => (
            <li className="allCategories__nameContainer">{ecosystem.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategoriesBtn;
