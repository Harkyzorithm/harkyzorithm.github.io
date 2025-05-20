// emailjs.init("JxHTkm-Fuii-2QjvS");
function sendMail() {

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
      
    emailjs.send("service_z3p27ra", "template_th3gpoz", parms)
      .then(() => {
       swal("Successful", "Message sent successfully!", "success");
      }, (err) => {
        swal("Error", "Message failed to send, Please try again!", "error");
        console.error("EmailJS error:", err);
      });
}