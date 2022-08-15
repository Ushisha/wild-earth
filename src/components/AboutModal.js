import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
const AboutModal = () => {
  return (
    <>
      <a href="#target-content" id="button" className="about">
        About This Project
      </a>
      <div id="target-content" className="about-modal">
        <a href="#" className="close"></a>
        <div id="target-inner" className="about-container">
          <h2>About This Project</h2>
          <p>
            This is a project to track and provide natural events currently
            happening on earth by using NASA's API The Earth Observatory Natural
            Event Tracker (EONET), which is continuously updated natural event
            metadata.
          </p>
          <p>Click event icons on the map to see event info.</p>
          <section>
            <h3>Natural Event Descriptions</h3>
            <ul className="categories">
              <li>
                <Icon
                  icon={locationIcon}
                  className="about-icon"
                  color="red"
                  width="1.5em"
                />
                <strong>WILDFIRES</strong> - Wildfires includes all nature of
                fire, including forest and plains fires, as well as urban and
                industrial fire events. Fires may be naturally caused or
                manmade.
              </li>
              <li>
                <Icon
                  icon="whh:mountains"
                  className="about-icon"
                  color="#a2304f"
                />
                <strong>VOLCANOS</strong> - Related to both the physical effects
                of an eruption (rock, ash, lava) and the atmospheric (ash and
                gas plumes).
              </li>
              <li>
                <Icon
                  icon="whh:storm"
                  className="about-icon"
                  color="#186aaa"
                  width="1.2em"
                />{' '}
                <strong>SEVERE STORMS</strong>- Related to the atmospheric
                aspect of storms (hurricanes, cyclones, tornadoes, etc.).
                Results of storms may be included under floods, landslides, etc.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

export default AboutModal
