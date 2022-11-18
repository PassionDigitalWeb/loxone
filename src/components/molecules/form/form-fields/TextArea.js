import React from "react"
import {
  fieldClass,
  fieldWrapClass,
  FormElementWrap,
  FormErrors,
  FormLabel,
  validationSetup,
} from "../form-fields"

import classNames from "classnames/bind"
import * as styles from "../form.module.scss"

let cx = classNames

export const TextArea = props => {
  const { label, name, placeholder, required, description, register, errors } =
    props

  const fieldErrors = errors ? errors[name] : false

  return (
    <>
      <div
        className={cx(styles.formFieldTextWrap, fieldWrapClass(fieldErrors))}
      >
        <FormLabel
          label={label}
          required={required}
          description={description}
        />
        <FormElementWrap>
          <textarea
            className={cx(styles.formFieldTextarea, fieldClass())}
            placeholder={placeholder}
            {...register(name, validationSetup(props))}
          />
        </FormElementWrap>
        <FormErrors name={name} errors={errors} />
      </div>
    </>
  )
}
