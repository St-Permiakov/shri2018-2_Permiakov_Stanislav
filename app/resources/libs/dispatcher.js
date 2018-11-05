class Dispatcher {
    constructor() { }

    trigger(action, state) {
        Dispatcher.callStores(state);
    }

    static callStores(state) {
        const event = new Event('updateData');
        event.state = state;
        document.dispatchEvent(event);
    }
}