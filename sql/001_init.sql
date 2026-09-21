CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE IF NOT EXISTS users (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), username text UNIQUE NOT NULL,
 password_hash text NOT NULL, role text NOT NULL CHECK(role IN ('admin','editor','user')) DEFAULT 'user',
 active boolean NOT NULL DEFAULT true, password_changed_at timestamptz NOT NULL DEFAULT now(),
 created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS app_state (
 state_key text PRIMARY KEY, payload jsonb NOT NULL DEFAULT '{}'::jsonb,
 revision bigint NOT NULL DEFAULT 1, updated_by uuid REFERENCES users(id) ON DELETE SET NULL,
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS vehicle_strength (
 vehicle_id text PRIMARY KEY, crew integer NOT NULL DEFAULT 0 CHECK(crew>=0),
 pa integer NOT NULL DEFAULT 0 CHECK(pa>=0), total integer NOT NULL DEFAULT 1 CHECK(total>=1),
 source text NOT NULL DEFAULT 'system', reported_at timestamptz NOT NULL DEFAULT now(),
 updated_by uuid REFERENCES users(id) ON DELETE SET NULL
);
CREATE TABLE IF NOT EXISTS strength_history (
 id bigserial PRIMARY KEY, vehicle_id text NOT NULL, reported_crew integer NOT NULL DEFAULT 0,
 reported_pa integer NOT NULL DEFAULT 0, applied_crew integer NOT NULL DEFAULT 0,
 applied_pa integer NOT NULL DEFAULT 0, source text NOT NULL,
 user_id uuid REFERENCES users(id) ON DELETE SET NULL, created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS audit_log (
 id bigserial PRIMARY KEY, user_id uuid REFERENCES users(id) ON DELETE SET NULL,
 action text NOT NULL, entity_type text NOT NULL, entity_id text,
 details jsonb NOT NULL DEFAULT '{}'::jsonb, created_at timestamptz NOT NULL DEFAULT now()
);
INSERT INTO app_state(state_key,payload) VALUES
 ('vehicles','[]'),('incident','{}'),('sections','{}'),('map','{}'),('logbook','[]'),('settings','{}')
ON CONFLICT(state_key) DO NOTHING;
