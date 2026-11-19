'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Camera, MapPin, Menu, Phone, Send, X } from 'lucide-react'
import { ProductCatalog } from '@/components/product-catalog'

const NERO_LOGO_DARK = '/general/nero-logo-dark.png'
const NERO_LOGO_LIGHT = '/general/nero-logo-light.png'
const NERO_OFFICE_IMAGE = '/general/nero-office.jpg'
const HERO_MAIN_IMAGE = '/general/hero-main.jpg'
const HERO_SOCKET_IMAGE = '/general/hero-socket.webp'
const HERO_CABLE_IMAGE = '/general/hero-cable.jpg'
const HERO_BREAKER_IMAGE = '/general/hero-breaker.webp'
const PARTNER_LOGOS_IMAGE = '/general/partner-logos.png'

export default function Page() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <main>
            <header className="site-header">
                <a href="#top" className="brand" aria-label="Nero Electrical home">
                    <Image src={NERO_LOGO_DARK} alt="Nero Electrical" width={140} height={42} priority unoptimized />
                </a>
                <button
                    className="menu-toggle"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
                <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Main navigation">
                    <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>Our approach</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    <a className="nav-cta" href="tel:0941475130" onClick={() => setMenuOpen(false)}>
                        Call Nero <Phone size={15} />
                    </a>
                </nav>
            </header>

            <section className="hero" id="top">
                <div className="hero-backdrop" aria-hidden="true">
                    <span className="hero-orbit hero-orbit-one" />
                    <span className="hero-orbit hero-orbit-two" />
                    <span className="hero-orbit hero-orbit-three" />
                    <span className="hero-current" />
                </div>
                <div className="hero-copy">
                    <p className="eyebrow">
                        POWERING EVERYDAY POSSIBILITIES <span className="eyebrow-index">NERO / 01-08</span>
                    </p>
                    <h1>Good power.<br /><span>No guesswork.</span></h1>
                    <p className="hero-description">The right component makes all the difference. Find dependable electrical essentials for every connection, circuit, and control.</p>
                    <div className="hero-actions">
                        <a className="button button--bright" href="#products">Explore the range <ArrowRight size={16} /></a>
                        <a className="text-link" href="#products">Browse product details <ArrowDownRight size={15} /></a>
                    </div>
                    <div className="hero-meta">
                        <span>DEPENDABLE BY DESIGN</span>
                        <span>BUILT FOR THE LONG RUN</span>
                    </div>
                </div>
                <div className="hero-visual" aria-label="A closer look at Nero Electrical essentials">
                    <div className="hero-art-backdrop" />
                    <div className="hero-product hero-product--main">
                        <Image src={HERO_MAIN_IMAGE} alt="Nero three-gang switch installed in a refined contemporary interior" fill priority unoptimized sizes="(max-width: 760px) 70vw, 34vw" />
                        <span>01 / LIGHT, THOUGHTFULLY</span>
                    </div>
                    <div className="hero-product hero-product--socket">
                        <Image src={HERO_SOCKET_IMAGE} alt="Nero multi-function socket installed on a light wall" fill unoptimized sizes="(max-width: 760px) 32vw, 16vw" />
                        <span>EVERYDAY CONNECTIONS</span>
                    </div>
                    <div className="hero-product hero-product--cable">
                        <Image src={HERO_CABLE_IMAGE} alt="Nero professional-grade LED strip reel" fill unoptimized sizes="(max-width: 760px) 32vw, 16vw" />
                        <span>BUILT TO LAST</span>
                    </div>
                    <div className="hero-product hero-product--breaker">
                        <Image src={HERO_BREAKER_IMAGE} alt="Nero electrical switch plate" fill unoptimized sizes="(max-width: 760px) 30vw, 15vw" />
                    </div>
                    <div className="hero-index">THE NERO EDIT / 01-04</div>
                    <div className="hero-stamp">GOOD<br />POWER<br /><span>→</span></div>
                    <div className="hero-art-caption">
                        <span className="live-dot" /> THE NERO STANDARD <i>POWER, PRECISELY.</i>
                    </div>
                </div>
            </section>

            <div className="ticker" aria-label="Company qualities">
                <div className="ticker-track">
                    GOOD POWER, NO GUESSWORK <span>✳</span> THE RIGHT CONNECTION <span>✳</span> BUILT FOR THE LONG RUN <span>✳</span> GOOD POWER, NO GUESSWORK <span>✳</span> THE RIGHT CONNECTION <span>✳</span> BUILT FOR THE LONG RUN <span>✳</span>
                </div>
            </div>

            <section className="partner-strip" aria-label="Trusted partners">
                <div className="partner-strip-copy">
                    <span className="eyebrow">TRUSTED PARTNERS</span>
                    <p>Working with brands that bring dependable light to every space.</p>
                </div>
                <div className="partner-marquee" aria-label="Grace Electric, Gojo Light Import, and We Care Light">
                    <div className="partner-marquee-track">
                        <Image className="partner-logos" src={PARTNER_LOGOS_IMAGE} alt="Grace Electric, Gojo Light Import, and We Care Light" width={920} height={120} unoptimized />
                        <Image className="partner-logos" src={PARTNER_LOGOS_IMAGE} alt="Grace Electric, Gojo Light Import, and We Care Light" width={920} height={120} unoptimized />
                    </div>
                </div>
            </section>

            <ProductCatalog />

            <section className="about-section" id="about">
                <div className="about-visual about-visual--office">
                    <Image src={NERO_OFFICE_IMAGE} alt="Contemporary office and meeting spaces representing Nero Electrical" fill sizes="(max-width: 760px) 100vw, 50vw" className="about-office-image" />
                    <div className="about-office-shade" />
                    <div className="about-office-note"><span className="live-dot" /> NERO ELECTRICAL / ADDIS ABABA</div>
                    <span className="about-caption">QUALITY / SAFETY / RELIABILITY</span>
                </div>
                <div className="about-copy">
                    <p className="eyebrow">THE NERO APPROACH <span className="eyebrow-index">01 / QUALITY FIRST</span></p>
                    <h2>Good work<br />starts with <em>good parts.</em></h2>
                    <p>Nero Electrical brings together dependable products for everyday installations, with quality, safety, and reliability at the center of the range.</p>
                    <div className="proof-points">
                        <div><strong>01</strong><span>QUALITY</span></div>
                        <div><strong>02</strong><span>SAFETY</span></div>
                        <div><strong>03</strong><span>RELIABILITY</span></div>
                    </div>
                    <a className="text-link text-link--light" href="#products">Explore the product range <ArrowRight size={15} /></a>
                </div>
            </section>

            <section className="contact-section contact-section--directory" id="contact" aria-labelledby="contact-title">
                <div className="contact-directory-intro">
                    <p className="eyebrow dark-eyebrow">FIND NERO ELECTRICAL <span className="eyebrow-index">ADDIS ABABA / ETHIOPIA</span></p>
                    <h2 id="contact-title">Visit, call,<br /><span>connect.</span></h2>
                    <p>Find Nero Electrical at Merkato, or reach the team through the contact details below.</p>
                </div>
                <div className="contact-directory-content">
                    <div className="contact-phone-list" aria-label="Phone numbers">
                        <a href="tel:0941475130"><Phone size={17} /><span>0941475130</span><ArrowUpRight size={15} /></a>
                        <a href="tel:0923049439"><Phone size={17} /><span>0923049439</span><ArrowUpRight size={15} /></a>
                        <a href="tel:0920060681"><Phone size={17} /><span>0920060681</span><ArrowUpRight size={15} /></a>
                    </div>
                    <div className="contact-address-grid">
                        <article className="contact-address-card">
                            <span className="contact-card-index">LOCATION 01</span>
                            <MapPin size={18} />
                            <h3>Dere tera Building</h3>
                            <p>Shop number B055<br />Merkato, Addis Ababa</p>
                            <a href="https://maps.app.goo.gl/AwK8FGgL1gedJdJy9" target="_blank" rel="noreferrer">Open map <ArrowUpRight size={14} /></a>
                        </article>
                        <article className="contact-address-card">
                            <span className="contact-card-index">LOCATION 02</span>
                            <MapPin size={18} />
                            <h3>Sosaa building</h3>
                            <p>Shop number SFF B183<br />Merkato, Addis Ababa</p>
                            <a href="https://maps.app.goo.gl/gLcMJqFyUW5fanYx6" target="_blank" rel="noreferrer">Open map <ArrowUpRight size={14} /></a>
                        </article>
                    </div>
                    <div className="contact-social-links">
                        <a href="https://instagram.com/nero_electrical?utm_source=qr" target="_blank" rel="noreferrer"><Camera size={17} /> Instagram <ArrowUpRight size={14} /></a>
                        <a href="https://t.me/NEROELECTRICPLC" target="_blank" rel="noreferrer"><Send size={17} /> Telegram <span>@NEROELECTRICPLC</span><ArrowUpRight size={14} /></a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-main">
                    <div className="footer-brand-col">
                        <a href="#top" className="footer-logo" aria-label="Nero Electrical home">
                            <Image src={NERO_LOGO_LIGHT} alt="Nero Electrical logo" width={140} height={42} unoptimized />
                        </a>
                        <p>Good power. No guesswork.<br />Quality. Safety. Reliability.</p>
                        <div className="social-links">
                            <a href="https://instagram.com/nero_electrical?utm_source=qr" aria-label="Instagram" target="_blank" rel="noreferrer"><Camera size={17} /></a>
                            <a href="https://t.me/NEROELECTRICPLC" aria-label="Telegram" target="_blank" rel="noreferrer"><Send size={16} /></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <p className="footer-label">EXPLORE</p>
                        <a href="#products">Product range</a>
                        <a href="#about">Our approach</a>
                        <a href="#contact">Contact details</a>
                    </div>
                    <div className="footer-column">
                        <p className="footer-label">CALL NERO</p>
                        <a href="tel:0941475130">0941475130</a>
                        <a href="tel:0923049439">0923049439</a>
                        <a href="tel:0920060681">0920060681</a>
                        <a href="https://t.me/NEROELECTRICPLC" target="_blank" rel="noreferrer">Telegram / @NEROELECTRICPLC</a>
                    </div>
                    <div className="footer-column footer-locations">
                        <p className="footer-label">VISIT US</p>
                        <span><strong>Dere tera Building</strong><br />Shop number B055</span>
                        <span><strong>Sosaa building</strong><br />Shop number SFF B183</span>
                        <a href="https://instagram.com/nero_electrical?utm_source=qr" target="_blank" rel="noreferrer">Instagram / @nero_electrical</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>©2026 Nero Electrical by Drongo Technology. All Rights Reserved.</span>
                    <span>GOOD POWER. NO GUESSWORK.</span>
                    <a href="#top">BACK TO TOP ↑</a>
                </div>
            </footer>
        </main>
    )
}
