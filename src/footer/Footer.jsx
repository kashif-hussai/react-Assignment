 import React from "react"
 import socil from "../images/Social.svg"

 const Footer = () => {
     return(
        <div class="footer">
            <div class="row my-5 pt-5">
                <div class="col-md-1 ">
                </div> 

                <div class="col-md-4 text-white">
                      <h6>Ui/Ux Desogner</h6>
                </div> 
                <div class="col-md-3 text-center text-white">
                <div class="space" > 
                        <div> About</div> 
                        <div>Features</div>  
                         <div>Pricing</div>  
                        <div>Get Started</div> 
                         </div>
                    </div> 
                <div class="col-md-4">
                <h6 className="text-center ">
                    <div>
                        <img src={socil} alt="" />
                    </div>
                </h6>


                
                    </div>   


             </div>

             <div class="row">
                
             <div class="px-5">
    <footer class="d-flex  justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-white">&copy; 2023 Company, Inc</p>

   

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Privacy Policy</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Terms & Conditions</a></li>
    
    </ul>
  </footer>
</div>
             </div>
             </div>
        
     )
 }
    export default Footer