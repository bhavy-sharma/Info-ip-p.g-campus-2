function showRatingForm(teacherName) {
    document.getElementById('selectedTeacher').innerText = 'Rate ' + teacherName;
    document.getElementById('ratingFormContainer').style.display = 'block';
    // Store the selected teacher's name in local storage
    localStorage.setItem('selectedTeacher', teacherName);
    // Redirect to the teacher rankings page
    // window.location.href = 'teacher_rankings.html';
}

const form = document.getElementById('ratingForm');
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


function addTeacherRating(event) {
    event.preventDefault();
    const teachingRating = document.querySelector('input[name="teaching"]:checked').value;
    const behaviorRating = document.querySelector('input[name="behavior"]:checked').value;
    const selectedTeacher = localStorage.getItem('selectedTeacher');

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = selectedTeacher + ': Total Ratings - 1';

    // Append the new list item to the existing teacher list
    const teacherList = document.querySelector('.teacher-list');
    teacherList.appendChild(listItem);

    // Clear the stored teacher name from local storage
    localStorage.removeItem('selectedTeacher');
}
