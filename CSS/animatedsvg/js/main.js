function toggleClass(id, clazz) {
    let group = document.getElementById(id);
    if (group.classList.contains('fadeInLeft')) {
        document.getElementById('red_mask').classList = '';
    } else {
        document.getElementById('red_mask').classList = 'fadeInLeft';
    }
}
