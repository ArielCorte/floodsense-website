import React, { useState, useEffect, useRef } from 'react'

const Waves = ({ inv, color }) => {
  const [fillColor, setFillColor] = useState(color)
  const waveSVG = useRef()

  useEffect(() => {
    if (waveSVG.current && !color) {
      setFillColor(window.getComputedStyle(waveSVG.current).color)
    }
  }, [])

  return (
    <>
      <div ref={waveSVG}>
        {inv ? (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill={fillColor}
              fill-opacity='1'
              d='M0,192L34.3,170.7C68.6,149,137,107,206,96C274.3,85,343,107,411,138.7C480,171,549,213,617,202.7C685.7,192,754,128,823,101.3C891.4,75,960,85,1029,122.7C1097.1,160,1166,224,1234,224C1302.9,224,1371,160,1406,128L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'></path>
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill={fillColor}
              fill-opacity='1'
              d='M0,192L34.3,170.7C68.6,149,137,107,206,96C274.3,85,343,107,411,138.7C480,171,549,213,617,202.7C685.7,192,754,128,823,101.3C891.4,75,960,85,1029,122.7C1097.1,160,1166,224,1234,224C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path>
          </svg>
        )}
      </div>
    </>
  )
}

export default Waves
