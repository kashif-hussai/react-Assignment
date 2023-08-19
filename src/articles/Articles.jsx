 import React from "react"
 import grilIcon from "../images/Image (1).svg"
 import grilIcon2 from "../images/Image (2).svg"
 import grilIcon3 from "../images/Image.svg"
 import icon4 from "../images/icon2.svg"

 const Articles = () => {
    return(
         <div class="my-5">
            <div>
                <h2 class="text-center pt-5"> Latest article </h2>
            </div> 

             <div class="row pt-4 mt-5">
                <div class="col-md-2">
        
                    </div> 

                <div class="col-md-3">
                <div><img src={grilIcon3 } class="img-fluid" alt="" />
                    </div>
                    <div>
                        <p>April 02, 2022</p>
                        <h5>Build an Athletic Body <br />
                         With In Eight Weeks Time</h5>
                    </div>
                </div>

                <div class="col-md-3">
                <div><img src={grilIcon } class="img-fluid" alt="" />
                    </div>
                    <div>
                        <p>April 02, 2022</p>
                        <h5>Build an Athletic Body <br />
                         With In Eight Weeks Time</h5>
                    </div>
                </div> 
                <div class="col-md-3">
                <div><img src={grilIcon2 } class="img-fluid" alt="" />
                    </div>
                    <div>
                        <p>April 02, 2022</p>
                        <h5>Build an Athletic Body <br />
                         With In Eight Weeks Time</h5>
                    </div>
                    </div> 
             


            </div>
         </div>
   )
 }
    export default Articles