 import "bootstrap/dist/css/bootstrap.min.css";
 import style from "../style/jobcard.module.css";
function JobCard({ imageSrc, title, text, lastUpdated }) {
    return (
        <div className={`card mb-3 ${style.card}` } style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img 
                src={imageSrc} 
                className="img-fluid rounded-start" 
                alt={title} 
                
              />
            </div>
            <div className="col-md-8">
              <div className={`card-body ${style.cardcontent}`}>
                <h5 className={`card-title ${style.cardtitle }`}>{title}</h5>
                <p className={`card-text ${style.cardtext}`}>{text}</p>
                <p className="card-text">
                  <small className={`text-body-secondary${style.lastupdated}` }>
                    {`Last updated ${lastUpdated}`}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      );

}

export default JobCard;