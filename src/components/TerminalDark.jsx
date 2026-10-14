import React, { useState, useEffect } from 'react';
import './TerminalDark.css';

const SNIPPETS = [
  {
    id: 'recon',
    tab: 'network_sentinel.py',
    icon: '🛡️',
    language: 'Python 3.12',
    badge: 'Raw Sockets & Multi-Threading',
    command: 'python3 network_sentinel.py --target 192.168.1.1 --threads 50 --nmap',
    rawCode: `# Network Recon Sentinel: Multi-Threaded TCP/UDP Socket Engine
import socket, concurrent.futures, time

def scan_port(target_ip: str, port: int, timeout: float = 0.8) -> dict:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(timeout)
        start = time.perf_counter()
        result = sock.connect_ex((target_ip, port))
        latency = (time.perf_counter() - start) * 1000.0
        
        if result == 0:
            try:
                banner = sock.recv(1024).decode('utf-8', errors='ignore').strip()
            except socket.timeout:
                banner = "Service Active (No Banner)"
            return {"port": port, "status": "OPEN", "latency_ms": round(latency, 2), "service": banner}
        return {"port": port, "status": "CLOSED"}

def scan_target(host: str, ports: list, max_workers: int = 50):
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(scan_port, host, p): p for p in ports}
        return [f.result() for f in concurrent.futures.as_completed(futures) if f.result()["status"] == "OPEN"]`,
    codeLines: [
      { tokens: [{ text: '# Network Recon Sentinel: Multi-Threaded TCP/UDP Socket Engine', type: 'comment' }] },
      { tokens: [{ text: 'import', type: 'keyword' }, { text: ' socket, concurrent.futures, time', type: 'plain' }] },
      { tokens: [] },
      { tokens: [
        { text: 'def', type: 'keyword' },
        { text: ' scan_port', type: 'function' },
        { text: '(', type: 'punctuation' },
        { text: 'target_ip', type: 'variable' },
        { text: ': ', type: 'punctuation' },
        { text: 'str', type: 'type' },
        { text: ', ', type: 'punctuation' },
        { text: 'port', type: 'variable' },
        { text: ': ', type: 'punctuation' },
        { text: 'int', type: 'type' },
        { text: ', ', type: 'punctuation' },
        { text: 'timeout', type: 'variable' },
        { text: ': ', type: 'punctuation' },
        { text: 'float', type: 'type' },
        { text: ' = ', type: 'operator' },
        { text: '0.8', type: 'number' },
        { text: ') -> ', type: 'operator' },
        { text: 'dict', type: 'type' },
        { text: ':', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '    with', type: 'keyword' },
        { text: ' socket.socket(socket.AF_INET, socket.SOCK_STREAM) ', type: 'plain' },
        { text: 'as', type: 'keyword' },
        { text: ' sock:', type: 'plain' }
      ] },
      { tokens: [{ text: '        sock.settimeout(timeout)', type: 'plain' }] },
      { tokens: [{ text: '        start = time.perf_counter()', type: 'plain' }] },
      { tokens: [
        { text: '        result = sock.', type: 'plain' },
        { text: 'connect_ex', type: 'function' },
        { text: '((target_ip, port))', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '        latency = (time.perf_counter() - start) * ', type: 'plain' },
        { text: '1000.0', type: 'number' }
      ] },
      { tokens: [
        { text: '        if', type: 'keyword' },
        { text: ' result == ', type: 'operator' },
        { text: '0', type: 'number' },
        { text: ':', type: 'punctuation' }
      ] },
      { tokens: [{ text: '            try:', type: 'keyword' }] },
      { tokens: [
        { text: '                banner = sock.recv(', type: 'plain' },
        { text: '1024', type: 'number' },
        { text: ').decode(', type: 'plain' },
        { text: "'utf-8'", type: 'string' },
        { text: ', errors=', type: 'plain' },
        { text: "'ignore'", type: 'string' },
        { text: ').strip()', type: 'plain' }
      ] },
      { tokens: [
        { text: '            except', type: 'keyword' },
        { text: ' socket.timeout:', type: 'plain' }
      ] },
      { tokens: [
        { text: '                banner = ', type: 'plain' },
        { text: '"Service Active (No Banner)"', type: 'string' }
      ] },
      { tokens: [
        { text: '            return', type: 'keyword' },
        { text: ' {', type: 'punctuation' },
        { text: '"port"', type: 'string' },
        { text: ': port, ', type: 'plain' },
        { text: '"status"', type: 'string' },
        { text: ': ', type: 'plain' },
        { text: '"OPEN"', type: 'string' },
        { text: ', ', type: 'plain' },
        { text: '"latency_ms"', type: 'string' },
        { text: ': round(latency, ', type: 'plain' },
        { text: '2', type: 'number' },
        { text: '), ', type: 'plain' },
        { text: '"service"', type: 'string' },
        { text: ': banner}', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '        return', type: 'keyword' },
        { text: ' {', type: 'punctuation' },
        { text: '"port"', type: 'string' },
        { text: ': port, ', type: 'plain' },
        { text: '"status"', type: 'string' },
        { text: ': ', type: 'plain' },
        { text: '"CLOSED"', type: 'string' },
        { text: '}', type: 'punctuation' }
      ] },
      { tokens: [] },
      { tokens: [
        { text: 'def', type: 'keyword' },
        { text: ' scan_target', type: 'function' },
        { text: '(host: ', type: 'punctuation' },
        { text: 'str', type: 'type' },
        { text: ', ports: ', type: 'punctuation' },
        { text: 'list', type: 'type' },
        { text: ', max_workers: ', type: 'punctuation' },
        { text: 'int', type: 'type' },
        { text: ' = ', type: 'operator' },
        { text: '50', type: 'number' },
        { text: '):', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '    with', type: 'keyword' },
        { text: ' concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) ', type: 'plain' },
        { text: 'as', type: 'keyword' },
        { text: ' executor:', type: 'plain' }
      ] },
      { tokens: [
        { text: '        futures = {executor.submit(scan_port, host, p): p ', type: 'plain' },
        { text: 'for', type: 'keyword' },
        { text: ' p ', type: 'plain' },
        { text: 'in', type: 'keyword' },
        { text: ' ports}', type: 'plain' }
      ] },
      { tokens: [
        { text: '        return', type: 'keyword' },
        { text: ' [f.result() ', type: 'plain' },
        { text: 'for', type: 'keyword' },
        { text: ' f ', type: 'plain' },
        { text: 'in', type: 'keyword' },
        { text: ' concurrent.futures.as_completed(futures) ', type: 'plain' },
        { text: 'if', type: 'keyword' },
        { text: ' f.result()[', type: 'plain' },
        { text: '"status"', type: 'string' },
        { text: '] == ', type: 'operator' },
        { text: '"OPEN"', type: 'string' },
        { text: ']', type: 'plain' }
      ] }
    ],
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
    tab: 'phishing_audit.py',
    icon: '🎣',
    language: 'Python 3.12',
    badge: 'SMTP, SPF & DMARC Auditing',
    command: 'python3 phishing_audit.py --domain corp-security.local --verify-headers',
    rawCode: `# Defensive Phishing Awareness & Protocol Security Suite
import dns.resolver, smtplib, ssl, email.utils

def audit_domain_records(domain: str) -> dict:
    results = {"domain": domain, "spf": False, "dmarc": False, "policy": "none"}
    try:
        txt_records = dns.resolver.resolve(domain, 'TXT')
        for record in txt_records:
            entry = record.to_text().strip('"')
            if entry.startswith("v=spf1"):
                results["spf"] = True
                results["spf_record"] = entry
        
        dmarc_records = dns.resolver.resolve(f"_dmarc.{domain}", 'TXT')
        for r in dmarc_records:
            entry = r.to_text().strip('"')
            if "p=reject" in entry or "p=quarantine" in entry:
                results["dmarc"] = True
                results["policy"] = "STRICT_ENFORCE"
    except (dns.resolver.NXDOMAIN, dns.resolver.NoAnswer):
        results["error"] = "DNS Records Missing - Domain Spoofing Vulnerable"
    return results`,
    codeLines: [
      { tokens: [{ text: '# Defensive Phishing Awareness & Protocol Security Suite', type: 'comment' }] },
      { tokens: [{ text: 'import', type: 'keyword' }, { text: ' dns.resolver, smtplib, ssl, email.utils', type: 'plain' }] },
      { tokens: [] },
      { tokens: [
        { text: 'def', type: 'keyword' },
        { text: ' audit_domain_records', type: 'function' },
        { text: '(', type: 'punctuation' },
        { text: 'domain', type: 'variable' },
        { text: ': ', type: 'punctuation' },
        { text: 'str', type: 'type' },
        { text: ') -> ', type: 'operator' },
        { text: 'dict', type: 'type' },
        { text: ':', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '    results = {', type: 'plain' },
        { text: '"domain"', type: 'string' },
        { text: ': domain, ', type: 'plain' },
        { text: '"spf"', type: 'string' },
        { text: ': ', type: 'plain' },
        { text: 'False', type: 'keyword' },
        { text: ', ', type: 'plain' },
        { text: '"dmarc"', type: 'string' },
        { text: ': ', type: 'plain' },
        { text: 'False', type: 'keyword' },
        { text: ', ', type: 'plain' },
        { text: '"policy"', type: 'string' },
        { text: ': ', type: 'plain' },
        { text: '"none"', type: 'string' },
        { text: '}', type: 'plain' }
      ] },
      { tokens: [{ text: '    try:', type: 'keyword' }] },
      { tokens: [
        { text: '        txt_records = dns.resolver.', type: 'plain' },
        { text: 'resolve', type: 'function' },
        { text: '(domain, ', type: 'punctuation' },
        { text: "'TXT'", type: 'string' },
        { text: ')', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '        for', type: 'keyword' },
        { text: ' record ', type: 'plain' },
        { text: 'in', type: 'keyword' },
        { text: ' txt_records:', type: 'plain' }
      ] },
      { tokens: [
        { text: '            entry = record.to_text().strip(', type: 'plain' },
        { text: "'\"'", type: 'string' },
        { text: ')', type: 'plain' }
      ] },
      { tokens: [
        { text: '            if', type: 'keyword' },
        { text: ' entry.startswith(', type: 'plain' },
        { text: '"v=spf1"', type: 'string' },
        { text: '):', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '                results[', type: 'plain' },
        { text: '"spf"', type: 'string' },
        { text: '] = ', type: 'operator' },
        { text: 'True', type: 'keyword' }
      ] },
      { tokens: [
        { text: '                results[', type: 'plain' },
        { text: '"spf_record"', type: 'string' },
        { text: '] = entry', type: 'plain' }
      ] },
      { tokens: [] },
      { tokens: [
        { text: '        dmarc_records = dns.resolver.', type: 'plain' },
        { text: 'resolve', type: 'function' },
        { text: '(f"_dmarc.{domain}", ', type: 'string' },
        { text: "'TXT'", type: 'string' },
        { text: ')', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '        for', type: 'keyword' },
        { text: ' r ', type: 'plain' },
        { text: 'in', type: 'keyword' },
        { text: ' dmarc_records:', type: 'plain' }
      ] },
      { tokens: [
        { text: '            entry = r.to_text().strip(', type: 'plain' },
        { text: "'\"'", type: 'string' },
        { text: ')', type: 'plain' }
      ] },
      { tokens: [
        { text: '            if', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: '"p=reject"', type: 'string' },
        { text: ' in entry ', type: 'plain' },
        { text: 'or', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: '"p=quarantine"', type: 'string' },
        { text: ' in entry:', type: 'plain' }
      ] },
      { tokens: [
        { text: '                results[', type: 'plain' },
        { text: '"dmarc"', type: 'string' },
        { text: '] = ', type: 'operator' },
        { text: 'True', type: 'keyword' }
      ] },
      { tokens: [
        { text: '                results[', type: 'plain' },
        { text: '"policy"', type: 'string' },
        { text: '] = ', type: 'operator' },
        { text: '"STRICT_ENFORCE"', type: 'string' }
      ] },
      { tokens: [
        { text: '    except', type: 'keyword' },
        { text: ' (dns.resolver.NXDOMAIN, dns.resolver.NoAnswer):', type: 'plain' }
      ] },
      { tokens: [
        { text: '        results[', type: 'plain' },
        { text: '"error"', type: 'string' },
        { text: '] = ', type: 'operator' },
        { text: '"DNS Records Missing - Domain Spoofing Vulnerable"', type: 'string' }
      ] },
      { tokens: [
        { text: '    return', type: 'keyword' },
        { text: ' results', type: 'plain' }
      ] }
    ],
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
    tab: 'server_cluster.js',
    icon: '⚛️',
    language: 'JavaScript / Node.js 24',
    badge: 'MERN Clustered Architecture',
    command: 'npm run build && node server.js --cluster --db atlas-cloud',
    rawCode: `// Forever E-Commerce: High-Performance Clustered Node API
import cluster from 'node:cluster';
import os from 'node:os';
import express from 'express';
import mongoose from 'mongoose';

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(\`[Master \${process.pid}] Launching \${numCPUs} worker threads...\`);
  for (let i = 0; i < numCPUs; i++) cluster.fork();
  cluster.on('exit', (worker) => {
    console.warn(\`[Worker \${worker.process.pid}] died. Respawning worker...\`);
    cluster.fork();
  });
} else {
  const app = express();
  await mongoose.connect(process.env.MONGODB_URI, { maxPoolSize: 50 });
  
  app.get('/api/health', (req, res) => {
    res.json({ status: 'UP', worker: process.pid, db: mongoose.connection.readyState });
  });
  app.listen(3000, () => console.log(\`[Worker \${process.pid}] Listening on port 3000\`));
}`,
    codeLines: [
      { tokens: [{ text: '// Forever E-Commerce: High-Performance Clustered Node API', type: 'comment' }] },
      { tokens: [
        { text: 'import', type: 'keyword' },
        { text: ' cluster ', type: 'plain' },
        { text: 'from', type: 'keyword' },
        { text: " 'node:cluster'", type: 'string' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [
        { text: 'import', type: 'keyword' },
        { text: ' os ', type: 'plain' },
        { text: 'from', type: 'keyword' },
        { text: " 'node:os'", type: 'string' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [
        { text: 'import', type: 'keyword' },
        { text: ' express ', type: 'plain' },
        { text: 'from', type: 'keyword' },
        { text: " 'express'", type: 'string' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [
        { text: 'import', type: 'keyword' },
        { text: ' mongoose ', type: 'plain' },
        { text: 'from', type: 'keyword' },
        { text: " 'mongoose'", type: 'string' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [] },
      { tokens: [
        { text: 'const', type: 'keyword' },
        { text: ' numCPUs = os.cpus().length;', type: 'plain' }
      ] },
      { tokens: [] },
      { tokens: [
        { text: 'if', type: 'keyword' },
        { text: ' (cluster.isPrimary) {', type: 'plain' }
      ] },
      { tokens: [
        { text: '  console.log(', type: 'plain' },
        { text: '`[Master ${process.pid}] Launching ${numCPUs} worker threads...`', type: 'string' },
        { text: ');', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '  for', type: 'keyword' },
        { text: ' (', type: 'punctuation' },
        { text: 'let', type: 'keyword' },
        { text: ' i = ', type: 'plain' },
        { text: '0', type: 'number' },
        { text: '; i < numCPUs; i++) cluster.fork();', type: 'plain' }
      ] },
      { tokens: [
        { text: '  cluster.on(', type: 'plain' },
        { text: "'exit'", type: 'string' },
        { text: ', (worker) => {', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '    console.warn(', type: 'plain' },
        { text: '`[Worker ${worker.process.pid}] died. Respawning worker...`', type: 'string' },
        { text: ');', type: 'punctuation' }
      ] },
      { tokens: [{ text: '    cluster.fork();', type: 'plain' }] },
      { tokens: [{ text: '  });', type: 'punctuation' }] },
      { tokens: [
        { text: '} ', type: 'punctuation' },
        { text: 'else', type: 'keyword' },
        { text: ' {', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '  const', type: 'keyword' },
        { text: ' app = express();', type: 'plain' }
      ] },
      { tokens: [
        { text: '  await', type: 'keyword' },
        { text: ' mongoose.connect(process.env.MONGODB_URI, { maxPoolSize: ', type: 'plain' },
        { text: '50', type: 'number' },
        { text: ' });', type: 'punctuation' }
      ] },
      { tokens: [] },
      { tokens: [
        { text: '  app.get(', type: 'plain' },
        { text: "'/api/health'", type: 'string' },
        { text: ', (req, res) => {', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '    res.json({ status: ', type: 'plain' },
        { text: "'UP'", type: 'string' },
        { text: ', worker: process.pid, db: mongoose.connection.readyState });', type: 'plain' }
      ] },
      { tokens: [{ text: '  });', type: 'punctuation' }] },
      { tokens: [
        { text: '  app.listen(', type: 'plain' },
        { text: '3000', type: 'number' },
        { text: ', () => console.log(', type: 'plain' },
        { text: '`[Worker ${process.pid}] Listening on port 3000`', type: 'string' },
        { text: '));', type: 'punctuation' }
      ] },
      { tokens: [{ text: '}', type: 'punctuation' }] }
    ],
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
    tab: 'mesh_telemetry.ts',
    icon: '🛰️',
    language: 'TypeScript 5.4',
    badge: 'IoT Mesh & Failover Logic',
    command: 'rhcs-mesh --listen 8085 --protocol lora-satellite --failover-auto',
    rawCode: `// RHCS Mesh: Sub-GHz Telemetry & Air-Gapped Network Stream
interface TelemetryPacket {
  nodeId: string;
  rssi_dbm: number;
  battery_pct: number;
  threatLevel: 'P1' | 'P2' | 'P3' | 'NORMAL';
  timestamp: number;
}

export class MeshTelemetryEngine {
  private activeNodes: Map<string, TelemetryPacket> = new Map();

  public ingestTelemetry(packet: TelemetryPacket): void {
    if (packet.rssi_dbm < -90) {
      console.warn(\`[FAILOVER] Node \${packet.nodeId} signal weak: \${packet.rssi_dbm} dBm\`);
      this.routeViaAlternativeMesh(packet.nodeId);
    }
    this.activeNodes.set(packet.nodeId, packet);
  }

  private routeViaAlternativeMesh(failedNodeId: string): void {
    // Dynamic Dijkstra hop recalculation for emergency black-spot connectivity
    console.info(\`[REROUTE] Switched to redundant LoRa mesh channel: Node \${failedNodeId}\`);
  }
}`,
    codeLines: [
      { tokens: [{ text: '// RHCS Mesh: Sub-GHz Telemetry & Air-Gapped Network Stream', type: 'comment' }] },
      { tokens: [
        { text: 'interface', type: 'keyword' },
        { text: ' TelemetryPacket {', type: 'plain' }
      ] },
      { tokens: [
        { text: '  nodeId: ', type: 'plain' },
        { text: 'string', type: 'type' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '  rssi_dbm: ', type: 'plain' },
        { text: 'number', type: 'type' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '  battery_pct: ', type: 'plain' },
        { text: 'number', type: 'type' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '  threatLevel: ', type: 'plain' },
        { text: "'P1'", type: 'string' },
        { text: ' | ', type: 'operator' },
        { text: "'P2'", type: 'string' },
        { text: ' | ', type: 'operator' },
        { text: "'P3'", type: 'string' },
        { text: ' | ', type: 'operator' },
        { text: "'NORMAL'", type: 'string' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '  timestamp: ', type: 'plain' },
        { text: 'number', type: 'type' },
        { text: ';', type: 'punctuation' }
      ] },
      { tokens: [{ text: '}', type: 'punctuation' }] },
      { tokens: [] },
      { tokens: [
        { text: 'export', type: 'keyword' },
        { text: ' class ', type: 'keyword' },
        { text: 'MeshTelemetryEngine', type: 'type' },
        { text: ' {', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '  private', type: 'keyword' },
        { text: ' activeNodes: Map<', type: 'plain' },
        { text: 'string', type: 'type' },
        { text: ', TelemetryPacket> = ', type: 'plain' },
        { text: 'new', type: 'keyword' },
        { text: ' Map();', type: 'plain' }
      ] },
      { tokens: [] },
      { tokens: [
        { text: '  public', type: 'keyword' },
        { text: ' ingestTelemetry(packet: TelemetryPacket): ', type: 'plain' },
        { text: 'void', type: 'type' },
        { text: ' {', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '    if', type: 'keyword' },
        { text: ' (packet.rssi_dbm < ', type: 'plain' },
        { text: '-90', type: 'number' },
        { text: ') {', type: 'punctuation' }
      ] },
      { tokens: [
        { text: '      console.warn(', type: 'plain' },
        { text: '`[FAILOVER] Node ${packet.nodeId} signal weak: ${packet.rssi_dbm} dBm`', type: 'string' },
        { text: ');', type: 'punctuation' }
      ] },
      { tokens: [{ text: '      this.routeViaAlternativeMesh(packet.nodeId);', type: 'plain' }] },
      { tokens: [{ text: '    }', type: 'punctuation' }] },
      { tokens: [{ text: '    this.activeNodes.set(packet.nodeId, packet);', type: 'plain' }] },
      { tokens: [{ text: '  }', type: 'punctuation' }] },
      { tokens: [] },
      { tokens: [
        { text: '  private', type: 'keyword' },
        { text: ' routeViaAlternativeMesh(failedNodeId: ', type: 'plain' },
        { text: 'string', type: 'type' },
        { text: '): ', type: 'punctuation' },
        { text: 'void', type: 'type' },
        { text: ' {', type: 'punctuation' }
      ] },
      { tokens: [{ text: '    // Dynamic Dijkstra hop recalculation for emergency black-spot connectivity', type: 'comment' }] },
      { tokens: [
        { text: '    console.info(', type: 'plain' },
        { text: '`[REROUTE] Switched to redundant LoRa mesh channel: Node ${failedNodeId}`', type: 'string' },
        { text: ');', type: 'punctuation' }
      ] },
      { tokens: [{ text: '  }', type: 'punctuation' }] },
      { tokens: [{ text: '}', type: 'punctuation' }] }
    ],
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
  const [activeTab, setActiveTab] = useState(SNIPPETS[0]);
  const [viewMode, setViewMode] = useState('code'); // 'code' or 'terminal'
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (viewMode === 'terminal') {
      setDisplayedLines([]);
      setIsStreaming(true);
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
          setIsStreaming(false);
          clearInterval(interval);
        }
      }, 120);

      return () => clearInterval(interval);
    }
  }, [activeTab, viewMode]);

  const handleCopy = () => {
    const textToCopy = viewMode === 'code' ? activeTab.rawCode : activeTab.command;
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRunCode = () => {
    setViewMode('terminal');
  };

  return (
    <div className="terminal-dark-wrapper">
      <div className="terminal-double-border-outer">
        <div className="terminal-dark-window">
          {/* Header Bar */}
          <div className="terminal-header-bar">
            {/* macOS Window Traffic Dots */}
            <div className="terminal-window-dots">
              <span className="dot-traffic dot-red" title="Close Window"></span>
              <span className="dot-traffic dot-yellow" title="Minimize Window"></span>
              <span className="dot-traffic dot-green" title="Maximize Window"></span>
            </div>

            {/* Tab File Selector */}
            <div className="terminal-tab-list">
              {SNIPPETS.map((snippet) => (
                <button
                  key={snippet.id}
                  type="button"
                  className={`terminal-tab-btn ${activeTab && activeTab.id === snippet.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(snippet)}
                >
                  <span className="tab-icon">{snippet.icon}</span>
                  <span className="tab-filename">{snippet.tab}</span>
                  {activeTab && activeTab.id === snippet.id && (
                    <span className="tab-indicator-pill"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Actions Right */}
            <div className="terminal-actions-right">
              {/* Written Code vs Terminal Run Toggle */}
              <div className="terminal-mode-toggle">
                <button
                  type="button"
                  className={`toggle-btn ${viewMode === 'code' ? 'active' : ''}`}
                  onClick={() => setViewMode('code')}
                  title="View Authentic Source Code"
                >
                  📝 Written Code
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${viewMode === 'terminal' ? 'active' : ''}`}
                  onClick={() => setViewMode('terminal')}
                  title="Execute and View Terminal Shell Stream"
                >
                  ⚡ Shell Run
                </button>
              </div>

              {/* Run Button in Code View */}
              {viewMode === 'code' && (
                <button
                  type="button"
                  className="terminal-run-btn"
                  onClick={handleRunCode}
                  title="Run Script in Terminal"
                >
                  ▶ Run
                </button>
              )}

              {/* Working Copy Button */}
              <button
                type="button"
                className={`terminal-copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                title="Copy Content to Clipboard"
              >
                {copied ? '✓ Copied' : '📋 Copy'}
              </button>
            </div>
          </div>

          {/* Subheader Meta Bar */}
          <div className="terminal-meta-bar">
            <div className="meta-left">
              <span className="meta-lang-tag">{activeTab.language}</span>
              <span className="meta-badge-tag">{activeTab.badge}</span>
            </div>
            <div className="meta-right">
              <span className="meta-hint">
                {viewMode === 'code' ? 'Interactive Source Code Viewer (Syntax Highlighted)' : 'Live Interactive Shell Output Stream'}
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            {viewMode === 'code' ? (
              /* REAL WRITTEN CODE VIEW */
              <div className="terminal-code-view">
                <div className="code-line-container">
                  {activeTab.codeLines.map((lineObj, lineIndex) => (
                    <div key={lineIndex} className="code-line-row">
                      <span className="line-num-gutter">
                        {String(lineIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="line-code-tokens">
                        {lineObj.tokens.length === 0 ? (
                          <span className="token-empty">&nbsp;</span>
                        ) : (
                          lineObj.tokens.map((token, tIdx) => (
                            <span key={tIdx} className={`tok tok-${token.type}`}>
                              {token.text}
                            </span>
                          ))
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* REAL-TIME TERMINAL SHELL STREAM */
              <div className="terminal-shell-view">
                <div className="terminal-prompt-line">
                  <span className="prompt-user">riyansh@sentinel</span>
                  <span className="prompt-colon">:</span>
                  <span className="prompt-path">~/production-workspace</span>
                  <span className="prompt-dollar">$</span>
                  <span className="prompt-cmd">{activeTab.command}</span>
                  <span className="terminal-blinking-cursor"></span>
                </div>

                <div className="terminal-output-stream">
                  {displayedLines.filter(Boolean).map((line, idx) => (
                    <div
                      key={idx}
                      className="terminal-log-line"
                      style={{ color: line && line.color ? line.color : '#e2e8f0' }}
                    >
                      <span className="line-timestamp">[{String(idx + 1).padStart(2, '0')}]</span>
                      <span className="line-content">{line && line.text ? line.text : ''}</span>
                    </div>
                  ))}
                  {isStreaming && (
                    <div className="terminal-typing-indicator">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Terminal Status Bar Footer */}
          <div className="terminal-status-bar">
            <div className="status-left">
              <span className={`status-indicator ${viewMode === 'terminal' && isStreaming ? 'pulsing' : ''}`}></span>
              <span>
                {viewMode === 'code' ? 'SOURCE READY • LF • UTF-8' : 'SHELL ACTIVE • BASH 5.2'}
              </span>
            </div>
            <div className="status-center">
              <span>Branch: <strong>main</strong> [clean]</span>
            </div>
            <div className="status-right">
              <span>{activeTab.codeLines.length} Lines</span>
              <span>•</span>
              <span>Tab Size: 2</span>
              <span>•</span>
              <span>Spaces: 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalDark;
