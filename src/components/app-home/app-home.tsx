import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          This sample application is meant to test the performance of using
          events and listeners attached to the main document as a means of
          an event bus for communicating between components throughout an
          application. <br /> Click on a component to update the count, and all other
          components respond to the event by updating their count as well.
        </p>

        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
        <click-counter />
      </ion-content>
    ];
  }
}
