const toggleModal = (modal, modalLink, callback) => {
    try {
        modal.style.height = '100vh';
    } catch {}

    const openModal = () => {
        modal.style.display = 'block';
        try {
            callback();
        } catch {};
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    try {
        modalLink.addEventListener('click', openModal);
    } catch {};
    
    modal.addEventListener('click', e => {
        let target = e.target;

        if (target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')) {
            closeModal();
        };
    });
};

export default toggleModal;