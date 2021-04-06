import React from 'react'

const Job = (props) => {
    return (
        <React.Fragment>
            <div>
                <p>{props.nume}</p>
                <p>{props.descriere}</p>
                <p>{props.tip}</p>
                <p>{props.locatie}</p>
            </div>

        </React.Fragment>

            
        
    )
}

export default Job;