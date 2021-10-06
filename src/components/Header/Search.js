import React from "react"

import {
  Form,
  Dropdown,
  NavItem,
  InputGroup,
  Button,
  Badge,
} from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Search(props) {
  const { onChange } = props
  return (
    <Dropdown as={NavItem}>
      <Form className="ms-auto d-none d-lg-block me-4" id="searchForm">
        <Dropdown.Toggle
          as={InputGroup}
          size="sm"
          role="search"
          className="input-group-navbar"
        >
          <Form.Control onChange={onChange} className="p-2" size="sm" type="search" placeholder="Search..." />
          <Button variant="transparent">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Dropdown.Toggle>
      </Form>
    </Dropdown>
  )
}
