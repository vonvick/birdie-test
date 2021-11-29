import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { fetchRecipients } from "./redux/features/recipients/recipientSlice";
import CareRecipientsList from "./components/pages/CareRecipientsList";
import RecipientEvents from "./components/pages/RecipientEvents";
import NavBar from "./components/utility/NavBar";
import styled from "styled-components";
import {fetchEventTypes} from "./redux/features/eventsTypes/eventTypesSlice";

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
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
            <Route path="/" element={<CareRecipientsList />}></Route>
            <Route path="/recipients/:recipientId" element={<RecipientEvents />}></Route>
          </Routes>
        </StyledAppWrapper>
      </div>
    </Router>
  );
}

export default App;
