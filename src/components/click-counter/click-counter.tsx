import { h, Component, Event, EventEmitter, State, Listen } from "@stencil/core";

@Component({
  tag: 'click-counter'
})
export class ClickCounter {

  @Event() ACTION_COUNTER_CLICKED: EventEmitter;

  @State() clickCount: number = 0;

  async handleClick() {

    this.ACTION_COUNTER_CLICKED.emit();
  }

  @Listen('document:STATE_NUM_CLICKS_UPDATED')
  handleClickCountUpdated(event: any) {

    // console.log('handling STATE_NUM_CLICKS_UPDATED event', event);

    try {

      this.clickCount = event.detail.clickCount;
    }
    catch(error) {
      console.log('error', error);
    }
  }

  render() {
    return[
      <ion-button onClick={()=>this.handleClick()}>
        {this.clickCount}
      </ion-button>
    ]
  }
}