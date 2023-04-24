const courseFilter = document.querySelector('#course-filter');
const courses = document.querySelectorAll('.Resources-list');

courseFilter.addEventListener('change', () => {
  const selectedOption = courseFilter.value;

  courses.forEach(courses => {
    if (selectedOption === 'all') {
      courses.style.display = 'block';
    } else if (selectedOption === 'Free') {
      if (courses.querySelector('.free-paid').id === 'free') {
        courses.style.display = 'block';
      } else {
        courses.style.display = 'none';
      }
    } else if (selectedOption === 'Paid') {
      if (courses.querySelector('.free-paid').id === 'paid') {
        courses.style.display = 'block';
      } else {
        courses.style.display = 'none';
      }
    }
  });
});