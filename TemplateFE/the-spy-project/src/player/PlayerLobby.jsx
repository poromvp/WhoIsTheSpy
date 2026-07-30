export function PlayerLobby() {
    return (
        <>
            <div class="lobby-section">
                <div class="lobby-header">
                    <div class="lobby-title">Lobby Agents (12 / 16)</div>
                    <div class="alive-count">+ 10 ALIVE</div>
                </div>

                <div class="agents-grid">
                    <!-- Agent 1 (Active/You) -->
                    <div class="agent-card active">
                        <div class="avatar-wrap" style="background-color: var(--ava-yellow); color: #000;">
                            FO
                            <div class="floating-tag tag-green">Apple</div>
                            <div class="floating-tag tag-green-alt">Apple</div>
                        </div>
                        <div class="agent-name">Fox (You)</div>
                    </div>

                    <!-- Agent 2 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-orange); color: #000;">
                            SH
                            <div class="check-badge">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div class="floating-tag tag-green" style="top: -5px; right: 10px;">Apple</div>
                        </div>
                        <div class="agent-name">Shadow</div>
                    </div>

                    <!-- Agent 3 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: rgba(255,51,102,0.2); color: var(--ava-red);">
                            VI
                        </div>
                        <div class="agent-name" style="opacity: 0.5;">Viper</div>
                    </div>

                    <!-- Agent 4 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-cyan); color: #000;">
                            SP
                            <div class="floating-tag tag-red">Orange</div>
                            <div class="floating-tag tag-green-alt" style="bottom: 5px; right: -20px; left: auto;">Apple</div>
                        </div>
                        <div class="agent-name">Specter</div>
                    </div>

                    <!-- Agent 5 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-purple); color: #FFF;">
                            GH
                            <div class="check-badge">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                        </div>
                        <div class="agent-name">Ghost</div>
                    </div>

                    <!-- Agent 6 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-pink); color: #FFF;">
                            OR
                            <div class="floating-tag tag-green-alt" style="bottom: -5px; right: -15px; left: auto;">Apple</div>
                        </div>
                        <div class="agent-name">Oracle</div>
                    </div>

                    <!-- Agent 7 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: rgba(180,83,9,0.2); color: var(--ava-brown);">
                            BL
                            <div class="floating-tag tag-green-alt" style="bottom: -15px; right: -5px; left: auto;">Apple</div>
                        </div>
                        <div class="agent-name" style="opacity: 0.5;">Blade</div>
                    </div>

                    <!-- Agent 8 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-green); color: #FFF;">
                            CI
                            <div class="floating-tag tag-green-alt" style="bottom: -10px; right: -20px; left: auto;">Apple</div>
                        </div>
                        <div class="agent-name">Cipher</div>
                    </div>

                    <!-- Agent 9 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-lime); color: #000;">
                            RO
                            <div class="floating-tag tag-red" style="top: -10px; right: 0; left: auto;">Orange</div>
                        </div>
                        <div class="agent-name">Rogue</div>
                    </div>

                    <!-- Agent 10 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-indigo); color: #FFF;">
                            PH
                        </div>
                        <div class="agent-name">Phoenix</div>
                    </div>

                    <!-- Agent 11 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-yellow); color: #000;">
                            NO
                            <div class="check-badge">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                        </div>
                        <div class="agent-name">Nova</div>
                    </div>

                    <!-- Agent 12 -->
                    <div class="agent-card">
                        <div class="avatar-wrap" style="background-color: var(--ava-teal); color: #FFF;">
                            EC
                        </div>
                        <div class="agent-name">Echo</div>
                    </div>

                </div>
            </div>
        </>
    );
}