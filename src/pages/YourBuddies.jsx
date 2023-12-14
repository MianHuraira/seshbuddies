import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Createpost from "../components/createpost";
import SideMessage from "../components/side_message";

import SuggestedBuddies from "../components/Buddies/SuggestedBuddies";
import ReguestBuddies from "../components/Buddies/ReguestBuddies";
import Buddies from "../components/Buddies/MyBuddies";

const YourBuddies = () => {
  const [activeModalTab, setActiveModalTab] = useState("tab1");
  const handleModalClick = (tab) => {
    setActiveModalTab(tab);
  };
  return (
    <div>
      <div>
        <Container className="top_padd px-4" fluid="xxl">
          <Row className="h-100 p-0">
            <Col lg="3" md="3" className="sideHeight00 d-md-block d-none">
              <Createpost />
            </Col>
            <Col
              lg="6"
              md="9"
              className="main_height no_scrollbar gx-5 overflow-y-auto"
            >
              <div>
                <ul
                  className="nav nav-tabs ModalNav mb-2 p-2"
                  style={{ borderRadius: "999px" }}
                >
                  <li className="nav-item nav_item_modal">
                    <button
                      className={`nav-link ${
                        activeModalTab === "tab1" ? "active" : ""
                      }`}
                      onClick={() => handleModalClick("tab1")}
                    >
                      Requests
                    </button>
                  </li>
                  <li className="nav-item nav_item_modal">
                    <button
                      className={`nav-link ${
                        activeModalTab === "tab2" ? "active" : ""
                      }`}
                      onClick={() => handleModalClick("tab2")}
                    >
                      My Buddies
                    </button>
                  </li>
                  <li className="nav-item nav_item_modal">
                    <button
                      className={`nav-link ${
                        activeModalTab === "tab3" ? "active" : ""
                      }`}
                      onClick={() => handleModalClick("tab3")}
                    >
                      Suggested
                    </button>
                  </li>
                </ul>
                <div>
                  <div className="tab-content mt-2">
                    <div
                      className={`tab-pane px-2 ${
                        activeModalTab === "tab1" ? "active" : ""
                      }`}
                      id="tab1"
                    >
                      <ReguestBuddies activeModalTab={activeModalTab} />
                    </div>
                    <div
                      className={`tab-pane px-2 ${
                        activeModalTab === "tab2" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <Buddies activeModalTab={activeModalTab} />
                    </div>
                    <div
                      className={`tab-pane px-2 ${
                        activeModalTab === "tab3" ? "active" : ""
                      }`}
                      id="tab3"
                    >
                      <SuggestedBuddies activeModalTab={activeModalTab} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" className="sideHeight00 d-lg-block d-none">
              <SideMessage />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default YourBuddies;
