(() => {
    document.addEventListener("DOMContentLoaded", () => {

        document.forms['my-form'].addEventListener('submit', e => {
            e.preventDefault();
            let form = e.target;

            fetch(form.getAttribute('action'), {
                method: 'POST',
                body: new FormData(form)
            })
            .then(response => response.json())
            .then(data => {
                let confirmationEl = form.querySelector('.confirmation');
               
                confirmationEl.innerHTML = data.confirmation;
                confirmationEl.style.display = 'block';
                confirmationEl.classList.remove('hidden');
                confirmationEl.classList.add('active');
            });
        });

    });
})()