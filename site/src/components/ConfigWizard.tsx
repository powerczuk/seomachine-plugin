import { useState } from 'preact/hooks';

const TOOLS = [
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'Wolumeny keywords, difficulty, backlinki',
    docsUrl: 'https://ahrefs.com/api',
    docsLabel: 'Jak uzyskać klucz API Ahrefs',
    configType: 'url' as const,
    defaultUrl: 'https://api.ahrefs.com/mcp/mcp',
  },
  {
    id: 'similarweb',
    name: 'Similarweb',
    description: 'Dane o ruchu, competitive intelligence',
    docsUrl: 'https://www.similarweb.com/corp/developer/',
    docsLabel: 'Jak uzyskać klucz API Similarweb',
    configType: 'url' as const,
    defaultUrl: 'https://mcp.similarweb.com',
  },
  {
    id: 'google-search-console',
    name: 'Google Search Console',
    description: 'Wyświetlenia, kliknięcia, CTR, pozycje',
    docsUrl: 'https://developers.google.com/webmaster-tools/v1/how-tos/authorizing',
    docsLabel: 'Jak skonfigurować Google Search Console API',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics 4',
    description: 'Ruch, zaangażowanie, konwersje',
    docsUrl: 'https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries',
    docsLabel: 'Jak skonfigurować Google Analytics 4 API',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'semrush',
    name: 'Semrush',
    description: 'Alternatywa dla Ahrefs — dane keywords/backlinków',
    docsUrl: 'https://www.semrush.com/api/',
    docsLabel: 'Jak uzyskać klucz API Semrush',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'Bezpośrednie publikowanie, inwentarz treści',
    docsUrl: 'https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/',
    docsLabel: 'Jak utworzyć Application Password w WordPress',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
  {
    id: 'dataforseo',
    name: 'DataForSEO',
    description: 'Real-time dane SERP, sugestie keywords',
    docsUrl: 'https://app.dataforseo.com/api-dashboard',
    docsLabel: 'Jak uzyskać dane logowania DataForSEO',
    configType: 'apikey' as const,
    defaultUrl: '',
  },
];

const PLATFORMS = [
  {
    id: 'claude-code',
    name: 'Claude Code / Cowork',
    path: '.mcp.json',
    wrapper: 'mcpServers',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    path: '.cursor/mcp.json',
    wrapper: 'mcpServers',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    path: '.vscode/mcp.json',
    wrapper: 'mcpServers',
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    path: 'Ustawienia MCP Windsurf',
    wrapper: 'mcpServers',
  },
  {
    id: 'claude-desktop',
    name: 'Claude Desktop',
    path: 'claude_desktop_config.json',
    wrapper: 'mcpServers',
  },
];

