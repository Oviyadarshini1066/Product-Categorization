import React from 'react'
import links from '../links.json'

export default function QuickLinks() {
  return (
    <div className="card">
      <h3>Quick Access</h3>
      {Object.entries(links).map(([section, items]) => (
        <div key={section} style={{ marginBottom: 12 }}>
          <div className="muted" style={{ marginBottom: 6 }}>{section}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {items.map((l, i) => (
              <a key={i} className="badge" href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
