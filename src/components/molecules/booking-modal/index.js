import React, { useContext } from "react"
import Modal from "@components/molecules/modal"
import { SiteContext } from "@lib/context/siteContext"
import { Heading, Prose, Spacer } from "@components/atoms"

export const BookingModal = ({ ...props }) => {
  const siteContext = useContext(SiteContext)

  return (
    <Modal
      isOpen={siteContext.bookingModalOpen}
      onClose={siteContext.closeBookingModal}
    >
      <Prose>
        <Heading node="div" variant="h2">
          Book a showroom tour
        </Heading>
      </Prose>
      <Spacer y="xsm" />
      <iframe
        src="https://outlook.office365.com/owa/calendar/LoxoneFlagshipPartnerAutomate@loxone.london/bookings/"
        width="100%"
        height="99%"
        scrolling="yes"
        style={{ border: 0 }}
      ></iframe>
    </Modal>
  )
}

export default BookingModal
