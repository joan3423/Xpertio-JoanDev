import React from "react";
import { Col, Row } from "react-bootstrap";
import SearchTable from "./Search";

const ButtonFilters = ({
    changePage,
    buttonActivator,
    setSearch,
    classSearchPropertie
}) => (
    <Row className="w-100 align-items-center pb-4 m-0">
        <Col xs="7" className="pe-0 ps-0">
            {buttonActivator}
        </Col>
        <Col xs="5" className={`pe-0 ps-0 justify-content-xxl-start ${classSearchPropertie}`}>
            <SearchTable
                classSearchPropertie={classSearchPropertie}
                setSearch={setSearch}
                changePage={changePage}
            />
        </Col>
    </Row>
)
export default ButtonFilters;