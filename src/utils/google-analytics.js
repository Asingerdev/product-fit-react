import ReactGA from "react-ga4";

const initializeGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
};

const trackGAEvent = (category, action) => {
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };