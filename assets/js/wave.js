class WaveSeparator extends HTMLElement {
    connectedCallback() {

        const color = this.getAttribute('color') || '#000000';
        this.innerHTML = `
            <div class="wave-separator" style="--wave-color: ${color};">
              <div class="wave-layer wave-1">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path
                    d="M-500,50 Q-375,0 -250,50 T0,50 Q125,0 250,50 T500,50 Q625,0 750,50 T1000,50 Q1125,0 1250,50 T1500,50 V101 H-500 Z"
                    fill="var(--wave-color)">
                  </path>
                </svg>
              </div>
              <div class="wave-layer wave-2">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path
                    d="M-500,50 Q-375,100 -250,50 T0,50 Q125,100 250,50 T500,50 Q625,100 750,50 T1000,50 Q1125,100 1250,50 T1500,50 V101 H-500 Z"
                    fill="var(--wave-color)"></path>
                </svg>
              </div>
              <div class="wave-layer wave-3">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path
                    d="M-500,50 Q-375,0 -250,50 T0,50 Q125,0 250,50 T500,50 Q625,0 750,50 T1000,50 Q1125,0 1250,50 T1500,50 V101 H-500 Z"
                    fill="var(--wave-color)">
                  </path>
                </svg>
              </div>
            </div>
        `;
    }
}

customElements.define('wave-separator-component', WaveSeparator);