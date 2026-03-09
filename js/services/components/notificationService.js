export const callNotification = (type, message) => {
    let notificationType = null;

    if (type === 'success') notificationType = 'alert-success';
    if (type === 'warning') notificationType = 'alert-warning';
    if (type === 'error') notificationType = 'alert-danger';

    const notification = document.createElement('div');
    notification.classList.add('alert', notificationType);
    notification.setAttribute('role', 'alert');
    notification.textContent = message;

    notification.style.position = 'fixed';
    notification.style.bottom = '1rem';
    notification.style.left = '1rem';
    notification.style.zIndex = '9999';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}