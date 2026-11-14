
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import { categories } from "../data/menu";
import Footer from "../components/Footer";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  console.log(category)

  if (!category) {
    return (
      <>
        <Header />
        <div className="not-found">
          <h2>Category Not Found</h2>
          <Link to="/">Back to Menu</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="category-page">

        <section className="category-banner">
          {/* <img src={category.image} alt={category.name} height={200}/> */}

          <div className="category-banner-content">
            <span className="gold-label">
              BBC FOOD COLLECTION
            </span>
            <br/>
            <br/>

            <h1>{category.name}</h1>
            <p>{category.description}</p>

            <span>{category.items.length} Menu Items</span>
          </div>
        </section>

        <section className="products-section">
          <div className="section-heading">
            <h2>
              Choose Your <em>Favourite</em>
            </h2>
          </div>
           <Link to="/" className="back-link">
          <ArrowLeft size={18} />
          Back to Categories
        </Link>
          <div className="product-grid">
            {category.items.map((item, index) => (
              <article className="product-card" key={item.name}>
                <div className="product-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                  <span className="product-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="product-details">
                  <h3>{item.name}</h3>

                  <p>
                    Freshly prepared at BBC with quality
                    ingredients.
                  </p>

                  <div className="product-bottom">
                    <strong className="price">
                      ₹{item.price}
                    </strong>

                    <span className="fresh-label">
                      FRESHLY MADE
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}
