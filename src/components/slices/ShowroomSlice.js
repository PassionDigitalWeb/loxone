import React, { Suspense } from "react"
import Loader from "@components/atoms/loader"

const Showroom = React.lazy(() => import("./lazy/showroom"))

export const ShowroomSlice = ({ slice }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Showroom slice={slice} />
    </Suspense>
  )
}

export default ShowroomSlice
