-- TERMINAL GRADIENT INSTITUTIONAL ARCHIVE
-- Backend Schema :: Deep-Time Jurisprudential Records
-- Version: 1.0

-- ============================================
-- 1. ENUMS & PATTERNS
-- ============================================

CREATE TABLE phenomenological_patterns (
    pattern_id CHAR(1) PRIMARY KEY, -- 'A', 'B', 'C'
    name VARCHAR(50) NOT NULL,      -- 'Alpha', 'Beta', 'Gamma'
    description TEXT,
    css_class VARCHAR(50)           -- 'register-flag--pattern-a'
);

INSERT INTO phenomenological_patterns VALUES 
('A', 'Alpha', 'Systemic Stillness / Terminal Stability', 'register-flag--pattern-a'),
('B', 'Beta', 'Dynamic Fracture / Structural Interruption', 'register-flag--pattern-b'),
('C', 'Gamma', 'Cognitive Invalidation / Meaning Collapse', 'register-flag--pattern-c');

-- ============================================
-- 2. CASES (The Stories/Institutional Analysis)
-- ============================================

CREATE TABLE cases (
    case_id VARCHAR(20) PRIMARY KEY, -- e.g., 'CS-S01'
    title VARCHAR(255) NOT NULL,
    epoch_estimate VARCHAR(100),     -- e.g., '15,000 AI'
    observed_pattern CHAR(1) REFERENCES phenomenological_patterns(pattern_id),
    sentinel_attribution VARCHAR(100),
    epistemic_status VARCHAR(100),   -- e.g., 'Contested', 'Verified'
    analysis_text TEXT,              -- The main institutional analysis prose
    completeness_pct INT DEFAULT 0,  -- 0-100
    access_level VARCHAR(50) DEFAULT 'PUBLIC',
    last_verification_date DATE,
    validation_hash VARCHAR(64)      -- e.g., '0x4F22'
);

-- ============================================
-- 3. FRAGMENTS (Raw Data Artifacts)
-- ============================================

CREATE TABLE fragments (
    fragment_id VARCHAR(20) PRIMARY KEY, -- e.g., 'RF-0001'
    title VARCHAR(255),
    collection_attribution VARCHAR(100) DEFAULT 'REMNANTS',
    time_reference_basis CHAR(2),        -- 'AI' or 'PI'
    pi_estimation INT,                   -- Normalized PI year for sorting
    strata_depth DECIMAL(10,2),          -- Recovery depth in meters
    isotope_variance DECIMAL(10,5),      -- Esoteric metadata
    epistemic_confidence DECIMAL(5,2),   -- 0-100%
    content_text TEXT NOT NULL,          -- Verbatim artifact text
    is_corrupted BOOLEAN DEFAULT FALSE
);

-- ============================================
-- 4. JUNCTION: CASE FRAGMENTS (In-line Framing)
-- ============================================

CREATE TABLE case_fragments (
    case_id VARCHAR(20) REFERENCES cases(case_id),
    fragment_id VARCHAR(20) REFERENCES fragments(fragment_id),
    display_order INT,                   -- Order within the case analysis
    mini_header_meta JSON,               -- Overriding metadata for the frame header
    PRIMARY KEY (case_id, fragment_id)
);

-- ============================================
-- 5. SEARCH INDEX (System Query Cache)
-- ============================================

CREATE TABLE search_index (
    entry_id SERIAL PRIMARY KEY,
    target_type VARCHAR(10),             -- 'CASE' or 'FRAGMENT'
    target_id VARCHAR(20),
    search_vector TSVECTOR,              -- Postgres-specific Full Text Search
    last_indexed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- 6. VIEWS (For Case-View Page Generation)
-- ============================================

-- View to join Case with its Pattern Metadata
CREATE VIEW view_institutional_cases AS
SELECT 
    c.*, 
    p.name AS pattern_name, 
    p.css_class AS pattern_css
FROM cases c
JOIN phenomenological_patterns p ON c.observed_pattern = p.pattern_id;
