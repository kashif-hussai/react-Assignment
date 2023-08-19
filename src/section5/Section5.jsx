 import React from "react"
 import starIcon from "../images/star-icon.svg"
 import manIcon from "../images/man-icon.svg"
 import manIcon1 from "../images/rightIcon.svg"
 


 const Section5 = () => {
    return(
        <div class="card-5 white-bg">
         
             <div class="row">
               {/* <div> 
               <h1>We’ve got friends</h1> 
               <div class="class="col-md-4 offset-md-4>
               <button type="button" class="btn btn-warning">Warning</button>
               </div>
               </div> */}
                <div class="col-md-2"> 
                </div> 

                <div class="col-md-3 border px-3 white-bg ">
                <div class="pt-3  "><img src={starIcon} alt="" /></div>
                <p class="pt-3 white-bg">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5"><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h6>Leslie Alexander</h6></span></div>
                </div> 
                
                <div class="col-md-3 border px-3 mt-5">
                <div class="pt-3"><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5"><img src={manIcon} alt="" />
                   <span class="px-3 py-2"><h6>Leslie Alexander</h6></span></div>
                </div>  

                <div class="col-md-3 border px-3 ">
                <div class="pt-3"><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex pt-5"><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h6>Leslie Alexander</h6></span></div>
                </div> 
                
                <div class="col-md-1 position-relative">
                  
                     <div class="position-absolute top-0 start-0">
                        <img height="50px" src={manIcon1} class="img-fluid" alt="" />
                  </div>
                  </div> 


            </div>
        </div>
     )
 }
     export default Section5