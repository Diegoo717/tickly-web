export interface CardValidationErrors {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvc?: string;
}

export const validateCardNumber = (cardNumber: string): boolean => {
  const cleaned = cardNumber.replace(/\s/g, "");
  
  if (!/^\d{13,19}$/.test(cleaned)) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

export const validateCardholderName = (name: string): boolean => {
  return /^[a-zA-Z\s]{2,}$/.test(name.trim());
};

export const validateExpiryDate = (expiry: string): boolean => {
  const match = expiry.match(/^(\d{2})\/(\d{2})$/);
  
  if (!match) {
    return false;
  }

  const month = parseInt(match[1], 10);
  const year = parseInt(match[2], 10);

  if (month < 1 || month > 12) {
    return false;
  }

  const now = new Date();
  const currentYear = now.getFullYear() % 100; 
  const currentMonth = now.getMonth() + 1;

  if (year < currentYear) {
    return false;
  }

  if (year === currentYear && month < currentMonth) {
    return false;
  }

  return true;
};

export const validateCVC = (cvc: string): boolean => {
  return /^\d{3,4}$/.test(cvc);
};

export const formatCardNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, "");
  
  const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
  
  return formatted.substring(0, 23); 
};

export const formatExpiryDate = (value: string): string => {
  const cleaned = value.replace(/\D/g, "");

  if (cleaned.length >= 2) {
    return `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
  }
  
  return cleaned;
};

export const validateCardForm = (
  cardNumber: string,
  cardholderName: string,
  expiryDate: string,
  cvc: string
): CardValidationErrors => {
  const errors: CardValidationErrors = {};

  if (!cardNumber.trim()) {
    errors.cardNumber = "Card number is required";
  } else if (!validateCardNumber(cardNumber)) {
    errors.cardNumber = "Invalid card number";
  }

  if (!cardholderName.trim()) {
    errors.cardholderName = "Cardholder name is required";
  } else if (!validateCardholderName(cardholderName)) {
    errors.cardholderName = "Invalid name (letters only)";
  }

  if (!expiryDate.trim()) {
    errors.expiryDate = "Expiry date is required";
  } else if (!validateExpiryDate(expiryDate)) {
    errors.expiryDate = "Invalid or expired date";
  }

  if (!cvc.trim()) {
    errors.cvc = "CVC is required";
  } else if (!validateCVC(cvc)) {
    errors.cvc = "Invalid CVC (3-4 digits)";
  }

  return errors;
};
