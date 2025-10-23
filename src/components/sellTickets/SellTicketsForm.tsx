import React, { useState } from 'react';
import styles from './SellTicketsForm.module.css';
import { Button } from '../common/buttons/Button';

export const SellTicketsForm = () => {
  const [formData, setFormData] = useState({
    eventTitle: '',
    artistName: '',
    eventDescription: '',
    eventCategory: 'Music',
    eventLocation: '',
    eventDate: '',
    ticketQuantity: '',
    contactName: '',
    contactEmail: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1 className={styles.title}><span className={styles.aiSpan}>Sell</span> Your <span className={styles.aiSpan}>Tickets</span> with Us</h1>
          <p className={styles.subtitle}>
            Submit your event for review. If it meets our guidelines, we'll get in touch to get you set up on our platform.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.gridContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-title">
                Event Title
              </label>
              <input
                className={styles.input}
                id="event-title"
                name="eventTitle"
                placeholder="e.g. The Grand Symphony"
                type="text"
                value={formData.eventTitle}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="artist-name">
                Artist/Organization Name
              </label>
              <input
                className={styles.input}
                id="artist-name"
                name="artistName"
                placeholder="e.g. The Philharmonic Orchestra"
                type="text"
                value={formData.artistName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="event-description">
              Event Description
            </label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              id="event-description"
              name="eventDescription"
              placeholder="Describe your event in a few sentences..."
              value={formData.eventDescription}
              onChange={handleChange}
            />
          </div>

          <div className={styles.gridContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-category">
                Event Category
              </label>
              <select
                className={styles.input}
                id="event-category"
                name="eventCategory"
                value={formData.eventCategory}
                onChange={handleChange}
              >
                <option>Music</option>
                <option>Arts &amp; Theater</option>
                <option>Sports</option>
                <option>Conference</option>
                <option>Workshop</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-location">
                Location / Venue
              </label>
              <input
                className={styles.input}
                id="event-location"
                name="eventLocation"
                placeholder="e.g. The Grand Opera House, New York"
                type="text"
                value={formData.eventLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.gridContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="event-date">
                Event Date &amp; Time
              </label>
              <input
                className={styles.input}
                id="event-date"
                name="eventDate"
                type="datetime-local"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="ticket-quantity">
                Estimated Ticket Quantity
              </label>
              <input
                className={styles.input}
                id="ticket-quantity"
                name="ticketQuantity"
                min="1"
                placeholder="e.g. 500"
                type="number"
                value={formData.ticketQuantity}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.gridContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="contact-name">
                Contact Name
              </label>
              <input
                className={styles.input}
                id="contact-name"
                name="contactName"
                placeholder="John Doe"
                type="text"
                value={formData.contactName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="contact-email">
                Contact Email
              </label>
              <input
                className={styles.input}
                id="contact-email"
                name="contactEmail"
                placeholder="john.doe@example.com"
                type="email"
                value={formData.contactEmail}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formFooter}>
            <p className={styles.footerText}>
              We'll review your submission and contact you via email.
            </p>
            <Button text='Submit Event' active={true}/>
          </div>
        </form>
      </div>
    </div>
  );
};