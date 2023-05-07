console.log('Service worker loaded...');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push received...');
    self.registration.showNotification(data.title, {
        body: 'Message from Joseph Olayanju',
        icon: 'https://w7.pngwing.com/pngs/141/717/png-transparent-brand-logo-white-letter-j-white-text-logo.png'
    });
}
);

