import React, { useEffect, useState, useRef } from "react"
import parse from "html-react-parser";

export default function Dropzone({ className, stepFileValues, setDrop, textDefault, clickeableState }) {

  const dropzoneRef = useRef(false)

  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    if (stepFileValues !== undefined && stepFileValues.length > 0 && setDrop) {
      for (let i = 0; i < stepFileValues.length; i++) {
        const getallData = {
          file: stepFileValues[i].file,
          fileHTML: stepFileValues[i].fileHTML
        }
        setDrop(
          newDrop =>
            [
              ...newDrop,
              getallData
            ]
        )
      }
    }
  }, [])

  useEffect(async () => {
    // we make a dynamic import for the Dropzone, as this component is not made to work on SSR
    const Dropzone = (await import("dropzone")).default
    setLoaded(true)
    Dropzone.autoDiscover = false

    !loaded &&
      new Dropzone(dropzoneRef.current, {
        url: "/",
        maxFilesize: 50000,
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        uploadMultiple: true,
        clickable: clickeableState,
        successmultiple: function (files) {
          if (setDrop) {
            for (let i = 0; i < files.length; i++) {
              const getallData = {
                file: files[i].name,
                fileHTML: files[i].previewElement
              }
              setDrop(
                newDrop =>
                  [
                    ...newDrop,
                    getallData
                  ]
              )
            }
          }
        },
      })
  }, [])
  return (
    <>
      <div ref={dropzoneRef} className={`overflow-auto dropzone d-flex align-items-center justify-content-center ${className ? className : ""}`}>
        {stepFileValues === undefined ?
          <div className="dz-message">
            <p className="mb-0">{textDefault}</p>
          </div>
          :
          <div className="dz-message">
            <p className="mb-0" />
          </div>
        }
        {stepFileValues !== undefined && stepFileValues.length > 0 && stepFileValues.map((info, key) => {
          const stringHTML = info.fileHTML.outerHTML
          return (
            <div key={key} className="d-flex flex-column align-items-center">
              {parse(stringHTML)}
            </div>
          )
        })}
      </div>

    </>
  )
}
