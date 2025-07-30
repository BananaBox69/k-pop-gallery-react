import React from 'react';
import './App.css';
import GroupIntroSection from './components/GroupIntroSection';
import MemberSection from './components/MemberSection'; // <-- 1. IMPORTING THE NEW COMPONENT

function App() {
  // --- Data for GroupIntroSection ---
  const redVelvetData = {
    groupName: 'Red Velvet',
    subtitle: 'The ReVe Festival',
    bannerUrl: 'https://i.imgur.com/R1p9hA5.jpeg',
    logoUrl: 'https://i.imgur.com/2Q3a8xH.png',
    glowColor: '255, 71, 87'
  };

  // --- 2. Create sample data for our new MemberSection ---
//... inside App.js ...
  const ireneData = {
    groupName: 'Red Velvet',
    memberName: 'Irene',
    memberColor: '#FF99AA', // Original --color-irene
    groupColor: '#FF4757',  // Original --color-redvelvet
    quote: "I want to be a person who can give strength to others.",
    signatureUrl: 'https://i.imgur.com/exampleSignature.png', // Placeholder URL
    cards: [
      {
        id: 'RV-I-001',
        album: 'The ReVe Festival: Finale',
        version: 'Scrapbook Ver.',
        price: 12.00,
        image: 'https://i.imgur.com/sC4a6t3.jpeg',
        // --- UPDATED to a working placeholder ---
        backImage: 'https://placehold.co/220x341/1e1e1e/ffffff?text=Card+Back+1'
      },
      {
        id: 'RV-I-002',
        album: 'Queendom',
        version: 'Photobook Ver.',
        price: 10.00,
        image: 'https://placehold.co/220x341/121212/ff4757?text=Front+2', // Using a placeholder for this one too
        // --- UPDATED to a working placeholder ---
        backImage: 'https://placehold.co/220x341/1e1e1e/ffffff?text=Card+Back+2'
      }
    ]
  };


  return (
    <div className="App">
      <GroupIntroSection
        groupName={redVelvetData.groupName}
        subtitle={redVelvetData.subtitle}
        bannerUrl={redVelvetData.bannerUrl}
        logoUrl={redVelvetData.logoUrl}
        glowColor={redVelvetData.glowColor}
      />

      {/* 3. USING THE NEW COMPONENT */}
      <MemberSection
        groupName={ireneData.groupName}
        memberName={ireneData.memberName}
        memberColor={ireneData.memberColor}
        groupColor={ireneData.groupColor}
        quote={ireneData.quote}
        signatureUrl={ireneData.signatureUrl}
        cards={ireneData.cards}
      />
    </div>
  );
}

export default App;