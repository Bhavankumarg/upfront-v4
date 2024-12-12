import React from 'react'
import Banner from './Banner'
import WhoWeAre from './WhoWeAre'
import WhatWeDo from './WhatWeDo'
import OurReach from './OurReach'
import OurLocations from './OurLocations'
import ThematicAreas from './ThematicAreas'
import OurCollaborators from './OurCollaborators'
import ReachCarousel from './CarouselReach'

const index = () => {
  return (
    <div>
      <Banner/>
      <WhoWeAre/>
      <WhatWeDo/>
      <OurReach/>
      {/* <ReachCarousel/> */}
      <OurLocations/>
      <ThematicAreas/>
      <OurCollaborators/>
    </div>
  )
}

export default index
