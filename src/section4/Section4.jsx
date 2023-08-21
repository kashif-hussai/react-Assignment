 import React from "react"
import icon1 from "../images/icon2.svg"
 import page from "../images/page.svg"
 import light from "../images/light.svg"
 import phone from "../images/phone.svg"
 import book from "../images/book.svg"
 import sideicon2 from "../images/sideicon2.png"



 const Section4 = () => {     return(
        <div class="my-5">
             <div class="row">

                <div class="col-md-2 position-relative">
                    <div  class="position-absolute top-50 start-0 translate-middle-y">
     <img src={sideicon2} alt=" icon" />
     </div> 
                    </div> 
                <div class="col-md-5 my-5">
                    <div>
                        <h4> <u> Create beautifullayouts <br /> simply </u></h4>
                    </div>
                    <div class="pt-5">
                       <img height="50px" width="50px" src={book} class="img-fluid" alt="" />
                    </div>
                    <div class="pt-5">
                        <h3 class="">Bring your ideas to <br /> life</h3>
                        <p class="py-3"> There are some known issues with variable <br />
                         fonts in Chrome, in particular on Microsoft <br />
                          Windows</p>
                    </div>
                    <div>
                        <div class="pt-4"> 
                            <img height="50px" width="50px" src={page} class="img-fluid" alt="" />
                        </div>
                        <h3 class="py-3">Bring your ideas to <br /> life</h3>
                        <p class="py-3"> There are some known issues with variable <br />
                         fonts in Chrome, in particular on Microsoft <br />
                          Windows</p>

                    </div>
                </div>

                <div class="col-md-5 my-4 ">
                            
          
                <div>
                        <p class="py-3">There are many variations of passages of Lorem Ipsum <br />
                         available, but the majority have suffered alteration in some <br />
                         form, by injected humour, or randomised words</p>
                    </div>
                    <div class="pt-3">
                        <img height="50px" width="50px" src={light} class="img-fluid" alt="" />
                    </div>
                    <div class="pt-3">
                        <h3 class="">Bring your ideas to <br /> life</h3>
                        <p class=" py-3"> There are some known issues with variable <br />
                         fonts in Chrome, in particular on Microsoft <br />
                          Windows</p>
                    </div>
                    <div>
                        <div class="pt-4">
                            <img height="50px" width="50px" src={phone} class="img-fluid" alt="" />
                        </div >
                        <h3 class="py-3">Bring your ideas to <br /> life</h3>
                        <p class="py-3"> There are some known issues with variable <br />
                         fonts in Chrome, in particular on Microsoft <br />
                          Windows</p>

                    </div>
                </div>
                {/* <div class="col-md-1">
                        <div class="position-relative">
                            <div class="position-absolute top-50 start-50"> <img  src={icon1} class="img-fluid" alt="" /></div>
                        </div>
                </div> */}


             </div>
         </div>
     )
 }
     export default Section4