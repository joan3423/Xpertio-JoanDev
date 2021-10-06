import React from "react"
import { Card, Button } from "react-bootstrap"
import { connect } from "react-redux"
import ModalContainer from "../../ReusablesComponents/ModalContainer"
import QuickBody from "./quickAccesComponents/QuickBody"
import QuickFormModal from "./quickAccesComponents/QuickFormModal"

const QuickAccess = ({ allData, setAllData, modalState }) => {
  const addModuleLink = () => {
    if (allData.Home.finallLink.link !== null || "") {
      const newData = {
        ...allData,
        ...allData.Home.quickAccessList = [
          ...allData.Home.quickAccessList,
          {
            id: allData.Home.quickAccessList.length + 1,
            name: allData.Home.finallLink.linkName,
            link: allData.Home.finallLink.link,
            type: allData.Home.finallLink.type
          }
        ],
        ...allData.Home.finallLink = {
          initialName: "",
          name: [],
          link: ""
        },
        ...allData.Home.options = [],
        ...allData.Home.currentAccordion = {
          key: 0,
          name: "selecciona",
          icon: "",
          color: ""
        }
      }
      setAllData(newData)
    }
  }
  return (
    <Card style={{ minHeight: '350px' }} className="mb-lg-0">
      <Card.Header className="py-4 py-2">
        <div className="card-heading w-100 text-center">
          <strong>
            {allData.Home.simpleText.quickData.name}
          </strong>
        </div>
      </Card.Header>
      <Card.Body style={{ maxHeight: '230px' }}
        className={`${allData.Home.moduleState.length === 0 && "d-flex align-items-center flex-column justify-content-center"} overflow-auto pt-4 pb-2 px-4`}>
        <QuickBody
          allData={allData}
          modalState={modalState}
        />
        <div className="w-100 p-2 d-flex justify-content-center end-absolute-button border-bottom-radius">
          <ModalContainer
            classNameVariant="icon text-white border-0 bg-blue w-25 hight-rounded"
            ModalHeader="hola"
            classNameIcon="ms-4"
            text="Añadir"
            cheifAction="registrar bodega"
            ModalHeader={allData.Home.simpleText.quickData.name}
            ModalChildren={
              <QuickFormModal
                allData={allData}
                setAllData={setAllData}
              />
            }
            ModalFooter={
              <div className="w-100 d-flex justify-content-center">
                  <Button onClick={() => addModuleLink()} variant="primary" size="lg" type="submit">
                    {allData.Home.simpleText.button}
                  </Button>
              </div>
            }
          />
        </div>
      </Card.Body>
    </Card>
  )
}
export default QuickAccess;