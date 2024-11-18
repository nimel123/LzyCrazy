import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../Style/footer.css';
import Flag from './Flag';

function MainContent() {
  return (
    <div>
      <Header />
        <Flag />
      <Footer />
    </div>
  );
}

export default MainContent;
