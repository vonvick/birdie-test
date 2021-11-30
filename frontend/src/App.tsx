import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
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
import { fetchRecipients } from "./redux/features/recipients/recipientSlice";
import CareRecipientsList from "./components/pages/CareRecipientsList";
import RecipientEvents from "./components/pages/RecipientEvents";
import NavBar from "./components/utility/NavBar";
import styled from "styled-components";
import {clearEventTypesStore, fetchEventTypes} from "./redux/features/eventsTypes/eventTypesSlice";
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearEventTypesStore())
    dispatch(fetchEventTypes())
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRecipients({ perPage: 10, page: 1 }));
  }, [dispatch]);

  return (
    <Router>
      <div>
        <NavBar/>

        <StyledAppWrapper>
          <Routes>
            <Route index element={<CareRecipientsList />}></Route>
            <Route path="/recipients/:recipientId" element={<RecipientEvents />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StyledAppWrapper>
      </div>
    </Router>
  );
}

export default App;
