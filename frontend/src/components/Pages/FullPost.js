import React from 'react'
import "./FullPost.css";

const FullPost = (props) => {
    return (
        <React.Fragment>
            <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
                <div class="row">
                    <div class="col-sm-4 border-right">
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C4D0BAQFgRYqaa_6VCA/company-logo_200_200/0/1614621724734?e=1625702400&v=beta&t=9l7X89Suc7Gll9z_Haw8Tcke0yhbEI6I_b3PEHfHSE8"
                            className="d-inline"
                            width="200"
                            height="200"
                            alt="img"
                        ></img>
                    </div>
                    <div class="col-sm-4">
                        <h1>Titlu</h1>
                        <p>Locuri disponibile:12</p>
                        <p>Firma:IBM</p>
                        <p>Locatie:Timisoara</p>
                        <p>Tip:La birou</p>
                    </div>
                </div>
            </div>

            <div class="container p-5 my-3 bg-white text-black rounded-lg shadow ">
                <div class="row justify-content-space-around ">
                    <div class="col-sm-7 justify-content-between align-self-center">
                        <div class="item">
                            <h3>Descriere Job:</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div class="col-md-3 offset-1 a border-left ">
                        <div class="item">
                            <h3>Aplica acum</h3>
                            <p>Lorem ipsum dolor..</p>
                            <ul>
                                <li class="align-self-center">
                                    Contact1
                            </li>
                                <li class="align-self-center">
                                    Contact2
                            </li>
                                <li class="align-self-center">
                                    Contact3
                            </li>
                                <li class="align-self-center" >
                                    Contact4
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
                <div class="row">

                    <div class="item  border-bottom">
                        <h3>Nume Comentator</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div class="item border-bottom">
                        <h3>Nume Comentator</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                    <div class="item border-bottom">
                        <h3>Nume Comentator</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>


                    <div class="item  border-bottom">
                        <h3>Nume Comentator</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default FullPost
