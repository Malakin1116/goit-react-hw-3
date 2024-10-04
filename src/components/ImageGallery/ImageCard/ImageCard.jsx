import css from "./ImageCard.module.css"; 

export default function ImageCard({ src, alt, onImageClick }) {
  return (
    <div className={css.card}>
      <img
        src={src} 
        alt={alt} 
        className={css.img}
        onClick={onImageClick} 
      />
    </div>
  );
}