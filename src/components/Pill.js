import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function Pill({ data, icon, color, className, fullHeight }) {
  return (
    <div
      className={`card-widget ${className ? className : ""} ${fullHeight ? "h-100" : ""
        }`}
    >
      <div className="card-widget-body p-3">
        <div className="text">
          <h6 className="mb-0">{data.name}</h6>
          <span className={`text-gray-500`}>{data.content}</span>
        </div>
      </div>

      <div className={`icon text-white p-3 ${color}`}>
        {icon &&
          <FontAwesomeIcon icon={icon} />
        }
      </div>
    </div>
  )
}
