import style from "../../style/illustretorProfilrForm/info.module.css"
function Info(){

return(
    <>
    
    <h1>
    A few last details, then you can check and publish your profile.
    </h1>
    

      <div  className={style.infoFormContaimer}>
       
       <div className={style.item} id={style.imageContainer}></div>
       <div className={style.item} id={style.FormContainer}></div>
        
      </div>


    </>
)


}

export default Info;