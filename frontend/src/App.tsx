import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faExclamation,
  faBell,
  faStethoscope,
  faUserCheck,
  faCalendarCheck,
  faExclamationTriangle,
  faCoffee,
  faHamburger,
  faBed,
  faHeartbeat,
  faNotesMedical,
  faBrain,
  faAmbulance,
  faSmileBeam,
  faLaptopMedical,
  faUserMd,
  faHandHoldingMedical,
  faPumpMedical,
  faFilePrescription,
  faPrescriptionBottle,
  faCheckCircle,
  faUndo,
  faPencilAlt,
  faRestroom,
  faWindowClose,
  faCheckSquare,
  faCircleNotch,
  faHome
} from '@fortawesome/free-solid-svg-icons'
import './App.css';
import CareRecipientsList from "./components/pages/CareRecipientsList";
import RecipientEvents from "./components/pages/RecipientEvents";
import NavBar from "./components/utility/NavBar";
import styled from "styled-components";
import NotFound from "./components/pages/NotFound";

library.add(faExclamation,
  faBell,
  faStethoscope,
  faUserCheck,
  faCalendarCheck,
  faExclamationTriangle,
  faCoffee,
  faHamburger,
  faBed,
  faHeartbeat,
  faNotesMedical,
  faBrain,
  faAmbulance,
  faSmileBeam,
  faLaptopMedical,
  faUserMd,
  faHandHoldingMedical,
  faPumpMedical,
  faFilePrescription,
  faPrescriptionBottle,
  faCheckCircle,
  faUndo,
  faPencilAlt,
  faRestroom,
  faWindowClose,
  faCheckSquare,
  faCircleNotch,
  faHome
);

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <div>
        <NavBar/>

        <StyledAppWrapper>
          <Switch>
            <Route exact path="/">
              <CareRecipientsList />
            </Route>
            <Route path="/recipients/:recipientId">
              <RecipientEvents />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </StyledAppWrapper>
      </div>
    </Router>
  );
}

export default App;
