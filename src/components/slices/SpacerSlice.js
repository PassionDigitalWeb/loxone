import React from "react"
import Spacer from "@components/atoms/spacer"

export const SpacerSlice = ({ slice }) => {
  const { primary } = slice
  const { x_axis, y_axis } = primary
  return <Spacer x={x_axis} y={y_axis} />
}

export default SpacerSlice
