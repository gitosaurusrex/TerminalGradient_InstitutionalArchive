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
 * DIRECTIONAL VIEW TRANSITIONS (MPA COMPATIBLE)
 * Uses sessionStorage to persist direction between page loads.
 */
(function() {
    if (!window.navigation) return;

    // 1. OUTGOING: Detect direction and store in session
    window.navigation.addEventListener('navigate', (event) => {
        // Early return for non-traversal events to prevent intercepting and potentially stripping URLs
        if (event.navigationType !== 'traverse') return;

        const currentIdx = window.navigation.currentEntry.index;
        const destinationIdx = event.destination.index;
        if (destinationIdx < currentIdx) {
            sessionStorage.setItem('ips-transition-direction', 'back');
        } else {
            sessionStorage.setItem('ips-transition-direction', 'forward');
        }
    });

    // 2. INCOMING: Read direction from session and apply to DOM
    window.addEventListener('pagereveal', (event) => {
        const direction = sessionStorage.getItem('ips-transition-direction') || 'forward';
        document.documentElement.setAttribute('data-transition-direction', direction);
        
        // Clean up for next navigation (default to forward)
        sessionStorage.removeItem('ips-transition-direction');
    });

    // Handle initial load or non-VT navigation
    if (!document.documentElement.hasAttribute('data-transition-direction')) {
        document.documentElement.setAttribute('data-transition-direction', 'forward');
    }
})();