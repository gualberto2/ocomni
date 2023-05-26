import React from 'react';


export default function HomePage() {
  return (
    <div className="mx-8 md:flex lg:flex"> {/* This is the parent div needed for react the project looses spacing and padding without stuffhere */}
        <div className="lg:w-[800px]"> {/* As of now this div affects the <h1> and  */}
          <h1 className="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl font-extrabold">
            E-Commerce Powered by <span className="text-purple">OCOMNI</span>
          </h1>
          <p className="">Professional grade E-Commerce Solutions</p>
        </div>
        <div className="">
          <div> {/* Call to action button that folds/wraps with mobile */}
            <button className="">
                <span className="">
                  Work with us
                </span>
            </button>
          </div>
        </div>
        <div className=""> {/* THIS IS WHERE SVG IMG GOES */}
        {/* Below is the div for the png img, we want it sideways on lg screen and column on sm screen */}
        <div className="">
          <div> {/* TRY TO ADD SVG IMG BELOW FOR RESPONSIVENESS */}
            <img src="https://raw.githubusercontent.com/akibiaons/ocomni-art/main/ocomni/public/ocomni-home.png" alt="home illistration" />
          </div> 
        </div>
      </div>
    </div>
  )
}
