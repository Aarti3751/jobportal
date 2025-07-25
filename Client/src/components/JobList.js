// src/components/JobList.js
import React, { useState } from 'react';

const JobList = ({ jobs, onEdit, onDelete }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>📋 All Jobs</h3>
        <div style={styles.jobCount}>{jobs.length} Jobs</div>
      </div>
      <div style={styles.jobGrid}>
        {jobs.map((job) => (
          <div 
            key={job._id} 
            style={{
              ...styles.card,
              ...(hoveredCard === job._id ? styles.cardHover : {})
            }}
            onMouseEnter={() => setHoveredCard(job._id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardHeader}>
              <h4 style={styles.jobTitle}>{job.title}</h4>
              <div style={styles.jobType}>{job.type}</div>
            </div>
            
            <div style={styles.cardBody}>
              <div style={styles.companyInfo}>
                <span style={styles.label}>🏢 Company:</span>
                <span style={styles.value}>{job.companyName}</span>
              </div>
              
              <div style={styles.salaryInfo}>
                <span style={styles.label}>💰 Salary:</span>
                <span style={styles.salaryRange}>
                  ₹{job.salaryRange.min.toLocaleString()} - ₹{job.salaryRange.max.toLocaleString()}
                </span>
              </div>
            </div>
            
            <div style={styles.cardActions}>
              <button 
                onClick={() => onEdit(job)} 
                style={styles.editButton}
              >
                ✏️ Edit
              </button>
              <button 
                onClick={() => onDelete(job._id)} 
                style={styles.deleteButton}
              >
                🗑️ Delete
              </button>
            </div>
            
            {hoveredCard === job._id && <div style={styles.cardGlow}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(15px)',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  
  title: {
    margin: 0,
    fontSize: '2.8rem',
    fontWeight: '800',
    color: '#ffffff',
    textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
    letterSpacing: '-1px',
  },
  
  jobCount: {
    padding: '0.7rem 1.5rem',
    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
    color: 'white',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '700',
    boxShadow: '0 6px 20px rgba(238, 90, 36, 0.5)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  },
  
  jobGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
    gap: '2.5rem',
  },
  
  card: {
    position: 'relative',
    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
    padding: '2.5rem',
    borderRadius: '25px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.07)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.8)',
  },
  
  cardHover: {
    transform: 'translateY(-15px) scale(1.02)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.2), 0 10px 25px rgba(0,0,0,0.1)',
  },
  
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
    borderRadius: '25px',
    pointerEvents: 'none',
    animation: 'pulse 2s infinite',
  },
  
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2rem',
    paddingBottom: '1.5rem',
    borderBottom: '3px solid #e9ecef',
  },
  
  jobTitle: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#2d3436',
    flex: 1,
    marginRight: '1rem',
    lineHeight: '1.2',
  },
  
  jobType: {
    padding: '0.6rem 1.2rem',
    background: 'linear-gradient(45deg, #00cec9, #55a3ff)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 6px 20px rgba(85, 163, 255, 0.4)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  },
  
  cardBody: {
    marginBottom: '2.5rem',
  },
  
  companyInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    padding: '1.2rem',
    background: 'linear-gradient(135deg, rgba(116, 75, 162, 0.12), rgba(102, 126, 234, 0.12))',
    borderRadius: '18px',
    border: '2px solid rgba(116, 75, 162, 0.2)',
    boxShadow: '0 4px 15px rgba(116, 75, 162, 0.1)',
  },
  
  salaryInfo: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.2rem',
    background: 'linear-gradient(135deg, rgba(0, 206, 201, 0.12), rgba(85, 163, 255, 0.12))',
    borderRadius: '18px',
    border: '2px solid rgba(0, 206, 201, 0.25)',
    boxShadow: '0 4px 15px rgba(0, 206, 201, 0.15)',
  },
  
  label: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#636e72',
    marginRight: '1.5rem',
    minWidth: '120px',
  },
  
  value: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#2d3436',
  },
  
  salaryRange: {
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#00b894',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
  },
  
  cardActions: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'flex-end',
  },
  
  editButton: {
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    background: 'linear-gradient(45deg, #fdcb6e, #e17055)',
    color: 'white',
    boxShadow: '0 6px 20px rgba(225, 112, 85, 0.4)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  },
  
  deleteButton: {
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    background: 'linear-gradient(45deg, #fd79a8, #e84393)',
    color: 'white',
    boxShadow: '0 6px 20px rgba(232, 67, 147, 0.4)',
    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
  },
};

export default JobList;