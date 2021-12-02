import React, { useEffect, useRef } from "react"
import { Form, InputGroup, Col } from "react-bootstrap"
import { Datepicker, DateRangePicker } from "vanillajs-datepicker"
//import "vanillajs-datepicker/dist/css/datepicker-bs4.min.css"
export default function DatepickerComponent(props) {
  const datepickerRef = useRef(false)
  useEffect(() => {
    const datepicker = props.range
      ? new DateRangePicker(datepickerRef.current, {
        buttonClass: "btn",
        format: "mm/dd/yyyy",
        autohide: props.autohide,
      })
      : new Datepicker(datepickerRef.current, {
        buttonClass: "btn",
        format: "mm/dd/yyyy",
        autohide: props.autohide,
        maxNumberOfDates: props.maxNumberOfDates,
      })
    return () => datepicker.destroy()
  }, [])
  return props.range ? (
    <InputGroup ref={datepickerRef}>
      <Form.Control type="text" />
      <InputGroup.Text>To</InputGroup.Text>
      <Form.Control type="text" />
    </InputGroup>
  ) : (
    <Col xs={props.size} className={`${props.className}`}>
      <div className="form-floating">
        <Form.Control
          placeholder=" "
          onBlur={(e) => props.currentValue[props.fieldName] = e.target.value}
          onChange={(e) => props.currentValue[props.fieldName] = e.target.value}
          isValid={props.touched[props.fieldName] && !props.errors[props.fieldName]}
          isInvalid={!!props.errors[props.fieldName]}
          value={props.currentValue[props.fieldName]}
          size={props.size}
          type="text"
          ref={datepickerRef}
        />
        <Form.Label>
          {props.fieldPlaceholder + " *"}
        </Form.Label>
        <Form.Control.Feedback type="invalid">
          {props.errors[props.fieldName]}
        </Form.Control.Feedback>
      </div>
    </Col>
  )
}
