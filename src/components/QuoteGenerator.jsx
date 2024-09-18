import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  // Function to fetch random quote from the API
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Fetch an initial quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.quoteBox}>
        <h2 style={styles.title}>Random Quote Generator</h2>
        {quote ? (
          <div style={styles.quoteContainer}>
            <p style={styles.quoteText}>"{quote.quote}"</p>
            <p style={styles.author}>— {quote.author}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={fetchQuote} style={styles.button}>
          Get New Quote
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif',
  },
  quoteBox: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '400px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  quoteContainer: {
    marginBottom: '20px',
  },
  quoteText: {
    fontSize: '1.25rem',
    color: '#555',
    fontStyle: 'italic',
  },
  author: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#888',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default QuoteGenerator;
