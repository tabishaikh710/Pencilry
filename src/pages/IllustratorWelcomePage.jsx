import  style  from "../style/illustretorRegistretion/iillustratorWel.module.css";
function IllustratorWelcomePage() {
    return(
        <>
        <div className={style.welcomePage}>

            <div className="welcomePageContent">
            <h1>Welcome  Illustrator Ready for your next big opportunity?</h1>
            <ul>
                <li>Answer a few questions and start building your profile</li>
                <li>Apply for open roles or list services for clients to buy</li>
                <li>Get paid safely and know we’re there to help</li>
            </ul>
            <div className={style.bottomIllustretoWelcome}> 
            <button className={style.Ilbutton}>
                Get started
            </button>
            <p>
            It only takes 5-10 minutes <br/> you can edit it later. We’ll save as you go.
            </p>
            </div>
            
            </div>
            <div className="welcomePageContent">
            <h1>Welcome  Illustrator Ready for your next big opportunity?</h1>
            </div>

        </div>
        </>
    )
}
export default IllustratorWelcomePage;