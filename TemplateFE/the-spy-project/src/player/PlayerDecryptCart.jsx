export function PlayerDecryptCard() {
    return (
        <>
            <div class="decrypt-card">
                <div class="decrypt-header">
                    <div class="decrypt-title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        DECRYPT TRANSMISSION
                    </div>
                    <div class="peek-badge">PEEK ACTIVE</div>
                </div>

                <div class="decrypt-label">YOUR SECRET WORD IS:</div>

                <div class="secret-box">
                    <div class="secret-word">APPLE</div>
                    <div class="role-badge">CIVILIAN</div>
                </div>

                <div class="decrypt-hint">Release button to obfuscate secret word immediately.</div>
            </div>
        </>
    );
}