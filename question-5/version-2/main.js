(() => {
    document.addEventListener("DOMContentLoaded", (event) => {
        // FormHandler class located in separate file form-handler-class.js
        let formHandler = new FormHandler({
            method: 'POST',
            confirmationSelector: '.confirmation',
            formName: 'my-form' 
        });

        formHandler
            .beforeSubmit((form) => {
                // Do something
            })
            .submitted((success) => {
                if (success) {
                    // Do something
                }
            })
    });
})()