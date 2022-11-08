import React, { Suspense } from "react"
import { Prose } from "@components/atoms"
import { PRichText } from "@lib/richtext"
import ReactLoading from "react-loading"
import Loader from "@components/atoms/loader"

const Showroom = React.lazy(() => import("./lazy/showroom"))

const ShowroomSlice = ({ slice }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Showroom slice={slice} />
    </Suspense>
  )
}

export default ShowroomSlice
