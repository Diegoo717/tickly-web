import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadTicketAsPDF = async (
  element: HTMLElement,
  fileName: string
): Promise<void> => {
  try {
    const overlay = element.querySelector('[class*="imageOverlay"]') as HTMLElement;
    const originalDisplay = overlay ? overlay.style.display : '';
    if (overlay) {
      overlay.style.display = 'none';
    }

    const canvas = await html2canvas(element, {
      scale: 5, 
      useCORS: true,
      logging: false,
      backgroundColor: null, 
      allowTaint: true,
      removeContainer: true
    });

    if (overlay) {
      overlay.style.display = originalDisplay;
    }

    const imgData = canvas.toDataURL('image/png');

    const pdfWidth = 210; 
    const pdfHeight = 297; 

    const imgWidth = 180; 
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const xPosition = (pdfWidth - imgWidth) / 2;
    const yPosition = (pdfHeight - imgHeight) / 2;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    pdf.addImage(imgData, 'PNG', xPosition, yPosition, imgWidth, imgHeight);

    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};