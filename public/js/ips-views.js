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

/**
 * DIRECTIONAL VIEW TRANSITIONS
 * Detects back/forward navigation to flip animation direction.
 */
(function() {
    if (!window.navigation) return;

    window.navigation.addEventListener('navigate', (event) => {
        const html = document.documentElement;
        
        // Default to forward
        html.setAttribute('data-transition-direction', 'forward');

        if (event.navigationType === 'traverse') {
            const currentIdx = window.navigation.currentEntry.index;
            const destinationIdx = event.destination.index;

            if (destinationIdx < currentIdx) {
                html.setAttribute('data-transition-direction', 'back');
            }
        }
    });
})();

