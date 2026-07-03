import React from 'react';

export interface VoicePlayerProps {
  /** Seed string that determines the waveform shape (use the record id/text). */
  seed?: string;
  /** Clip length in seconds. */
  duration?: number;
  /** STT transcript shown under the player. */
  transcript?: string;
  accent?: string;
  onToggle?: (playing: boolean) => void;
  style?: React.CSSProperties;
}

/**
 * Voice-memo player — waveform, play/pause, time, optional STT transcript.
 * @startingPoint section="Dash" subtitle="Voice memo player with waveform" viewport="700x140"
 */
export function VoicePlayer(props: VoicePlayerProps): JSX.Element;
