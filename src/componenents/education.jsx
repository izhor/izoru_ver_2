import React from "react";

function Education() {
    return(
        <div className="container">
            <div className="columns is-vcentered mx-2">
                <div className="column has-text-centered">
                    <div className="title">Why Education..?</div>
                </div>
                <div className="column subtitle-is-5">
                    Education hold many important role to several aspects of our life, 
                    from financial, to social. Education might not making you as great as the top 1%, 
                    but will improve one's life either slight or significant, and play a minor role in character 
                    development of an individual.
                    <br />
                    <br />
                <p class="has-text-centered">
                    “Education is one thing no one can take away from you.”
                </p>
                <p className="has-text-centered">
                    - <strong>Elin Nordegren</strong>
                </p>
                </div>
            </div>
            <div className="columns is-vcentered" style={{"margin-top":"100px"}}>
                <div className="column is-flex is-justify-content-center">
                    <img src="/page-img/Education.png" alt="" className="image m-4 custom-size" height="150"/>
                </div>
                <div className="column ">
                    <div className="box m-4">
                        <div className="title is-5">
                            10 Vocational High School
                        </div>
                        <div className="subtitle is-6">
                            <div className="is-italic">
                                Software Engineering
                            </div>
                            <i class="fa-solid fa-location-dot has-text-danger"></i> Jakarta, Indonesia
                            <br />
                            2017 - 2020
                        </div>
                    </div>
                    <div className="box m-4">
                        <div className="title is-5">
                            Indraprastra University
                        </div>
                        <div className="subtitle is-6">
                            <div className="is-italic">
                                Informatics Engineering
                            </div>
                            <i class="fa-solid fa-location-dot has-text-danger"></i> Jakarta, Indonesia
                            <br />
                            2020 - Today
                        </div>
                    </div>
                </div>
            </div>
                  
        </div>
    )
}

export default Education;