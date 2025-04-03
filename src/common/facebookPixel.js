export const FB_PIXEL_ID = '641035925350213'; // Apna Pixel ID yahan replace karein

// PageView Event
export const pageview = () => {
    window.fbq('track', 'PageView');
};

// Custom Event Tracking Function
export const trackEvent = (eventName, options = {}) => {
    window.fbq('track', eventName, options);
};
