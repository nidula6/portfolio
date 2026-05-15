export const generateCVPDF = () => {
  // Create a link to the PDF file in public folder
  const link = document.createElement('a');
  link.href = '/portfolio/Nidula_Jayawardhana.pdf';
  link.download = 'Nidula_Jayawardhana.pdf';
  
  // Trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
