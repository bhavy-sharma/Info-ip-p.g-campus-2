
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Process the ratings as needed (e.g., send them to a server)
    const teachingRating = this.elements['teaching'].value;
    const behaviorRating = this.elements['behavior'].value;
    // You can add further processing here, such as submitting the ratings via AJAX
    console.log('Teaching Style Rating:', teachingRating);
    console.log('Behavior Rating:', behaviorRating);

    // Reset star ratings
    const starInputs = document.querySelectorAll('.stars input');
    starInputs.forEach(input => {
        input.checked = false;
    });
});
