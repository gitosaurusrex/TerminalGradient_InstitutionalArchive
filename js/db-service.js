/**
 * INSTITUTE FOR PRECEDENT STUDIES ARCHIVE
 * Database Service (SQLite Wasm)
 * 
 * Provides a client-side SQL interface for record retrieval and search.
 */

console.log('IPS :: DATABASE SERVICE LOADING...');

const DB_SERVICE = (function () {
    let db = null;
    let SQL = null;
    let initPromise = null;

    const SCHEMA_URL = '/assets/database/schema.sql';
    const SEED_URL = '/assets/database/seed.sql';
    const SQL_JS_CONFIG = {
        locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/${filename}`
    };

    /**
     * Shows a visible diagnostic overlay if a critical error occurs.
     */
    function showErrorOverlay(message, details = '') {
        console.error('IPS :: DIAGNOSTIC ERROR:', message, details);
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(40, 0, 0, 0.95); color: #ff0000;
            z-index: 10000; font-family: monospace; padding: 2rem;
            border: 4px solid #ff0000; overflow: auto;
        `;
        overlay.innerHTML = `
            <h1 style="border-bottom: 2px solid #ff0000;">SYSTEM STRATIGRAPHIC COLLAPSE</h1>
            <p><strong>ERROR:</strong> ${message}</p>
            <pre style="background: #110000; padding: 1rem; border: 1px solid #550000;">${details}</pre>
            <button onclick="location.reload()" style="background: #ff0000; color: #fff; border: none; padding: 0.5rem 1rem; cursor: pointer;">RE-INITIALIZE STRATA</button>
        `;
        document.body.appendChild(overlay);
    }

    /**
     * Initializes the database (Singleton pattern with lock).
     */
    async function init() {
        if (initPromise) return initPromise;

        initPromise = (async () => {
            console.log('IPS :: INITIALIZING ARCHIVE DATABASE...');
            try {
                // 1. Load SQL.js
                if (!window.initSqlJs) {
                    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/sql-wasm.js');
                }
                SQL = await window.initSqlJs(SQL_JS_CONFIG);

                // 2. Create in-memory database
                db = new SQL.Database();

                // 3. Load Schema
                console.log('IPS :: FETCHING SCHEMA FROM:', SCHEMA_URL);
                const schema = await fetchText(SCHEMA_URL);
                console.log('IPS :: SCHEMA DATA (chars):', schema.length);
                db.run(schema);

                // 4. Load Seed Data
                console.log('IPS :: FETCHING SEED DATA FROM:', SEED_URL);
                const seed = await fetchText(SEED_URL);
                console.log('IPS :: SEED DATA (chars):', seed.length);
                db.run(seed);

                console.log('IPS :: DATABASE READY.');
                return db;
            } catch (err) {
                showErrorOverlay('DATABASE INITIALIZATION FAILED', err.toString());
                throw err;
            }
        })();

        return initPromise;
    }

    /**
     * Executes a SQL query and returns an array of objects.
     */
    async function query(sql, params = []) {
        await init();
        try {
            const stmt = db.prepare(sql);
            stmt.bind(params);
            const results = [];
            while (stmt.step()) results.push(stmt.getAsObject());
            stmt.free();
            return results;
        } catch (err) {
            console.error('IPS :: QUERY ERROR:', sql, params, err);
            return [];
        }
    }

    /**
     * Helper to load external scripts.
     */
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
            document.head.appendChild(script);
        });
    }

    /**
     * Helper to fetch text assets.
     */
    async function fetchText(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error ${response.status} when fetching ${url}`);
        return await response.text();
    }

    // Public API
    return {
        init,
        query,
        // Specific Accessors
        getFragments: () => query('SELECT * FROM fragments ORDER BY pi_estimation DESC'),
        getCase: (id) => query('SELECT * FROM view_institutional_cases WHERE case_id = $id', { '$id': id }),
        getCaseFragments: (id) => query(`
            SELECT f.*, cf.display_order, cf.mini_header_meta 
            FROM fragments f
            JOIN case_fragments cf ON f.fragment_id = cf.fragment_id
            WHERE cf.case_id = $id
            ORDER BY cf.display_order ASC
        `, { '$id': id }),
                search: (term) => query(`
                    SELECT fragment_id, title, 'FRAGMENT' as collection_attribution, content_text 
                    FROM fragments 
                    WHERE title LIKE $term OR content_text LIKE $term
                    UNION
                    SELECT case_id as fragment_id, title, 'CASE' as collection_attribution, analysis_text as content_text
                    FROM cases
                    WHERE title LIKE $term OR analysis_text LIKE $term
                `, { '$term': `%${term}%` }),
        getFragment: (id) => query('SELECT * FROM fragments WHERE fragment_id = $id', { '$id': id }),
        getReferringCases: (fragmentId) => query(`
            SELECT c.case_id, c.title
            FROM cases c
            JOIN case_fragments cf ON c.case_id = cf.case_id
            WHERE cf.fragment_id = $fragmentId
            ORDER BY c.case_id ASC
        `, { '$fragmentId': fragmentId })
    };
})();
                
                // Export for use in other scripts
                window.IPS_DB = DB_SERVICE;
