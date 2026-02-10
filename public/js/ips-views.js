/**
 * INSTITUTE FOR PRECEDENT STUDIES ARCHIVE
 * Shared View Utilities & Logic
 */

const IPS_VIEW_UTILS = (function() {
    /**
     * Common stratigraphic boot sequence for view pages.
     */
    async function waitForDB() {
        let retries = 0;
        while (!window.IPS_DB && retries < 100) {
            await new Promise(r => setTimeout(r, 60));
            retries++;
        }
        if (!window.IPS_DB) {
            throw new Error('Database service not located in system environment.');
        }
        return window.IPS_DB;
    }

    /**
     * Standard error handler for stratigraphic retrieval.
     */
    function handleRetrievalError(err, titleId, contentId) {
        console.error('IPS :: VIEW ERROR:', err);
        const titleEl = document.getElementById(titleId);
        const contentEl = document.getElementById(contentId);
        
        if (titleEl) titleEl.textContent = 'ERR: STRATIGRAPHIC COLLAPSE';
        if (contentEl) {
            contentEl.innerHTML = `<div class="advisory advisory--red">${err.message}</div>`;
        }
    }

    return {
        waitForDB,
        handleRetrievalError
    };
})();

(function() {
    if (!window.navigation) return;

    const setDirection = (type, destinationIdx) => {
        const html = document.documentElement;
        const currentIdx = window.navigation.currentEntry.index;
        
        if (type === 'traverse' && destinationIdx < currentIdx) {
            html.setAttribute('data-transition-direction', 'back');
        } else {
            html.setAttribute('data-transition-direction', 'forward');
        }
    };

    // 1. EARLY SIGNAL: On link click / navigation start
    window.navigation.addEventListener('navigate', (event) => {
        if (event.navigationType === 'traverse') {
            setDirection('traverse', event.destination.index);
        } else {
            setDirection('push', -1);
        }
    });

    // 2. OUTGOING PAGE: Final state capture
    window.addEventListener('pageswap', (event) => {
        if (!event.viewTransition) return;
        const activation = window.navigation.activation;
        if (activation && activation.navigationType === 'traverse') {
            setDirection('traverse', activation.entry.index);
        }
    });

    // 3. INCOMING PAGE: New state reveal
    window.addEventListener('pagereveal', (event) => {
        if (!event.viewTransition) return;
        // In MPAs, we usually have to rely on the Activation or just detecting traverse
        const activation = window.navigation.activation;
        if (activation && activation.navigationType === 'traverse') {
            // Note: activation.from isn't always reliable, 
            // but the navigate event on the previous page should have set it.
            // If we are here, we check activation index
            if (activation.entry && activation.from && activation.entry.index < activation.from.index) {
                document.documentElement.setAttribute('data-transition-direction', 'back');
            }
        }
    });
})();


