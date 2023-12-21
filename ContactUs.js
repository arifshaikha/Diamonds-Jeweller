function sendEmail() {
    let name = document.getElementById('name').value;
    let emailID = document.getElementById('email').value;
    let mobile = document.getElementById('mobileNo').value;
    let message = document.getElementById('message').value;
    let Msgbody = `<br/><br/>Name: <b>${name}</b> <br/><br/> Email: <b>${emailID} </b><br/><br/> 
    Contact No.: <b>${mobile}</b><br/> <br/> Message: <b>${message}</b>`;

    console.log("hiiiii")
    if (mobile.length == 10) {

        Email.send({
            

            SecureToken: "1fe32d5e-25ba-49c1-90a4-0807616481f7",
            To: 'shrimeenakshidiamonds@gmail.com', // receiver Mail here
            From: "shrimeenakshidiamonds@gmail.com",
            Subject: "New Enquiry ( " + new Date(). toLocaleDateString("en-US") + " )",
            Body: Msgbody
        }).then(
            message => {
                if (message == 'OK') {
                    Swal.fire(
                        'Thank You!',
                        'We will get back to you at the earliest!',
                        'success'
                    )
                }
                else {
                    Swal.fire(
                        'Something went wrong!',
                        ' ',
                        'error'
                    )
                }

            }
        );
    }

    else{
        Swal.fire(
            'Please input a valid!',
            '10 digit mobile number',
            'error'
        )
    }
}