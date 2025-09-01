import { useState } from 'react';
import AddBlog from '../Blog/blog';

import './adminPanel.css';
import BlogShow from '../BlogShow/BlogShow';
import DetailsShow from '../DetailsShow/DetailsShow';
import BlogsSection from '../BlogsSection/BlogsSection';

const AdminPanel = () => {
  const [activePage, setActivePage] = useState('addBlog');

  const renderContent = () => {
    switch (activePage) {
      case 'addBlog':
        return <BlogsSection />;
      case 'blogs':
        return <BlogShow />;
      case 'details':
        return <DetailsShow />;
      default:
        return <BlogsSection />;
    }
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="menu">
          <li
            className={activePage === 'addBlog' ? 'active' : ''}
            onClick={() => setActivePage('addBlog')}
          >
            ➕ Add Blog
          </li>
          <li
            className={activePage === 'blogs' ? 'active' : ''}
            onClick={() => setActivePage('blogs')}
          >
            📄 Blogs
          </li>
          <li
            className={activePage === 'details' ? 'active' : ''}
            onClick={() => setActivePage('details')}
          >
            📋 Details
          </li>
        </ul>
      </aside>
      <main className="content">{renderContent()}</main>
    </div>
  );
};

export default AdminPanel;
