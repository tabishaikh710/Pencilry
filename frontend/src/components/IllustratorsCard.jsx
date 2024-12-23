function IllustratorsCard({ title, text, imgSrc, imgAlt, btnText}) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top" alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-primary">
            {btnText}
          </button>
        </div>
      </div>
    );
  }
  
  export default IllustratorsCard;
  