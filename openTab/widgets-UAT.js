(() => {
    "use strict";
    class t extends HTMLElement {
        constructor() {
            super(), this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            this.render()
        }
        getInteractionId() {
            let t = this.details;
            for (const a of t) try {
                return a[1].interaction.interactionId
            } catch (t) {
                return "change me to your own var from Flow Editor..."
            }
        }

        getOutbound() {
            let t = this.details;
            for (const a of t) try {
                return a[1].interaction.contactDirection.type
            } catch (t) {
                return "change me to your own var from Flow Editor..."
            }
        }
        // mediaInfo() {
        //     const t = this.cad;
        //     for (const a of t) {
        //         const t = a[1].interaction.media,
        //             i = Object.keys(t).map((a => t[a]));
        //         return i
        //     }
        // }
        // activeParticipants() {
        //     const t = this.cad;
        //     for (const a of t) {
        //         const t = a[1].interaction.media,
        //             i = Object.keys(t).map((a => {
        //                 const {
        //                     participants: i
        //                 } = t[a];
        //                 return i
        //             }));
        //         return i
        //     }
        // }

        render() {

            if (this.widgetName == "GVsetting") {
                const t = document.createElement("template");
                window.open("http://13.215.193.55:4000", '_blank').focus();
            }
        }


    }
    window.customElements.define("info-card", t)
})();
