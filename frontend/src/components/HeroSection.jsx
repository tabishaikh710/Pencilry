import styles from"../style/HeroSection.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
function HeroSection() {
    return(
        <div className={`${styles.contain} container `}>
         <h1 className={`${styles.heading} `}>Find The Perfect Illustrator For Your Project </h1>
         <p className={`${styles.para} `}>Connect with talented illustrators tobring your ideas to life</p>
         <button  className={`${styles.but} btn btn-secondary`} type="button" >Artest </button>
      </div>
    )
}

export default HeroSection;