import React from "react"
import image2 from "../images/image 786.svg"
import image3 from "../images/sideIcon.png"
import imagecard from "../images/header-group.svg";
const Header = () => {
    return(
        <div class="header-bg">
       
           <div class="row  pt-5 " >
                <div className="col-md-2">
                  
                  <div class=""><img height="100px" width="180px" src={image3} class="img-fluid" alt="" /> </div>  
                  <div class="position-relative">
                  <div class="position-absolute bottom-0 end-0">
                    <img height="29px" width="195px" src={image2}  class="img-fluid"  alt="" />
                  </div>

                  </div>
                </div>
                <div class="col-md-6 pt-5">
                   <h1>
                   UX/UI assets <br /> for creators <br /> worldwide
                   </h1>
                   <p>Becoming a member gives you access to education, <br />
                    resources, and community to help you grow your career <br />
                     and your bank account.</p>
                     <div>
                     
                     </div>
                     
                     <div>
                     <div class="mx -3 py-2">
        <button type="button" class="btn btn-outline-secondary nav-bg ">join now</button>
      </div>
                     </div>

                </div>
                <div class="col-md-4">
                <div><img height="500" width="500px" src={imagecard}  class="img-fluid" alt=" not working " /></div>
                </div>

                </div> 
           
        </div>
    )
}
export default Header