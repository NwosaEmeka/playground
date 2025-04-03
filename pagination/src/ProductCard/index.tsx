import "./ProductCard.styles.scss";

const ProductCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default ProductCard;
