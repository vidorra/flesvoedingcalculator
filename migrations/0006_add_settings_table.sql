-- Create settings table for storing global and website-specific configuration
CREATE TABLE settings (
  id text PRIMARY KEY,
  key text NOT NULL,
  value text NOT NULL,
  website text NOT NULL DEFAULT 'flesvoedingcalculator',
  updated_at timestamp DEFAULT now() NOT NULL,
  UNIQUE(key, website)
);

-- Create index for faster lookups by key and website
CREATE INDEX idx_settings_key_website ON settings(key, website);

-- Seed default settings for both websites
INSERT INTO settings (id, key, value, website, updated_at) VALUES
  ('setting_flesvoeding_hide_ads_001', 'hide_all_ads', 'false', 'flesvoedingcalculator', now()),
  ('setting_togwaarde_hide_ads_001', 'hide_all_ads', 'false', 'togwaarde', now())
ON CONFLICT (key, website) DO NOTHING;
