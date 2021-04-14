import React from "react";
import Job from "../Layout/Job";

const Home = () => {
  return (
    <div className="container d-flex flex-column mx-auto">
      <Job
        company="IBM"
        nume="Javascript Developer"
        description="If you are looking for a challenge in the game development industry, our position is the best one for you, be sure to apply!"
        type="Remote"
        location="Iasi, Iasi"
        companyPicture="https://media-exp1.licdn.com/dms/image/C4D0BAQFgRYqaa_6VCA/company-logo_200_200/0/1614621724734?e=1625702400&v=beta&t=9l7X89Suc7Gll9z_Haw8Tcke0yhbEI6I_b3PEHfHSE8"
        when="21/03/2020 14:20"
      ></Job>
      <Job
        company="Nokia"
        nume="Software Enginner Intern"
        description="We are looking for a passionate candidate to take on a software enginnering job."
        type="Remote"
        location="Timis, Timisoara"
        companyPicture="https://media-exp1.licdn.com/dms/image/C4D0BAQG0nzntznSIQg/company-logo_200_200/0/1539073820398?e=1625702400&v=beta&t=98ynnc-9CVm1YA2hfAtARRc1S_Ftzq80xXoBNQ2uSrU"
        when="21/03/2020 16:43"
      ></Job>
      <Job
        nume="Test Engineer"
        description="A position for an individual interested in developing web apps using the latest technologies!"
        type="On-Site"
        location="Bucuresti"
        companyPicture="https://media-exp1.licdn.com/dms/image/C560BAQFYrK_MuDgrbg/company-logo_200_200/0/1519855980055?e=1625702400&v=beta&t=SDSM7JAGCbPtM5k8YawpDiiaym-KksQbvxdsHS2hZ38"
        company="Continental Automotive"
        when="04/05/2020 13:33"
      ></Job>
    </div>
  );
};

export default Home;
