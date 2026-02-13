import React, { useState } from 'react';
import './App.css';
import ProductCard from './Experiment_3/Exp3_1/ProductCard';
import LibraryUI from './Experiment_3/Exp3_2/LibraryUI';
import PersonHierarchy from './Experiment_3/Exp3_3/PersonHierarchy';

// Import product images
import headphonesImg from './assets/headphones.png';
import keyboardImg from './assets/keyboard.png';
import watchImg from './assets/watch.png';

function App() {
  const [activeExperiment, setActiveExperiment] = useState('exp3_1');

  const renderExperiment = () => {
    switch (activeExperiment) {
      case 'exp3_1':
        return (
          <div className="experiment-content">
            <div className="experiment-header">
              <h1>Product Card Component</h1>
            </div>
            <div className="products-grid">
              <ProductCard
                title="Wireless Headphones"
                price="129.99"
                inStock={true}
                image={headphonesImg}
              />
              <ProductCard
                title="Mechanical Keyboard"
                price="89.99"
                inStock={false}
                image={keyboardImg}
              />
              <ProductCard
                title="Smart Watch"
                price="199.99"
                inStock={true}
                image={watchImg}
              />
            </div>
          </div>
        );
      
      case 'exp3_2':
        return (
          <div className="experiment-content">
            <LibraryUI />
          </div>
        );
      
      case 'exp3_3':
        return (
          <div className="experiment-content">
            <PersonHierarchy />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-container">
          <h1 className="nav-title">Experiment - 3</h1>
          <div className="nav-buttons">
            <button
              className={`nav-btn ${activeExperiment === 'exp3_1' ? 'active' : ''}`}
              onClick={() => setActiveExperiment('exp3_1')}
            >
              Exp 3.1: Product Card
            </button>
            <button
              className={`nav-btn ${activeExperiment === 'exp3_2' ? 'active' : ''}`}
              onClick={() => setActiveExperiment('exp3_2')}
            >
              Exp 3.2: Library UI
            </button>
            <button
              className={`nav-btn ${activeExperiment === 'exp3_3' ? 'active' : ''}`}
              onClick={() => setActiveExperiment('exp3_3')}
            >
              Exp 3.3: Person Hierarchy
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {renderExperiment()}
      </main>

      <footer className="footer">
        <p>Full Stack Development - Experiment 3 | React </p>
      </footer>
    </div>
  );
}

export default App;