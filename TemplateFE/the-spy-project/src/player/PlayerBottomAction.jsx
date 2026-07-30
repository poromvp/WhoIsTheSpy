export function PlayerBottomAction() {
    return (
        <>
            <div class="bottom-bar">
                <button class="btn-eye">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
                <button class="btn-vote">
                    VOTE SUSPECTED SPY
                </button>
            </div>
        </>
    );
}