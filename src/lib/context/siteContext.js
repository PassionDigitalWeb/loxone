import React, { createContext, useEffect, useMemo, useState } from "react"
import { useLocation } from "@gatsbyjs/reach-router"

export const SiteContext = createContext({
  bookingModalOpen: false,
  openBookingModal: () => {},
  closeBookingModal: () => {},
})

export const SiteProvider = ({ children }) => {
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (location.hash === "#booking_modal") setModalOpen(true)
  }, [location])

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }
  }, [modalOpen])

  const contextValue = useMemo(() => {
    return {
      bookingModalOpen: modalOpen,
      openBookingModal: () => setModalOpen(true),
      closeBookingModal: () => setModalOpen(false),
    }
  }, [modalOpen])

  return (
    <SiteContext.Provider value={contextValue}>{children}</SiteContext.Provider>
  )
}
