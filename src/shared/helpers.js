import ReactGA from 'react-ga';

/**
 * Tracks an event on Google Analytics
 *
 * @param {string} description - Brief explanation of the event.
 */
export const trackEvent = (description) => {
    ReactGA.event({
        category: 'User Interaction',
        action: description,
    });
}