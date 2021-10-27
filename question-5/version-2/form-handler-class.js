class FormHandler {

    constructor(data) {
        // Preparing form data
        this.prepareFormData(data);

        // On submit listener
        this.onSubmitListener()
            .then(event => {

                // Handling submit event
                this.submit()
                    .then(result => {
                        if (this.submittedCallback != null) {
                            this.submittedCallback(result);
                        }
                    })
            })
    }

    async onSubmitListener() {
        return new Promise((resolve, reject) => {
            document.forms[this.formName].addEventListener('submit', e => {
                e.preventDefault();
                this.formData = new FormData(this.form);
                if (this.beforeSubmitCallback != null) {
                    this.beforeSubmitCallback(this.form);
                }

                resolve(e);
            });
        });
    }

    async submit() {
        let response = await this.makeRequest()
        this.responseHandler(response);
        return response.success;
    }

    async makeRequest() {
        let response = await fetch(this.url, {
            method: this.method,
            body: this.formData
          });

          return response.json();
    }

    prepareFormData(data) {
        this.form =  document.forms[data.formName];
        this.method = data.method;
        this.url = this.form.getAttribute('action');
        this.confirmationEl = this.form.querySelector(data.confirmationSelector)
        this.formName = data.formName;
        this.beforeSubmitCallback = null;
        this.submittedCallback = null;
    }

    responseHandler(data) {
        this.confirmationEl.innerHTML = data.confirmation;
        this.confirmationEl.style.display = 'block';
        this.confirmationEl.classList.remove('hidden');
        this.confirmationEl.classList.add('active');
    }

    beforeSubmit(callback = null) {
        this.beforeSubmitCallback = callback;
        return this;
    }

    submitted(callback = null) {
        this.submittedCallback = callback;
        return this;
    }
}