
const fillElements = document.querySelectorAll('.graph .fill');
const soldTextElements = document.querySelectorAll('.sold-text');



fillElements.forEach((fillElement, index) => {
    const soldText = soldTextElements[index].textContent;
    const [sold, total] = soldText.match(/\d+/g).map(Number);
    const percentage = (sold / total) * 100;
    
  
    fillElement.style.width = percentage + '%';
});





const viewMoreButtons = document.querySelectorAll('.view-more-button');


viewMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {

        const additionalInfo = button.nextElementSibling;


        if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
            additionalInfo.style.display = 'block';
        } 
        else {
            additionalInfo.style.display = 'none';
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {

    const ticketSalesElements = document.querySelectorAll(".sold-text");
    const ticketRemainingElements = document.querySelectorAll(".remaining-text");
  

    ticketSalesElements.forEach(function (salesElement, index) {

      const salesText = salesElement.textContent; 
      const soldTickets = parseInt(salesText.split(":")[1].trim()); 
      
      const totalTickets = parseInt(salesText.split("/")[1].trim()); 
      const remainingTickets = totalTickets - soldTickets;
  

      ticketRemainingElements[index].textContent =
        "التذاكر المتبقية : " + remainingTickets;
    });
  });
  


