export const FB_PIXEL_ID = '641035925350213'; // Apna Pixel ID yahan replace karein

// PageView Event
// Initialize Facebook Pixel
export const initFacebookPixel = (pixelId) => {
    if (!window.fbq) {
        window.fbq = function () {
            window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
        };
        window.fbq.queue = [];
        window.fbq.loaded = true;
        window.fbq.version = '2.0';
        window.fbq.push = window.fbq;
        window.fbq('init', pixelId); // Initialize with Pixel ID
    }
};

// Track page views
export const pageview = () => {
    window.fbq('track', 'PageView');
};

// General event tracking function
export const trackEvent = (eventName, options = {}) => {
    window.fbq('track', eventName, options);
};

// Specific event tracking functions
export const trackInitiate = () => {
    window.fbq('track', 'Initiate');
};

export const trackDetailsSubmitted = (details = {}) => {
    window.fbq('track', 'DetailsSubmitted', details);
};

export const trackCheckout = (cartDetails = {}) => {
    window.fbq('track', 'Checkout', cartDetails);
};

export const trackSuccess = (orderDetails = {}) => {
    window.fbq('track', 'Purchase', orderDetails);
};

export const trackPaymentFailed = (errorDetails = {}) => {
    window.fbq('track', 'PaymentFailed', errorDetails);
};

