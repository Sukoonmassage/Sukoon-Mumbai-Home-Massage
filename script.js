const WHATSAPP_NUMBER = "919718290131"; // Replace with your real WhatsApp number, country code included.

function sendWhatsApp(text){
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}
document.getElementById("bookingForm").addEventListener("submit", e=>{
  e.preventDefault();
  sendWhatsApp(
`*Sukoon Booking Request*%0AName: ${document.getElementById("bname").value}%0APhone: ${document.getElementById("bphone").value}%0AService: ${document.getElementById("bservice").value}%0ADuration: ${document.getElementById("bduration").value}%0ADate: ${document.getElementById("bdate").value}%0ATime: ${document.getElementById("btime").value}%0AArea: ${document.getElementById("barea").value}`
  );
});
document.getElementById("enquiryForm").addEventListener("submit", e=>{
  e.preventDefault();
  sendWhatsApp(
`*Sukoon Enquiry*%0AName: ${document.getElementById("ename").value}%0APhone: ${document.getElementById("ephone").value}%0ARegarding: ${document.getElementById("eservice").value}%0AMessage: ${document.getElementById("emessage").value}`
  );
});
document.getElementById("bdate").min = new Date().toISOString().split("T")[0];