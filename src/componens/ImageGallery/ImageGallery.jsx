import css from "./ImageGallery.module.css"

export default function ImageGallery({ img }) {
    if (!img || img.length === 0) {
      return null; 
    }
  
    return (
      <ul className={css.ul}>
        {img.map((e, index) => (
          <li key={index} className={css.li}>
            
               <img src={e.urls.small} alt={e.alt_description} className={css.img}/>
        
          </li>
        ))}
      </ul>
    );
  }
  