import { Component, Event, EventEmitter, State, Listen } from "@stencil/core";

@Component({
  tag: 'app-state'
})
export class AppState {

  @Event() STATE_NUM_CLICKS_UPDATED: EventEmitter;

  @State() appState: {
    numberOfClicks: number
  };

  componentDidLoad() {

    // Initialize application state
    this.appState = {
      numberOfClicks: 0
    };
  }

  @Listen('document:ACTION_COUNTER_CLICKED')
  incrementClickCount(_event: any) {

    // console.log('handling ACTION_COUNTER_CLICKED event', _event);

    try {
      let newCount = this.appState.numberOfClicks + 1;

      this.appState = {...this.appState, 
        numberOfClicks: newCount
      };

      this.STATE_NUM_CLICKS_UPDATED.emit({
        clickCount: newCount
      });
    }
    catch(error) {
      console.log('error', error);
    }
  }

  render() {
    return {};
  }
}