import React, { useEffect, useState } from "react";
import { Badge, Collapse } from "react-bootstrap";
import * as iconfort from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAbac } from "react-abac";
import { connect } from 'react-redux';
import data from "../data/sidebar.json";
import ActiveLink from "../components/ActiveLink";


function Sidebar({ 
  sidebarShrink, 
  pageProps,
  permissions
}) {
  const [dropdown, setDropdown] = useState({})
  const [activeParent, setActiveParent] = useState()
  const router = useRouter()
  const toggleDropdown = (e, name) => {
    e && e.preventDefault()
    setDropdown({ ...dropdown, [name]: !dropdown[name] })
  }

  const highlightDropdownParent = () => {
    data.map((block) => {
      block.items.map((item) => {
        item.links &&
          item.links.map((link) => {
            if (link.link && link.link === Router.route + "/") {
              toggleDropdown(false, item.name)
              setActiveParent(item.name)
            }
          })
      })
    })
  }

  useEffect(() => {
    highlightDropdownParent()
    router.events.on("routeChangeComplete", highlightDropdownParent)
    return () => {
      router.events.off("routeChangeComplete", highlightDropdownParent)
    }
  }, [])

  const { userHasPermissions } = useAbac();

  return (
    <div
      className={`sidebar py-3 ${sidebarShrink ? "shrink show" : ""}`}
      id="sidebar"
    >
      {data.map((block) => {
        return (
          <React.Fragment key={block.name}>
            {pageProps && block.name === pageProps.currentSidebar &&
              <React.Fragment>
                <h6 className="sidebar-heading">{block.name}</h6>
                <ul className="list-unstyled">
                  {block.items.map((item) => {
                    return (
                      <React.Fragment key={item.name}>
                        {!item.relation &&
                          <>
                            {permissions.EDIT_POST.find(permission => permission.module === item.name) &&
                              <li className="sidebar-list-item">
                                <ActiveLink href={item.link} activeClassName="active bg-dark">
                                  <a
                                    className={`sidebar-link text-muted pr-3 pl-3 pt-3 pb-3 
                          ${activeParent === item.name ? "active" : ""}`}
                                    onClick={(e) =>
                                      item.links
                                        ? toggleDropdown(e, item.name)
                                        : (setDropdown({}), setActiveParent(item.name))
                                    }
                                    data-bs-toggle={item.links && "collapse"}
                                    role={item.links && "button"}
                                    aria-expanded={dropdown[item.name]}
                                  >
                                    <div className={`p-2 border d-flex align-items-center justify-content-center shadow-lg rounded ${sidebarShrink ? "me-0" : "me-3"}`}>
                                      <FontAwesomeIcon style={{ minWidth: "20px" }} className="svg-icon-md" icon={iconfort[item.icon]} />
                                    </div>
                                    <span className="sidebar-link-title">{item.name}</span>
                                  </a>
                                </ActiveLink>
                                {item.links && (
                                  <Collapse in={dropdown[item.name]}>
                                    <ul className="sidebar-menu list-unstyled">
                                      {item.links.map((link) => (
                                        <li key={link.name} className="sidebar-list-item">
                                          <ActiveLink href={link.link} activeClassName="active bg-dark">
                                            <a
                                              className="sidebar-link text-muted"
                                              onClick={() => setActiveParent(item.name)}
                                            >
                                              {link.name}
                                              {link.new && (
                                                <Badge
                                                  bg="info"
                                                  className="ms-2 text-decoration-none"
                                                >
                                                  New
                                                </Badge>
                                              )}
                                            </a>
                                          </ActiveLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </Collapse>
                                )}
                              </li>
                            }
                          </>
                        }
                      </React.Fragment>
                    )
                  })}
                </ul>
              </React.Fragment>
            }
          </React.Fragment>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  permissions: state.rolesreducer.permissions,
})

export default connect(mapStateToProps)(Sidebar);