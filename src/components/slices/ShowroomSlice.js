import React from "react"
import { Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import Showroom from "@components/molecules/showroom"

const ShowroomSlice = ({ slice }) => {
  const { primary, items } = slice
  const { title } = primary

  return (
    <Showroom title={<PRichText field={title.richText} />}>
      {items.map(({ showroom }, key) => {
        const { interests, showroom_image, title } = showroom?.document.data
        return (
          <Showroom.Room title={title} bgImage={showroom_image}>
            {interests?.map((interest, key) => {
              const {
                interest_content,
                interest_image,
                interest_title,
                x_axis_percent,
                y_axis_percent,
                is_popup_right,
              } = interest

              return (
                <Showroom.RoomInterest
                  pos={{ y: y_axis_percent, x: x_axis_percent }}
                  isRight={is_popup_right}
                  bgImage={interest_image}
                  key={key}
                >
                  <Prose>
                    <PRichText field={interest_title.richText} />
                    <PRichText field={interest_content.richText} />
                  </Prose>
                </Showroom.RoomInterest>
              )
            })}
          </Showroom.Room>
        )
      })}
    </Showroom>
  )
}

export default ShowroomSlice
