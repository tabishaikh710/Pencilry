import style from "../../style/illustretorProfilrForm/info.module.css"
import { Button, Dropdown, Input, Page, setOptions } from '@mobiscroll/react';
function Info(){
  setOptions({
    theme: 'ios',
    themeVariant: 'dark'
  });
return(
    <>
    
    <h1>
    A few last details, then you can check and publish your profile.
    </h1>
    

      <div  className={style.infoFormContaimer}>
       
       <div className={style.item} id={style.imageContainer}>
         <div className={style.showprofile}></div>

        <div className={style.imageUpload}>
        <input type="file" id="image" name="image" accept=".jpg," />

        </div>
        
       </div>
       <div className={style.item} id={style.FormContainer}>
        
       </div>
        
      </div>


    </>
)


}

export default Info;