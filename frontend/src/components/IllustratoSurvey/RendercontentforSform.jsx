import QuesFive from "./QuesFive";
import QuesFour from "./QuesFour";
import QuesOne from "./QuesOne";
import QuesThree from "./QuesThree";
import QuesTwo from "./QuesTwo";

function RendercontentforSform({currentTab}) {
    
    const renderContent=()=>{

     switch (currentTab) {
        case 1:
            return(
                <QuesOne/>
            )
            case 2:
                return(
                    <QuesTwo/>
                )
              
           
            
           
           
           
     
        default:
        return <h1>form submited</h1>;
     }

    

    }
    
    
    
    
    
    
    
    return(
        renderContent()
    )
}

export default RendercontentforSform;