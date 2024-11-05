import React from 'react';
import { FloatingMenu } from '../components/FloatingMenu';
import { useNavigate } from 'react-router-dom';

export const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToPoems = (slug: string) => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = slug;
    }, 0);
  };
  
  return (
    <div className="min-h-screen relative"   >
      <FloatingMenu onPoemSelect={handleBackToPoems} activeSlug={''} />
      <div className="min-h-screen p-16" style={{ fontFamily: "Georgia" }}>
        <h1 className="text-2xl pt-12 mb-4">Contact</h1>
        <p className="mb-4">
          For inquiries on poetry, life, artistic collaboration, publishing, and so forth, please contact Harri Sakari Sarsa at:
        </p>
        <p className="mb-4">
          <a 
            href="mailto:harri.sarsa@gmail.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            harri.sarsa@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}; 