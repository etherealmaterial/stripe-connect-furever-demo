import React from 'react';
import Container from './Container';

const BalanceWidget = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between space-y-1">
        <div>
          <h1 className="font-bold text-subdued">Customers</h1>
          <div className="font-bold text-xl">424</div>
        </div>
      </div>
    </Container>
  );
};

export default BalanceWidget;
