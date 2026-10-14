import React, { useState, useEffect } from 'react';
import './TerminalDark.css';

const COMMANDS = [
  {
    id: 'recon',
    tab: 'network-scanner.py',
    icon: '🛡️',
    command: 'python3 network_sentinel.py --target 192.168.1.1 --threads 50 --nmap',
    output: [
      { text: '[*] Initializing multi-threaded socket reconnaissance engine...', color: '#60a5fa' },
      { text: '[+] Target Resolved: 192.168.1.1 [Host is UP, Latency: 0.8ms]', color: '#34d399' },
      { text: '[+] Port 22/tcp    OPEN   OpenSSH 8.9p1 (Ubuntu Linux)', color: '#38bdf8' },
      { text: '[+] Port 80/tcp    OPEN   nginx/1.24.0 (Reverse Proxy Active)', color: '#38bdf8' },
      { text: '[+] Port 443/tcp   OPEN   TLS 1.3 / Strict-Transport-Security', color: '#38bdf8' },
      { text: '[+] Port 3000/tcp  OPEN   Node.js Express Sentinel REST Gateway', color: '#34d399' },
      { text: '[+] Port 5000/tcp  OPEN   Flask Raw Socket Dispatcher', color: '#34d399' },
      { text: '[+] Port 8085/tcp  OPEN   RHCS Mission Telemetry Stream', color: '#34d399' },
      { text: '[✓] Nmap service scan complete: 6 ports open. Zero CVEs detected.', color: '#4ade80' },
      { text: '[✓] Security Posture Score: 98/100 (Hardened Production Grade)', color: '#a78bfa' }
    ]
  },
  {
    id: 'phishing',
    tab: 'phishing-audit.py',
    icon: '🎣',
    command: 'python3 smtp_audit.py --domain corp-security.local --verify-headers',
    output: [
      { text: '[*] Starting SMTP/TLS Defensive Audit & Header Inspection...', color: '#60a5fa' },
      { text: '[+] Performing DNS TXT lookup for SPF record (RFC 7208)...', color: '#e2e8f0' },
      { text: '[✓] SPF Policy: v=spf1 include:_spf.google.com ~all [PASS]', color: '#34d399' },
      { text: '[+] Verifying DKIM 2048-bit RSA Public Key Signature...', color: '#e2e8f0' },
      { text: '[✓] DKIM Selector: 2026._domainkey.corp-security.local [VALID]', color: '#34d399' },
      { text: '[+] Inspecting DMARC Alignment Policy (RFC 7489)...', color: '#e2e8f0' },
      { text: '[✓] DMARC Policy: p=reject; sp=reject; pct=100 [MAX SECURITY]', color: '#4ade80' },
      { text: '[+] Launching educational phishing simulation payload sandbox...', color: '#f43f5e' },
      { text: '[✓] Harvester clone mitigated. Awareness training metric logged.', color: '#a78bfa' }
    ]
  },
  {
    id: 'mern',
    tab: 'mern-deploy.sh',
    icon: '⚛️',
    command: 'npm run build && node server.js --cluster --db atlas-cloud',
    output: [
      { text: '[*] Compiling React 18 + Vite storefront bundle...', color: '#60a5fa' },
      { text: '[✓] Vite transformed 57 modules in 2.12s. Gzip payload: 61.8 kB', color: '#34d399' },
      { text: '[+] Initializing Node.js Express clustered workers [PID: 2841, 2842]...', color: '#e2e8f0' },
      { text: '[+] Connecting to MongoDB Atlas Cloud Cluster via TLS...', color: '#e2e8f0' },
      { text: '[✓] MongoDB connected: forever-production-db (Ping: 12ms)', color: '#34d399' },
      { text: '[+] Stripe & Razorpay webhook listeners active on /api/order/webhook', color: '#38bdf8' },
      { text: '[✓] Storefront live on Edge CDN. Zero downtime deployment active.', color: '#4ade80' }
    ]
  },
  {
    id: 'telemetry',
    tab: 'mesh-telemetry.ts',
    icon: '🛰️',
    command: 'rhcs-mesh --listen 8085 --protocol lora-satellite --failover-auto',
    output: [
      { text: '[*] Binding RHCS Telemetry Sensor Hub on port 8085...', color: '#60a5fa' },
      { text: '[+] Mesh Nodes Registered: 12 IoT Nodes (Disaster Black-Spot Mesh)', color: '#34d399' },
      { text: '[+] Sub-GHz radio link active: Signal RSSI -72 dBm [EXCELLENT]', color: '#38bdf8' },
      { text: '[+] Ingesting real-time packet stream -> Chart.js telemetry feed', color: '#e2e8f0' },
      { text: '[✓] Threat Matrix: P1: 0 | P2: 0 | P3: 0 | Node Heartbeats: 100% UP', color: '#4ade80' },
      { text: '[✓] Mission Command Console ready at http://localhost:8085', color: '#a78bfa' }
    ]
  }
];

