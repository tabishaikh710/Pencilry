import AddTitle from './addTitle'
import LanguagesSpeak from './languagesSpeak'
import Info from './info'
import SkillsShow from './SkillsShow'
import EducationHistory from './EducationHistory'
import WorkExperience from './WorkExperience'
import KindOfWork from './KindOfWork'
import Bio from './bio'

function renderContentProfileform ({currentTab}) {
    
    const renderContent=()=>{

     switch (currentTab) {
        case 1:
            return(
                <AddTitle/>
            )
            case 2:
                return(
                    <LanguagesSpeak/>
                )
               
            case 3:
                  
                   return(
                    <Info/>
                   )

                   case 4:
                  
                   return(
                    <SkillsShow/>
                   )

                   case 5:
                  
                   return(
                    <EducationHistory/>
                   )
                   case 6:
                  
                   return(
                    <WorkExperience/>
                   )

                   case 7:
                  
                   return(
                    <KindOfWork/>
                   )

                   case 8:
                  
                   return(
                    <Bio/>
                   )
           
           
           
            
           
           
           
     
        default:
        return <h1>form submited</h1>;
     }

    
    }


      return renderContent()

}


export default  renderContentProfileform;

