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

export const EmailInput = props => {
  const { label, name, placeholder, description, required, register, errors } =
    props

  const fieldErrors = errors ? errors[name] : false

  return (
    <>
      <div
        className={cx(styles.formFieldEmailWrap, fieldWrapClass(fieldErrors))}
      >
        <FormLabel
          label={label}
          required={required}
          description={description}
        />
        <FormElementWrap>
          <input
            className={cx(styles.formFieldEmail, fieldClass())}
            type="text"
            placeholder={placeholder}
            {...register(name, {
              ...validationSetup(props),
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
        </FormElementWrap>
        {errors && <FormErrors name={name} errors={errors} />}
      </div>
    </>
  )
}