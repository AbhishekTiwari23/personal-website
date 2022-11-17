import React from 'react'

const Githubwrapper = () =>{
    return(
        <div className="githubWrapper">
            <div className="stats">
                <div className="totalStars"></div>
                <div className="totalCommits"></div>
                <div className="totalPR"></div>
                <div className="totalIssues"></div>
                <div className="contributedto"></div>  
            </div>
            <div className="companies">
                <div className="organisation"></div>
                <div className="mainCompany"></div>
            </div>
        </div>
    )
}
export default Githubwrapper;