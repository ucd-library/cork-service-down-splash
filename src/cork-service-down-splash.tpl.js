import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    @media (max-width: 767px) {
      .l-shrink {
        width: 100% !important;
      }
    }
    .main-image {
      box-sizing: border-box;
      height: auto;
      max-width: 100%;
      vertical-align: bottom;
      object-fit: cover;
    }
    .explanation {
      margin-top: 0;
      margin-bottom: 1rem;
      padding-top: .5rem;
    }
    .additional-text {
      margin-bottom: 1rem;
    }
    .below-image-content {
      margin-top: 1rem;
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`
<div class='l-container u-space-my--large'>
  <div class='l-shrink'>
    <div class='l-2col'>
      <div class='l-second u-space-my--auto'>
        <h2 class="heading--primary" ?hidden=${this.hideHeader}>${this.headerText}</h2>
        <div class="explanation" ?hidden=${this.hideExplanation}>${this.explanationText}</div>
        <div class="additional-text" ?hidden=${!this.additionalText}>${this.additionalText}</div>
      </div>
      <div class='l-first u-space-my--auto'>
        <div class='u-space-mb--small'>
          <img class='main-image' src='/cork-service-down-splash-assets/img/squirrel-unplugged.png' alt='Squirrel holding a chewed power cable' width="1000" height="750">
        </div>
      </div>
    </div>
    <div class="below-image-content" ?hidden=${!this.belowImageContent}>${this.belowImageContent}</div>
  </div>
</div>
`;}