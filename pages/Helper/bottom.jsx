import React from 'react'
import Link from 'next/link'

export default function bottom() {
  return (
    <div className="bottom">
        <div className="contact">
          <div className="location">
            <img
              className="imgt"
              src="https://cdn-icons-png.flaticon.com/256/535/535137.png"
              alt="Location"
              width="20"
              height="30"
            />
            <h3 className="topicstyle">Address</h3>
          </div>
          <div className="address-div">
            <text className="pgalbumtext">Patna, Bihar</text>
            <text className="pgalbumtext">Contact : +917005742790</text>
            <text className="pgalbumtext">
              Email : dreamplanner4199@gmail.com
            </text>
          </div>
        </div>

        <div className="follow">
          <h2>Follow us</h2>
          <div className="social">
            <Link href="https://www.instagram.com/dreamplanner___/">
              <div className="in">
                <text className="in">Instagram</text>

                <img
                  src="https://cdn-icons-png.flaticon.com/256/2111/2111463.png"
                  className="imgt"
                  alt="Instagram"
                />
              </div>
            </Link>
            <Link href="https://www.facebook.com/AryanbabaRN">
              <div className="wt">
                <text className="wt">Whatsapp</text>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/3992/3992601.png"
                  className="imgt"
                  alt="Whatsapp"
                />
              </div>
            </Link>
            <Link href="https://www.youtube.com/channel/UCm-5IAa0v0Ozd5oQnO9NP5g">
              <div className="yt">
                <text className="yt">Youtube</text>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/174/174883.png"
                  className="imgt"
                  alt="Youtube"
                />
              </div>
            </Link>
            <Link href="https://wa.me/+917005742790">
              <div className="fb">
                <text className="fb">Facebook</text>
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2504/2504903.png"
                  className="imgt"
                  alt="Facebook"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="partner">
          <h2>Our Channel Partner</h2>
          <div className="cp">
            <Link href="https://www.akchhatfilmsproduction.com/">
              <img
                src="https://media.licdn.com/dms/image/C4D16AQHz_u7EBZvUoA/profile-displaybackgroundimage-shrink_350_1400/0/1593088031766?e=1700697600&v=beta&t=QyX-KXFlsYOy0qCZXkkRpekwVKGiBMfNiEg8QHZc-P8"
                width="300rem"
                height="150rem"
                alt="Channel Partner"
                className="akshat"
              />
            </Link>
          </div>
        </div>
      </div>
  )
}
