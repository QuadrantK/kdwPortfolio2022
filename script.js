

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
     
formbutton("create", {
    action: "https://formspree.io/f/myyoedar",
    title: "WHAT YOU NEED?",
    fields: [
    { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
    },
    {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
    },
    { type: "submit" }      
    ],
    styles: {
    title: {
        backgroundColor: "gray"
    },
    button: {
        backgroundColor: "gray"
    }
    }
});
