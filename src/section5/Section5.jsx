 import "./style.css"
 import starIcon from "../images/star-icon.svg"
 import manIcon from "../images/man-icon.svg"
 import manIcon1 from "../images/rightIcon.svg"
 import manIcon2 from "../images/leftIcon.svg"
 


 const Section5 = () => {
    return(
      <div> 
            <div className='row pb-5 mt-5 pt-5 bg-col'>
                <div className='col-md-2'><img src={manIcon2 } alt="" /></div>
                <div className='row ms-1 col-md-8'>
                <div className='col-md-4'> <h3><u>We’ve got friends</u></h3> <br />
                <div class="  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex py-2"><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                <div class="mt-4  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex py-2 "><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                </div>
                <div className=' mt-5 pt-5 col-md-4'>
                <div class="  px-3 mt-4 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex py-2 "><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                <div class="mt-4  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex py-2 "><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                </div>
                <div className='col-md-4 position-relative'>
                  <button class="position-absolute top-0 end-0  btn-light mt-2 me-3 btn-color " type="submit"> <b>Join For Free</b></button> <br />
       
                <div class=" mt-5 px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex py-2 "><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                <div class="mt-4  px-3 header-bg bg-card ">
                <div class="pt-3 "><img src={starIcon} alt="" /></div>
                <p class="pt-3">“You made it so simple. My new site is so <br />
                 much faster and easier to work with than <br />
                  my old site. I just choose the page, make <br />
                  the change & it is a good channel for us.”</p>
                  <div class="d-flex py-2"><img src={manIcon} alt="" />
                   <span class="px-3 pt-2"><h5>Leslie Alexander</h5> Founder</span> </div>
                </div>
                </div>
                </div>
                <div className='col-md-2 position-relative'>
                     <img src={manIcon1} alt="" className='position-absolute top-0 end-0' /></div>

            </div>
        </div>
     )
 }
     export default Section5