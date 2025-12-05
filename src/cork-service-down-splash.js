import { LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {render, styles} from "./cork-service-down-splash.tpl.js";

import { MainDomElement } from "@ucd-lib/theme-elements/utils/mixins/main-dom-element.js";
import Mixin from "@ucd-lib/theme-elements/utils/mixins/mixin.js";

import './css/index.js';

export default class CorkServiceDownSplash extends Mixin(LitElement)
  .with( MainDomElement) {

  static get properties() {
    return {
      headerText: { type: String },
      hideHeader: { type: Boolean },
      explanationText: { type: String },
      hideExplanation: { type: Boolean },
      additionalText: { type: String },
      belowImageContent: { type: String }
    }
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.headerText = 'Well, nuts. Something broke.';
    this.hideHeader = false;

    this.explanationText = `This service is temporarily unavailable. We're working to restore access as quickly as possible.`;
    this.hideExplanation = false;

    this.additionalText = '';
    this.belowImageContent = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.readConfig();
    this.style.display = 'block';
  }

  readConfig(){
    if ( window.APP_CONFIG?.headerText ){
      this.headerText = window.APP_CONFIG.headerText;
    }
    if ( window.APP_CONFIG?.hideHeader ){
      this.hideHeader = window.APP_CONFIG.hideHeader;
    }
    if ( window.APP_CONFIG?.explanationText ){
      this.explanationText = unsafeHTML(window.APP_CONFIG.explanationText);
    }
    if ( window.APP_CONFIG?.hideExplanation ){
      this.hideExplanation = window.APP_CONFIG.hideExplanation;
    }
    if ( window.APP_CONFIG?.additionalText ){
      this.additionalText = unsafeHTML(window.APP_CONFIG.additionalText);
    }
    if ( window.APP_CONFIG?.belowImageContent ){
      this.belowImageContent = unsafeHTML(window.APP_CONFIG.belowImageContent);
    }
  }

}

customElements.define('cork-service-down-splash', CorkServiceDownSplash);