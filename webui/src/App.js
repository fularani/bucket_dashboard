import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import PageWrapper from "./Pages/Wrapper/PageWrapper";
import Dashboardpage from "./Pages/Dashboard/Dashboardpage";
import Accountspage from "./Pages/Accountspage";
import BucketLifecyclepage from "./Pages/BucketLifecyclepage";
import Endpointspage from "./Pages/Endpointspage";
import LocationStatuspage from "./Pages/LocationStatuspage";
import Replicationpage from "./Pages/Replicationpage";
import Settingpage from "./Pages/Settingpage";
import Statisticspage from "./Pages/Statisticspage";
import StorageLocationspage from "./Pages/StorageLocationspage";
import LifecycleRulepage from "./Pages/LifecycleRulepage";

function App() {

  const Page3Component = PageWrapper(LocationStatuspage)
  const Page4Component = PageWrapper(Statisticspage)
  const Page5Component = PageWrapper(Accountspage)
  const Page6Component = PageWrapper(StorageLocationspage)
  const Page7Component = PageWrapper(Endpointspage)
  const Page8Component = PageWrapper(Replicationpage)
  const Page9Component = PageWrapper(BucketLifecyclepage)
  const Page10Component = PageWrapper(Settingpage)
  const Page11Component = PageWrapper(LifecycleRulepage)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboardpage />} />
          <Route path="/user" element={<Dashboardpage />} />
          <Route path="/monitor/locations" element={<Page3Component />} />
          <Route path="/stats" element={<Page4Component />} />
          <Route path="/accounts" element={<Page5Component />} />
          <Route path="/locations" element={<Page6Component />} />
          <Route path="/endpoints" element={<Page7Component />} />
          <Route path="/replication" element={<Page8Component />} />
          <Route path="/lifecycle" element={<Page9Component />} />
          <Route path="/settings" element={<Page10Component />} />
          <Route path="/lifecycle/lifecycle-bucket" element={<Page11Component />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
