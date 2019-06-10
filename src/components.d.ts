/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppHome {}
  interface AppRoot {}
  interface AppState {}
  interface ClickCounter {}
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppStateElement extends Components.AppState, HTMLStencilElement {}
  var HTMLAppStateElement: {
    prototype: HTMLAppStateElement;
    new (): HTMLAppStateElement;
  };

  interface HTMLClickCounterElement extends Components.ClickCounter, HTMLStencilElement {}
  var HTMLClickCounterElement: {
    prototype: HTMLClickCounterElement;
    new (): HTMLClickCounterElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'app-state': HTMLAppStateElement;
    'click-counter': HTMLClickCounterElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppState extends JSXBase.HTMLAttributes<HTMLAppStateElement> {
    'onSTATE_NUM_CLICKS_UPDATED'?: (event: CustomEvent<any>) => void;
  }
  interface ClickCounter extends JSXBase.HTMLAttributes<HTMLClickCounterElement> {
    'onACTION_COUNTER_CLICKED'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-root': AppRoot;
    'app-state': AppState;
    'click-counter': ClickCounter;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


