
import reactangular2 from "../images/Rectangle 5.svg"
import arrow from "../images/image 786.svg"

const CardComonent = () => {
    return(
        <div>
            <div class="row mt-5 ">
                <div class="col-md-2 card-bg-color position-relative">

                    <div class="position-absolute bottom-0 end-0"> <img height="150px" src={arrow} alt="" /></div>
                </div>
                <div class="col-md-5 card-bg-color pt-5 ">
                    <h3>Start teaching <br />
                     app development</h3>
                     <div>
                        <p>There are some known issues with variable fonts <br />
                         in Chrome, in particular on Microsoft Windows</p>

                     </div>
                     <div class pt-3 >
                        <h4> <u>See More </u></h4>
                     </div>
                    </div> 
                <div class="col-md-5 ps-0 ">
                <div><img   src={reactangular2} class="img-fluid"  alt=" image 2" /></div> 
                </div>

            </div>
        </div>
     )
}
     export default CardComonent