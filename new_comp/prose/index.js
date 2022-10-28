import React, { FC } from "react"
import classNames from "classnames"
import styled from "styled-components"
import PropTypes from "prop-types"

const ProseStyled = styled.div`
  > blockquote,
  > p,
  > ul,
  > ol {
    margin-top: 15px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin-bottom: 15px;
  }

  strong {
    font-weight: bold;
  }
`

export const Prose = ({
                        align = "left",
                        children,
                        ...props
                      }) => {
  return (
    <ProseStyled className={classNames(`align-${align}`)} {...props}>
      {children}
    </ProseStyled>
  )
}

Prose.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"])
}

export default Prose
