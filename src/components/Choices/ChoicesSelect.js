import React, { useEffect, useRef, useState } from "react"

import Choices from "choices.js"
export default function ChoicesComponent(props) {

  const inputRef = useRef(false)

  console.log()

  const showSelectedOptions = () => {
    const selected = [...inputRef.current.options]
      .filter(option => option.selected)
      .map(option => option.value);
    const result = selected.map((item) => {
      const parts = item.split(" - ", 2);
      let currentItem = parts[0]
      return { [props.options.childName]: currentItem }
    })
    props.values[props.name] = result
    
  }

  useEffect(() => {

    const select = new Choices(inputRef.current, {
      classNames: {
        containerInner: "p-3 choices__inner bg-white",
        list: "p-0",
      },
      placeholder: true,
      searchPlaceholderValue: "Search",
      itemSelectText: "Select",
      removeItemButton: true,
      noResultsText: "No se encontró",
    })

    return () => select.destroy()

  }, [])
  return (
    <div className="position-relative">
      <select
        onChange={props.multiple ?  showSelectedOptions : (e) => { props.values[props.name] = e.target.value; props.multiple, props.change }}
        value={props.multiple ? props.values[props.name].map(option => option[props.options.childName]) : props.values[props.name]
        }
        name={props.name}
        ref={inputRef}
        multiple={props.multiple}
      >
        {props.multiple &&
          <option disabled hidden value="">
            {props.multipleText}
          </option>
        }
        {!props.multiple &&
          <option disabled value="">Buscar elemento</option>
        }
        {props.options.datas.map((data, index) => {
          const rowRelation = data[props.options.relation]
          const labelRelation = data[props.options.label]
          return (
            <option key={index} value={rowRelation}>
              {labelRelation}
            </option>
          )
        })}
      </select>
    </div>
  )
}
