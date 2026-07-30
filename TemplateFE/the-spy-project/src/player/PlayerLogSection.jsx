export function PlayerLogSection() {
    return (
        <>
            <div class="log-section">
                <div class="log-header">
                    <div class="log-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ava-purple)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        MISSION BRIEFING LOG
                    </div>
                    <div class="log-badge">PAST ROUNDS</div>
                </div>

                <div class="log-entry">
                    <div class="entry-top">
                        <div class="entry-round">ROUND 1 (Completed)</div>
                        <div class="entry-status">SPY ELIMINATED</div>
                    </div>
                    <div class="entry-text">
                        Civilian Word: <span>Banana</span> // Spy Word: <span>Plantain</span><br/>
                            Agent Blade voted off as the Spy (Correct).
                    </div>
                </div>

                <div class="log-pending">
                    Round 2 results will update once voting terminates.
                </div>
            </div>
        </>
    );
}