
import reactangular1 from "../images/Rectangle 3.svg"
import reactangular2 from "../images/Rectangle 2.svg"
import icon2 from "../images/icon2.svg"

 const CardSection = () => {
    return(
        <div>
             <div class="row mt-5 ">
                <div class="col-md-2">
                    
                    </div> 
                    <div class="col-md-4">
                    <div><img src={reactangular2} class="img-fluid"  alt=" image 2" /></div>  
                        <div class="py-4">
                            <h3>Design</h3>
                        </div>
                        <div>
                            <p class="">There are some known issues with <br />
                             variable fonts in Chrome, in particular <br />
                              on Microsoft Windows</p>
                        </div>
                    </div> 
                    <div class="col-md-4">
                    <div><img src={reactangular1} class="img-fluid"  alt=" image 2" /></div> 
                    <div class="py-4">
                            <h3>Design</h3>
                        </div>
                        <div>
                            <p>There are some known issues with <br />
                             variable fonts in Chrome, in particular <br />
                              on Microsoft Windows</p>
                        </div> 
                    </div> 
                    <div class="col-md-2">
                        <div><img height="300px" src={icon2} class="img-fluid" alt="" /></div>
                    </div> 


            </div>
        </div>
     )
}
    export default CardSection