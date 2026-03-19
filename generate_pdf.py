"""Generate PDF from the newsletter that preserves the dark theme exactly."""
import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1100, 'height': 800})
        
        await page.goto('http://localhost:8080/index.html', wait_until='networkidle')
        
        # Wait for charts to render
        await page.wait_for_timeout(3000)
        
        # Force all reveal elements to be visible (since we can't scroll in PDF)
        await page.evaluate('''() => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.add('visible');
            });
        }''')
        
        await page.wait_for_timeout(1000)
        
        # Add print-override CSS to keep dark theme in PDF
        await page.add_style_tag(content='''
            @media print {
                * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }
                body { background: #0a1628 !important; color: #e8ecf3 !important; }
                .hero { min-height: auto !important; padding: 60px 0 !important; background: linear-gradient(170deg,#060d18 0%,#0a1628 40%,#0f2847 100%) !important; }
                .section:nth-child(even) { background: linear-gradient(180deg,#060d18 0%,#0a1628 100%) !important; }
                .section:nth-child(odd) { background: linear-gradient(180deg,#0a1628 0%,#0f2847 100%) !important; }
                .glass, .event-hero, .event-card { background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.12) !important; color: #e8ecf3 !important; }
                .glass h3, .sec-head h2, .event-hero h3, .event-card h4 { color: #d4a843 !important; }
                .glass p, .glass li, .glass blockquote, table.nt tbody td, .ec-desc, .ec-team { color: #a0b0c8 !important; }
                table.nt thead th, table.admin thead th { background: #163d6e !important; color: #d4a843 !important; }
                .accent-block.green { background: linear-gradient(135deg,#0d3320,#1a5e36) !important; }
                .accent-block.orange { background: linear-gradient(135deg,#5c2600,#a34500) !important; }
                .accent-block.indigo { background: linear-gradient(135deg,#0d1b4a,#1b2d6b) !important; }
                .footer { background: linear-gradient(135deg,#060d18 0%,#0a1628 50%,#0f2847 100%) !important; }
                .quote-strip { background: linear-gradient(135deg,rgba(232,152,62,.08),rgba(22,61,110,.15)) !important; border: 1px solid rgba(232,152,62,.15) !important; }
                .quote-strip p { color: #d4a843 !important; }
                .stat { background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.12) !important; }
                .stat-n { color: #e8983e !important; }
                .rev-card { background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.12) !important; border-left: 4px solid #e8983e !important; }
                .tag { background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.12) !important; color: #a0b0c8 !important; }
                .chart-wrap { background: rgba(255,255,255,0.06) !important; border: 1px solid rgba(255,255,255,0.12) !important; }
                .hero h1 { background: none !important; -webkit-text-fill-color: #d4a843 !important; color: #d4a843 !important; }
                .badge.gold { background: rgba(212,168,67,.2) !important; color: #f0d78c !important; border: 1px solid rgba(212,168,67,.3) !important; }
                .badge.special { background: rgba(22,61,110,.3) !important; color: #5d9bcf !important; border: 1px solid rgba(22,61,110,.4) !important; }
                .badge.bronze { background: rgba(232,152,62,.15) !important; color: #e8983e !important; border: 1px solid rgba(232,152,62,.2) !important; }
                .msg-card { border-left: 4px solid #e8983e !important; }
                .footer h3 { color: #d4a843 !important; }
                .footer p { color: #a0b0c8 !important; }
                .fq { color: #d4a843 !important; }
                table.nt tbody td strong, table.admin tbody td strong, .rev-card h4 { color: #fff !important; }
                .side-nav { display: none !important; }
                .t-wrap { border: 1px solid rgba(255,255,255,0.12) !important; }
                table.nt tbody td { border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
                .msg-avatar { border: 3px solid #d4a843 !important; }
                .fac-item img { border: 3px solid #d4a843 !important; }
                .inst { color: #d4a843 !important; }
                .dept, .dept-pre { color: #e8983e !important; }
                .msg-name { color: #fff !important; }
                .msg-title, .inst-sub, .q-attr, .stat-l, .hero-meta span { color: #a0b0c8 !important; }
                .fn { color: #fff !important; }
                .fr { color: #a0b0c8 !important; }
                .event-card .ec-img { max-height: 220px !important; }
            }
        ''')
        
        # Generate PDF
        await page.pdf(
            path=r'c:\Users\Mukesh\Downloads\Newsletter 2026\IT_Connect_Newsletter.pdf',
            format='A4',
            print_background=True,
            margin={'top': '0', 'bottom': '0', 'left': '0', 'right': '0'}
        )
        
        await browser.close()
        print("PDF saved: IT_Connect_Newsletter.pdf")

asyncio.run(main())
