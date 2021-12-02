import React from "react"

import { Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import Notifications from "../components/Header/Notifications"
import UserMenu from "../components/Header/UserMenu"
import Search from "../components/Header/Search"

export default function Header({ setSidebarShrink, sidebarShrink }) {
  return (
    <header className="header">
      <Navbar
        bg="white"
        expand="lg"
        variant={false}
        className="px-4 py-2 shadow"
      >
        <a
          className="sidebar-toggler text-gray-500 me-4 me-lg-5 lead"
          href="#"
          onClick={() => setSidebarShrink(!sidebarShrink)}
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </a>
        <Link href="/Home" passHref>
          <div className="cursor-pointer" style={{ width: '200px' }}>
            <img src="/img/logo/Principal_pq.png" />
          </div>
        </Link>
        <Navbar.Brand className="w-25">
          <Search />
        </Navbar.Brand>
        <div className="ms-auto d-flex align-items-center mb-0">
          <Notifications />
          <UserMenu />
        </div>
      </Navbar>
    </header>
  )
}
