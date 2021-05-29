let swRegistration = null;
const serverKey = 'BA0TwmSbjv4474D6v0i2Q069qd8JI6lqWmc68u-LnzGlcP27833bBq7UXe9bOIjq5dhSLmVmHCEx1tgiSjpm1r0'; //Public Key

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.0/8 are considered localhost for IPv4.
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);

export async function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
            'worker. To learn more, visit https://cra.link/PWA',
          );
          if (Notification.permission !== 'grant') {
            NotificationPermission();
            subscribePushNotification();
          } else {
            subscribePushNotification();
          }

        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
        if (Notification.permission !== 'grant') {
          NotificationPermission();
          subscribePushNotification();
        } else {
          subscribePushNotification();
        }
      }
    });
    window.addEventListener('install', event => {
      console.log('V1 installing…');
    });
  }
}

async function registerValidSW(swUrl, config) {
  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    console.log('ORGINAL', registration);
    swRegistration = registration;
    console.log('swRegistration', swRegistration);
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log(
              'New content is available and will be used when all ' +
              'tabs for this page are closed. See https://cra.link/PWA.',
            );
            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  } catch (e) {
    console.error('Error during service worker registration:', error);
  }
}

async function checkValidServiceWorker(swUrl, config) {
  try {
    // Check if the service worker can be found. If it can't reload the page.
    const response = await fetch(swUrl, { headers: { 'Service-Worker': 'script' } });
    const contentType = response.headers.get('content-type');
    if (response.status === 404 ||
      (contentType != null && contentType.indexOf('javascript') === -1)
    ) {
      // No service worker found. Probably a different app. Reload the page.
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
      window.location.reload();
      console.log('IF');
    } else {
      // Service worker found. Proceed as normal.
      await registerValidSW(swUrl, config);
      console.log('ELSE');
      await subscribePushNotification();
    }
  } catch (e) {
    console.log('No internet connection found. App is running in offline mode.');
  }
}

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function NotificationPermission() {
  try {
    const status = await Notification.requestPermission();
    console.log('Notification Permission Status:', status);
  } catch (error) {
    console.log('error:', error);
  }
}

function saveSubscription(subscription) {
  const data = JSON.stringify(subscription);
  // POST Request for saving subscription
  return fetch(`https://pwa-admin.phma.pk/save-subscription`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .catch(error => console.log('error:', error));
}

async function subscribePushNotification() {
  console.log('swRegistration', swRegistration);
  if (!swRegistration) {
    return;
  }
  try {
    const applicationServerKey = urlB64ToUint8Array(serverKey);
    const options = { applicationServerKey, userVisibleOnly: true };
    const subscription = await swRegistration.pushManager.subscribe(options);
    if (subscription === undefined) {
      await NotificationPermission();
      await saveSubscription(subscription);
      console.log('IF PERMISSION');
    } else {
      await saveSubscription(subscription);
      console.log('ELSE AFTER PERMISSION');
    }
  } catch (e) {
    console.log('Error:', error);
  }
}

export async function displayNotification(title = 'TITLE', body = 'BODY') {
  try {
    if (Notification.permission === 'granted') {
      await swRegistration.showNotification(title, { body: body });
    }
  } catch (e) {
    console.log('Error:', e);
  }
}

export async function displayNotificationWithOptions() {
  const options = {
    body: 'Notification Body',
    icon: 'assets/icon.png',
    badge: 'assets/badge.png',
    vibrate: [100, 50, 100],
    data: { primaryKey: 1 },
    actions: [
      { action: 'go', title: 'Go to the site', icon: 'images/badge.png' },
      { action: 'close', title: 'No Thank You', icon: 'images/badge.png' },
    ],
  };
  if (Notification.permission === 'granted') {
    await swRegistration.showNotification('Title', options);
  } else {
    await NotificationPermission();
    await displayNotificationWithOptions();
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}