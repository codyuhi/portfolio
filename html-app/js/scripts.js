function toggleCourses(type) {
    const div = document.getElementById(type + '-list');
    if(div.classList.contains('hidden')) {
        div.classList.remove('hidden');
    } else {
        div.classList.add('hidden');
    }
}