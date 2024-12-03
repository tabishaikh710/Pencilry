import { useState } from "react";
import  style  from "../../style/paging.module.css";
// const [currentTab, setCurrentTab]=useState("")
function paging() {
   
    return(
<>
<div className={style.container}>
    <div className={style.paging}>
    <button className={style.prev}>Prev</button>
    <button className={style.next} >Next</button>
    </div>

</div>

</>
       
    )
}
export default paging;