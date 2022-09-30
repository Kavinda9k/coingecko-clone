import { useEffect, useState } from "react";
import { IProps, ICoinEcosytems } from "../../../types/coinGecko.interface";
import "../../../css/AllCategoriesBtn.css";

const AllCategoriesBtn = ({ coinEcosystems }: IProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [allcategories, setAllCategories] = useState<ICoinEcosytems[]>();

  useEffect(() => {
    setAllCategories(coinEcosystems);
  }, [isSelected]);

  const searchCategories = (name: string) => {
    setAllCategories(
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
            onChange={(e) => searchCategories(e.target.value)}
          />
        </div>
        <ul
          className="allCategories__list"
          tabIndex={0}
          onBlur={() => setIsSelected(false)}
        >
          {allcategories?.map((ecosystem, index) => (
            // Make sure you include a key on the topmost element whenever you do a mapping like this, so that React knows how to render everything more efficiently 
            <li key={index} className="allCategories__nameContainer">{ecosystem.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllCategoriesBtn;
