import './HomePage.css';
import {HomePageHeader} from "./HomePageHeader";
import {HomePageButton} from "./HomePageButton"
export function HomePage() {
    return (
        <>
            <title>Who is Spy? - Mobile UI</title>

            <div className="mobile-container">
                <HomePageHeader/>

                <main className="main-content">
                    <HomePageButton/>
                    

                    <div className="stats-card">
                        <div className="stats-icon-wrap">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="stats-info">
                            <div className="stats-title">14,520 agents online</div>
                            <div className="stats-subtitle">Active rooms: <span>2,892 live</span></div>
                        </div>
                        <div className="online-dot"></div>
                    </div>

                    <div className="section-header">
                        <h2>MISSION BRIEFING</h2>
                        <a href="#">View Rules</a>
                    </div>

                    <div className="rule-list">

                        <div className="rule-card">
                            <div className="rule-header">
                                <div className="rule-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--icon-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                                    </svg>
                                </div>
                                <div className="rule-number">01</div>
                            </div>
                            <h3>Get Your Word</h3>
                            <p>Everyone gets a secret word. The spy gets a slightly different one, but doesn't know it!</p>
                        </div>

                        <div className="rule-card">
                            <div className="rule-header">
                                <div className="rule-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--icon-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="rule-number">02</div>
                            </div>
                            <h3>Describe & Decrypt</h3>
                            <p>Give clues without giving your secret word away. Spot who sounds a bit off.</p>
                        </div>

                        <div className="rule-card">
                            <div className="rule-header">
                                <div className="rule-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--icon-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <div className="rule-number">03</div>
                            </div>
                            <h3>Vote the Spy</h3>
                            <p>Vote off the suspect. Civilians win if the Spy is caught; Spy wins by blending in.</p>
                        </div>

                    </div>

                </main>

                <footer className="footer">
                    <div className="footer-text">v1.4.2 // SECURITY PROTOCOL ACTIVE</div>
                    <div className="home-indicator"></div>
                </footer>

            </div>
        </>
    );
}