export default function ConfigWizard() {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());
  const [apiKeys, setApiKeys] = useState<Record<string, string>>({});
  const [platform, setPlatform] = useState('claude-code');
  const [copied, setCopied] = useState(false);

  const toggleTool = (id: string) => {
    setSelectedTools((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const setApiKey = (id: string, value: string) => {
    setApiKeys((prev) => ({ ...prev, [id]: value }));
  };

  const generateConfig = () => {
    const plat = PLATFORMS.find((p) => p.id === platform)!;
    const servers: Record<string, any> = {};

    for (const toolId of selectedTools) {
      const tool = TOOLS.find((t) => t.id === toolId)!;
      if (tool.configType === 'url') {
        servers[tool.id] = {
          type: 'http',
          url: apiKeys[tool.id] || tool.defaultUrl,
        };
      } else {
        const key = apiKeys[tool.id] || 'TWOJ_KLUCZ_API';
        servers[tool.id] = {
          type: 'http',
          url: `https://mcp.${tool.id}.com`,
          headers: {
            Authorization: `Bearer ${key}`,
          },
        };
      }
    }

    return JSON.stringify({ [plat.wrapper]: servers }, null, 2);
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(generateConfig());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedPlatform = PLATFORMS.find((p) => p.id === platform)!;

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* Security warning */}
      <div
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '0.75rem',
          border: '1px solid var(--destructive)',
          background: 'color-mix(in oklch, var(--destructive) 8%, var(--background))',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
      >
        <strong>Nie udostępniaj kluczy API.</strong> Traktuj je jak hasła. Nigdy nie
        wklejaj ich na publicznych stronach, w repozytoriach Git ani w wiadomościach.
      </div>

      {/* Step 1: Tool selection */}
      <h3 style={{ marginTop: 0 }}>1. Wybierz narzędzia</h3>
      <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {TOOLS.map((tool) => (
          <label
            key={tool.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              border: `1px solid ${selectedTools.has(tool.id) ? 'var(--primary)' : 'var(--border)'}`,
              background: selectedTools.has(tool.id)
                ? 'color-mix(in oklch, var(--primary) 6%, var(--card))'
                : 'var(--card)',
              cursor: 'pointer',
              transition: 'border-color 0.15s ease, background 0.15s ease',
            }}
          >
            <input
              type="checkbox"
              checked={selectedTools.has(tool.id)}
              onChange={() => toggleTool(tool.id)}
              style={{ marginTop: '0.2rem' }}
            />
            <div>
              <div style={{ fontWeight: 600 }}>{tool.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>
                {tool.description}
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Step 2: API keys for selected tools */}
      {selectedTools.size > 0 && (
        <>
          <h3>2. Klucze API</h3>
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
            {TOOLS.filter((t) => selectedTools.has(t.id)).map((tool) => (
              <div key={tool.id}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {tool.name}
                </label>
                {tool.configType === 'url' ? (
                  <input
                    type="text"
                    value={apiKeys[tool.id] || tool.defaultUrl}
                    onInput={(e) => setApiKey(tool.id, (e.target as HTMLInputElement).value)}
                    placeholder={tool.defaultUrl}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      background: 'var(--background)',
                      color: 'var(--foreground)',
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                    }}
                  />
                ) : (
                  <input
                    type="password"
                    value={apiKeys[tool.id] || ''}
                    onInput={(e) => setApiKey(tool.id, (e.target as HTMLInputElement).value)}
                    placeholder="Wklej klucz API..."
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--border)',
                      background: 'var(--background)',
                      color: 'var(--foreground)',
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                    }}
                  />
                )}
                <a
                  href={tool.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.25rem',
                    fontSize: '0.78rem',
                    color: 'var(--primary)',
                  }}
                >
                  {tool.docsLabel} &rarr;
                </a>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Step 3: Platform selection */}
      {selectedTools.size > 0 && (
        <>
          <h3>3. Wybierz platformę</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {PLATFORMS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  border: `1px solid ${platform === p.id ? 'var(--primary)' : 'var(--border)'}`,
                  background: platform === p.id ? 'var(--primary)' : 'var(--card)',
                  color: platform === p.id ? 'var(--primary-foreground)' : 'var(--foreground)',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Step 4: Generated config */}
      {selectedTools.size > 0 && (
        <>
          <h3>4. Skopiuj konfigurację</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>
            Wklej do pliku: <code>{selectedPlatform.path}</code>
          </p>
          <div style={{ position: 'relative' }}>
            <pre
              style={{
                padding: '1rem',
                borderRadius: '0.75rem',
                background: 'oklch(0.22 0 0)',
                color: 'oklch(0.85 0 0)',
                fontSize: '0.84rem',
                lineHeight: '1.55',
                overflow: 'auto',
                border: '1px solid var(--border)',
              }}
            >
              {generateConfig()}
            </pre>
            <button
              onClick={copyConfig}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--foreground)',
                fontSize: '0.78rem',
                cursor: 'pointer',
              }}
            >
              {copied ? 'Skopiowano!' : 'Kopiuj'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