const TerminalDark = () => {
  const [activeTab, setActiveTab] = useState(COMMANDS[0]);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setDisplayedLines([]);
    let currentLine = 0;
    const totalLines = activeTab && activeTab.output ? activeTab.output.length : 0;

    const interval = setInterval(() => {
      if (currentLine < totalLines) {
        const item = activeTab.output[currentLine];
        if (item) {
          setDisplayedLines((prev) => [...prev, item]);
        }
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 140);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleCopy = () => {
    if (activeTab && activeTab.command) {
      navigator.clipboard.writeText(activeTab.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="terminal-dark-wrapper">
      <div className="terminal-dark-window">
        {/* macOS Traffic Light Header & Tabs */}
        <div className="terminal-header-bar">
          <div className="terminal-window-dots">
            <span className="dot-traffic dot-red" title="Close"></span>
            <span className="dot-traffic dot-yellow" title="Minimize"></span>
            <span className="dot-traffic dot-green" title="Maximize"></span>
          </div>

          <div className="terminal-tab-list">
            {COMMANDS.map((cmd) => (
              <button
                key={cmd.id}
                type="button"
                className={`terminal-tab-btn ${activeTab && activeTab.id === cmd.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cmd)}
              >
                <span className="tab-icon">{cmd.icon}</span>
                <span className="tab-filename">{cmd.tab}</span>
              </button>
            ))}
          </div>

          <div className="terminal-actions-right">
            <button 
              type="button" 
              className="terminal-copy-btn" 
              onClick={handleCopy}
              title="Copy Command to Clipboard"
            >
              {copied ? '✓ Copied' : '📋 Copy'}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          {/* Active Command Prompt */}
          <div className="terminal-prompt-line">
            <span className="prompt-user">riyansh@sentinel</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~/production-workspace</span>
            <span className="prompt-dollar">$</span>
            <span className="prompt-cmd">{activeTab && activeTab.command ? activeTab.command : ''}</span>
            <span className="terminal-blinking-cursor"></span>
          </div>

          {/* Real-Time Output Stream */}
          <div className="terminal-output-stream">
            {displayedLines.filter(Boolean).map((line, idx) => (
              <div key={idx} className="terminal-log-line" style={{ color: (line && line.color) ? line.color : '#e2e8f0' }}>
                <span className="line-timestamp">[{String(idx + 1).padStart(2, '0')}]</span>
                <span className="line-content">{(line && line.text) ? line.text : ''}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="terminal-status-bar">
          <div className="status-left">
            <span className="status-indicator"></span>
            <span>TERMINAL ACTIVE • SHELL: BASH</span>
          </div>
          <div className="status-right">
            <span>UTF-8</span>
            <span>•</span>
            <span>PYTHON 3.12</span>
            <span>•</span>
            <span>NODE 24.19</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalDark;
