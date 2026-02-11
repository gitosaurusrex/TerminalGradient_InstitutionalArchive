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

// Export for use in other scripts
window.IPS_VIEW_UTILS = IPS_VIEW_UTILS;

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

/**
 * HOME PAGE STATISTICS
 * Dynamically populates the collection statistics on the index page.
 */
document.addEventListener('DOMContentLoaded', async () => {
    // Only run on the index/root page
    const isIndex = window.location.pathname === '/' || 
                   window.location.pathname === '/index.html' || 
                   window.location.pathname.endsWith('/index.html') ||
                   (window.location.pathname === '' && window.location.href.endsWith('/'));

    if (!isIndex && document.getElementById('stat-fragments')) {
        // Fallback check in case path detection is tricky
    } else if (!isIndex) {
        return;
    }

    try {
        const db = await IPS_VIEW_UTILS.waitForDB();
        
        // 1. Fragment Count
        const fragments = await db.query('SELECT COUNT(*) as count FROM fragments');
        const fragEl = document.getElementById('stat-fragments');
        if (fragEl) fragEl.textContent = fragments[0]?.count || 0;

        // 2. Pattern Count and Names
        const patterns = await db.query('SELECT name FROM phenomenological_patterns');
        const patEl = document.getElementById('stat-patterns');
        if (patEl) {
            const count = patterns.length;
            const names = patterns.map(p => p.name).join(', ');
            patEl.textContent = `${count} Recognized (${names})`;
        }

        // 3. Epistemic Layers (Heuristic based on DB content)
        // We consider it "Verified" if we can find fragments (Artifactual) and cases (Institutional)
        const cases = await db.query('SELECT COUNT(*) as count FROM cases');
        const layersEl = document.getElementById('stat-layers');
        if (layersEl && fragments[0]?.count > 0 && cases[0]?.count > 0) {
            layersEl.textContent = 'Artifactual, Institutional, Interpretive';
        }

    } catch (err) {
        console.warn('IPS :: STATS ERROR:', err);
    }
});