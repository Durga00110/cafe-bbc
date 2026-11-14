import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Category } from "../types/menu";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      to={`/menu/${category.id}`}
      className="category-card"
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
      />

      <div className="card-overlay">
        <span className="item-count">
          {category.items.length} ITEMS
        </span>

        <h3>{category.name}</h3>

        <p>{category.description}</p>

        <span className="explore">
          Explore Menu
          <ArrowUpRight size={17} />
        </span>
      </div>
    </Link>
  );
}