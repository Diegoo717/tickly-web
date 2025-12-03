import QRCode from "qrcode";

export const generateQRCode = async (eventId: string): Promise<string> => {
  try {
    const url = await QRCode.toDataURL(eventId);
    return url;
  } catch (error) {
    console.error("Error generating QR code:", error);
    return "";
  }
};

