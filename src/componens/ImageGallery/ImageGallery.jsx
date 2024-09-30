



export default function ImageGallery({ img }) {
    if (!img || img.length === 0) {
      return null; 
    }
  
    return (
      <ul>
        {img.map((e, index) => (
          <li key={index}>
            <div>
              <img src={e.url} alt={e.alt} />
            </div>
          </li>
        ))}
      </ul>
    );
  }
  