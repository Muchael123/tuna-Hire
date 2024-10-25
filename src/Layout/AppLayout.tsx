import React from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <div className="grid-background"></div>
        <main className="min-h-screen container">
          <Header />
          {children}
        </main>
        <Footer />
      </div>
    );
};

export default AppLayout