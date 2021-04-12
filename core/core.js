import DomHelper from "./domHelper.js";
import EventPublisher from "./eventPublisher.js";
import CustomerEvents from "./customerEvent.js";

const $event_publisher = new EventPublisher();
const $customer_events = new CustomerEvents();

let tool = {
    $domHelper: DomHelper,
    $event_publisher,
    $customer_events
};

export default tool;