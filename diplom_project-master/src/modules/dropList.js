const dropList = () => {
    const clubList = document.querySelector('.club-select'),
          hiddenContent = clubList.querySelector('ul');

    const toggleList = () => {
        if (clubList.classList.contains('list-active')) {
            clubList.classList.remove('list-active');
            hiddenContent.style.display = 'none';
        } else {
            clubList.classList.add('list-active');
            hiddenContent.style.display = 'block';
        }
    };

    clubList.addEventListener('click', toggleList);
};

export default dropList;