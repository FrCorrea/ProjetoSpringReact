import NavBar from 'components/NavBar';
import BarChart from 'components/BarChart';
import DonutsChart from 'components/DonutsChart';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';

import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <div>
        <h1 className="text-primary">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
              <h5 className="text-center text-secundary">Taxa de sucesso (%)</h5>
              <BarChart />
          </div>
          <div className="col-sm-6">
          <h5 className="text-center text-secundary">Taxa de sucesso (%)</h5>
              <DonutsChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>

  );
}

export default App;
