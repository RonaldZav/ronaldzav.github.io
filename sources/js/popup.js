function popup(id, title, content) {
    const myPopup = new Popup({ id: id, title: title, content: content});
    myPopup.show();
};
