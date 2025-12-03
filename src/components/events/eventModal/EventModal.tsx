import React, { useState } from "react";
import styles from "./EventModal.module.css";
import { type DateTime } from "../eventCard/EventCard";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    place: string;
    date: string | DateTime;
    image: string;
  };
  tickets: {
    general: {
      name: string;
      description: string;
      price: number;
      isFree?: boolean; 
    };
    vip: {
      name: string;
      description: string;
      price: number;
      isFree?: boolean; 
    };
  };
  fees: number;
}

export const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  event,
  tickets,
  fees,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [generalCount, setGeneralCount] = useState(1);
  const [vipCount, setVipCount] = useState(0);

  if (!isOpen) return null;

  const formatPrice = (price: number, isFree?: boolean): string => {
    if (isFree) return "FREE";
    return `$${price.toFixed(2)}`;
  };

  const formatDate = (date: string | DateTime): string => {
    if (typeof date === "string") {
      return date;
    }
    return `${date.month} ${date.day}, ${date.year} at ${
      date.hour
    }:${date.minute.toString().padStart(2, "0")}`;
  };

  const subtotal =
    generalCount * tickets.general.price + vipCount * tickets.vip.price;
  const total = subtotal + fees;

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setGeneralCount(1);
    setVipCount(0);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const formattedDate = formatDate(event.date);

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <h2 className={styles.modalTitle}>{event.title}</h2>
            <p className={styles.modalSubtitle}>
              {formattedDate} - {event.place}
            </p>
          </div>

          <div className={styles.stepIndicatorWrapper}>
            <div className={styles.stepIndicator}>
              <div
                className={`${styles.step} ${
                  currentStep >= 0 ? styles.active : styles.inactive
                }`}
              >
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>
              </div>
              <div
                className={`${styles.stepLine} ${
                  currentStep >= 1 ? styles.active : styles.inactive
                }`}
              ></div>
              <div
                className={`${styles.step} ${
                  currentStep >= 1 ? styles.active : styles.inactive
                }`}
              >
                <span className="material-symbols-outlined">payment</span>
              </div>
              <div
                className={`${styles.stepLine} ${
                  currentStep >= 2 ? styles.active : styles.inactive
                }`}
              ></div>
              <div
                className={`${styles.step} ${
                  currentStep >= 2 ? styles.active : styles.inactive
                }`}
              >
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <div className={styles.stepLabels}>
              <span>Tickets</span>
              <span>Payment</span>
              <span>Confirmation</span>
            </div>
          </div>

          <button className={styles.closeButton} onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className={styles.modalContent}>
          {currentStep === 0 && (
            <div className={styles.stepContent}>
              <h3 className={styles.sectionTitle}>
                <span className="material-symbols-outlined">
                  confirmation_number
                </span>
                Select Your Tickets
              </h3>
              <div className={styles.ticketOptions}>
                <div className={styles.ticketOption}>
                  <div>
                    <p className={styles.ticketName}>{tickets.general.name}</p>
                    <p className={styles.ticketDescription}>
                      {tickets.general.description}
                    </p>
                  </div>
                  <div className={styles.ticketRight}>
                    <p className={styles.ticketPrice}>
                      {formatPrice(
                        tickets.general.price,
                        tickets.general.isFree
                      )}
                    </p>
                    <div className={styles.counter}>
                      <button
                        onClick={() =>
                          setGeneralCount(Math.max(0, generalCount - 1))
                        }
                      >
                        -
                      </button>
                      <span>{generalCount}</span>
                      <button onClick={() => setGeneralCount(generalCount + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.ticketOption}>
                  <div>
                    <p className={styles.ticketName}>{tickets.vip.name}</p>
                    <p className={styles.ticketDescription}>
                      {tickets.vip.description}
                    </p>
                  </div>
                  <div className={styles.ticketRight}>
                    <p className={styles.ticketPrice}>
                      {formatPrice(tickets.vip.price, tickets.vip.isFree)}
                    </p>
                    <div className={styles.counter}>
                      <button
                        onClick={() => setVipCount(Math.max(0, vipCount - 1))}
                      >
                        -
                      </button>
                      <span>{vipCount}</span>
                      <button onClick={() => setVipCount(vipCount + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.paymentGrid}>
                <div>
                  <h3 className={styles.sectionTitle}>
                    <span className="material-symbols-outlined">payment</span>
                    Payment Method
                  </h3>
                  <div className={styles.paymentMethods}>
                    <div
                      className={`${styles.paymentOption} ${styles.selected}`}
                    >
                      <label>
                        <div className={styles.paymentInfo}>
                          <div className={styles.cardIcon}>
                            <span className="material-symbols-outlined">
                              credit_card
                            </span>
                          </div>
                          <span>Credit Card</span>
                        </div>
                        <div className={styles.radioButton}>
                          <div className={styles.radioFilled}></div>
                        </div>
                      </label>
                      <div className={styles.cardForm}>
                        <div className={styles.inputWrapper}>
                          <span className="material-symbols-outlined">
                            credit_card
                          </span>
                          <input type="text" placeholder="Card Number" />
                        </div>
                        <input type="text" placeholder="Cardholder Name" />
                        <div className={styles.cardDetails}>
                          <input type="text" placeholder="MM/YY" />
                          <div className={styles.cvcWrapper}>
                            <input type="text" placeholder="CVC" />
                            <span
                              className="material-symbols-outlined"
                              title="3-4 digit code"
                            >
                              help_outline
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.paymentOption}>
                      <label>
                        <div className={styles.paymentInfo}>
                          <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVsixzYAW9ZAG8rtxRzejUxefqT4sT2jWHkDxE5DbulnTpg5YDA53_t_Ij9RaMwOJxEh4j7y4SwQW58aPhxr1kvYUSsBROeuLAbeW-H8pVlPenD4Uaym98pmcwxB0PxufXh1Sof_zKqW-k8KS3J1omyRcGTrT8ZmY90GnerYM3K2utJQNWOls5_49ME_6y5_q9mT00sJP3zEpOmyw19AR8NuL1N5l9cuZ4hJ7MSMe82tdcCB9C6LDFcqAB_8uRj2uH2JGfjviv9Q"
                            alt="PayPal"
                          />
                        </div>
                        <div className={styles.radioButton}></div>
                      </label>
                    </div>

                    <div className={styles.paymentOption}>
                      <label>
                        <div className={styles.paymentInfo}>
                          <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ldvASduwN_zMut0l66jJGOTUaXWHE4kgk7TJyEnHVDw0v4xsi7vr0u6y5pphhoPsqpqMpwvGX6McSlfDMnIlNljF4f0LUD15LSzxCIwRK-zI6oJGYh_xzX1WVMgxYG_v4h0O-x-lrMwPZ8cs9hjz01HhhPGJOYfbFX7aULN4AGyVDyU8FAhyI0ARPkmJi33vvI9HoTQW0UxOmtGdAiWfZglgbHNGTV07uxT5I00tckWM9bMVWwtfo3VSmbRcFosM3Dtr9L0Kfg"
                            alt="Google Pay"
                          />
                        </div>
                        <div className={styles.radioButton}></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.orderSummary}>
                  <h4 className={styles.summaryTitle}>
                    <span className="material-symbols-outlined">
                      receipt_long
                    </span>
                    Order Summary
                  </h4>
                  <div className={styles.summaryItems}>
                    {generalCount > 0 && (
                      <div className={styles.summaryItem}>
                        <span>
                          {generalCount}x {tickets.general.name}
                        </span>
                        <span>
                          {tickets.general.isFree
                            ? "FREE"
                            : `$${(
                                generalCount * tickets.general.price
                              ).toFixed(2)}`}
                        </span>
                      </div>
                    )}
                    {vipCount > 0 && (
                      <div className={styles.summaryItem}>
                        <span>
                          {vipCount}x {tickets.vip.name}
                        </span>
                        <span>
                          ${(vipCount * tickets.vip.price).toFixed(2)}
                        </span>
                      </div>
                    )}
                    <div className={styles.summaryItem}>
                      <span>Taxes & Fees</span>
                      <span>${fees.toFixed(2)}</span>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.summaryTotal}>
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className={styles.securityNote}>
                    <span className="material-symbols-outlined">lock</span>
                    <p>
                      Your payment is secure. All transactions are encrypted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className={styles.stepContent}>
              <div className={styles.confirmationHeader}>
                <div className={styles.checkIcon}>
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
                <h3 className={styles.confirmTitle}>Purchase Confirmed!</h3>
                <p className={styles.confirmSubtitle}>
                  Thank you for your purchase.
                </p>
              </div>

              <div className={styles.purchaseSummary}>
                <h4>Purchase Summary</h4>
                <div className={styles.eventSummary}>
                  <div className={styles.eventInfo}>
                    <img src={event.image} alt={event.title} />
                    <div>
                      <p className={styles.eventTitle}>{event.title}</p>
                      <p className={styles.eventDetails}>
                        {generalCount + vipCount}x Tickets
                      </p>
                      <p className={styles.eventDetails}>{formattedDate}</p>
                    </div>
                  </div>
                  <p className={styles.totalPrice}>${subtotal.toFixed(2)}</p>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.summaryItems}>
                  <div className={styles.summaryItem}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Taxes & Fees</span>
                    <span>${fees.toFixed(2)}</span>
                  </div>
                  <div className={styles.divider}></div>
                  <div className={styles.summaryTotal}>
                    <span>Total Paid</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className={styles.emailNotification}>
                <h4>
                  <span className="material-symbols-outlined">
                    mark_email_read
                  </span>
                  Your Tickets Are On The Way!
                </h4>
                <p>
                  We've sent your tickets with a scannable QR code to your email
                  address. Please check your inbox (and spam folder) to access
                  them.
                </p>
              </div>

              <div className={styles.confirmButtons}>
                <button className={styles.primaryButton}>
                  <span className="material-symbols-outlined">
                    qr_code_scanner
                  </span>
                  View My Tickets
                </button>
                <button className={styles.secondaryButton}>
                  <span className="material-symbols-outlined">celebration</span>
                  Explore More Events
                </button>
              </div>
            </div>
          )}
        </div>

        {currentStep < 2 && (
          <div className={styles.modalFooter}>
            {currentStep > 0 && (
              <button className={styles.backButton} onClick={handleBack}>
                Back
              </button>
            )}
            <div className={styles.footerRight}>
              <div className={styles.totalDisplay}>
                <span>Total</span>
                <p>${total.toFixed(2)}</p>
              </div>
              <button className={styles.nextButton} onClick={handleNext}>
                {currentStep === 0 ? "Proceed to Payment" : "Confirm Purchase"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
