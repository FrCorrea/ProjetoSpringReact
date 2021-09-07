import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';

import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-primary">Ola mundo</h1>
        <DataTable />
      </div>
      <Footer />
    </>

  );
}

export default App;
