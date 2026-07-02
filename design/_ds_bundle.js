/* @ds-bundle: {"format":3,"namespace":"DashDesignSystem_ae03e4","components":[{"name":"ActivityChart","sourcePath":"components/dash/ActivityChart.jsx"},{"name":"DOMAINS","sourcePath":"components/dash/DomainCard.jsx"},{"name":"DomainCard","sourcePath":"components/dash/DomainCard.jsx"},{"name":"EvidenceItem","sourcePath":"components/dash/EvidenceItem.jsx"},{"name":"AXES","sourcePath":"components/dash/FlourishBalance.jsx"},{"name":"FlourishBalance","sourcePath":"components/dash/FlourishBalance.jsx"},{"name":"GroveMeter","sourcePath":"components/dash/GroveMeter.jsx"},{"name":"InterpretationCard","sourcePath":"components/dash/InterpretationCard.jsx"},{"name":"RecordReview","sourcePath":"components/dash/RecordReview.jsx"},{"name":"RingGauge","sourcePath":"components/dash/RingGauge.jsx"},{"name":"SeedBadge","sourcePath":"components/dash/SeedBadge.jsx"},{"name":"WeekStrip","sourcePath":"components/dash/WeekStrip.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"SectionTabs","sourcePath":"components/navigation/SectionTabs.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/dash/ActivityChart.jsx":"7e5ffcc0c5a3","components/dash/DomainCard.jsx":"b6e71660c9cc","components/dash/EvidenceItem.jsx":"38eff281f2d1","components/dash/FlourishBalance.jsx":"0a7aa0abaae4","components/dash/GroveMeter.jsx":"f100b6983c87","components/dash/InterpretationCard.jsx":"702e99ce9e20","components/dash/RecordReview.jsx":"88cd28a1f6a9","components/dash/RingGauge.jsx":"4670c8982c82","components/dash/SeedBadge.jsx":"aa98f6332c73","components/dash/WeekStrip.jsx":"6d2f7490a97a","components/display/Avatar.jsx":"d7f8977af63f","components/display/Badge.jsx":"41ed3dd154df","components/display/Card.jsx":"18a8c40742d6","components/display/Divider.jsx":"d13cd9bc87d6","components/display/ProgressBar.jsx":"a281c230d76f","components/display/Stat.jsx":"0cad9a6392e5","components/display/Tag.jsx":"c17ded2d0a9b","components/feedback/Dialog.jsx":"e612b6101c06","components/feedback/EmptyState.jsx":"37f6325c5582","components/feedback/Toast.jsx":"369bece11324","components/forms/Button.jsx":"57fa6192eb6e","components/forms/Checkbox.jsx":"df6197943362","components/forms/IconButton.jsx":"326428626475","components/forms/Input.jsx":"271bdfbafca3","components/forms/SegmentedControl.jsx":"1b0655b35fca","components/forms/Switch.jsx":"88c19a527c4d","components/forms/Textarea.jsx":"1a67c4e200e4","components/navigation/AppHeader.jsx":"9cf8b984aab1","components/navigation/SectionTabs.jsx":"278f6eadca33","components/navigation/TabBar.jsx":"818c37b32a62","ui_kits/app/DashboardScreen.jsx":"732c02675a32","ui_kits/app/EvidenceScreen.jsx":"7f2b37659c9a","ui_kits/app/GroveScreen.jsx":"8a023e36c082","ui_kits/app/ProfileScreen.jsx":"0bb7877ffd78","ui_kits/app/ReportScreen.jsx":"0c55afbd3f47","ui_kits/app/TodayScreen.jsx":"fa4eb56a46b3","ui_kits/app/data.jsx":"2d4de3937573","ui_kits/deck/deck-stage.js":"0cc26af2402a","ui_kits/landing/Landing.jsx":"aa69abf502e2","ui_kits/onboarding/Onboarding.jsx":"75940c0fc162"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DashDesignSystem_ae03e4 = window.DashDesignSystem_ae03e4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/dash/DomainCard.jsx
try { (() => {
/** Canonical Dash life domains: color + bilingual label. */
const DOMAINS = {
  body: {
    en: 'Body',
    ko: '몸',
    color: 'var(--domain-body)',
    soft: 'var(--domain-body-soft)'
  },
  space: {
    en: 'Space',
    ko: '공간',
    color: 'var(--domain-space)',
    soft: 'var(--domain-space-soft)'
  },
  relation: {
    en: 'Relation',
    ko: '관계',
    color: 'var(--domain-relation)',
    soft: 'var(--domain-relation-soft)'
  },
  work: {
    en: 'Work & Learning',
    ko: '일과 학습',
    color: 'var(--domain-work)',
    soft: 'var(--domain-work-soft)'
  },
  hobby: {
    en: 'Hobby & Creation',
    ko: '취미와 창작',
    color: 'var(--domain-hobby)',
    soft: 'var(--domain-hobby-soft)'
  },
  mind: {
    en: 'Mind',
    ko: '마음',
    color: 'var(--domain-mind)',
    soft: 'var(--domain-mind-soft)'
  },
  admin: {
    en: 'Life Admin',
    ko: '생활 행정',
    color: 'var(--domain-admin)',
    soft: 'var(--domain-admin-soft)'
  },
  impact: {
    en: 'Impact',
    ko: '임팩트',
    color: 'var(--domain-impact)',
    soft: 'var(--domain-impact-soft)'
  }
};
const STATUS = {
  stable: {
    label: '안정적',
    tone: 'var(--positive-600)'
  },
  growing: {
    label: '성장 중',
    tone: 'var(--positive-500)'
  },
  active: {
    label: '활성',
    tone: 'var(--positive-600)'
  },
  holding: {
    label: '유지 중',
    tone: 'var(--calm-600)'
  },
  recover: {
    label: '회복 필요',
    tone: 'var(--attention-600)'
  },
  overload: {
    label: '과부하 주의',
    tone: 'var(--caution-600)'
  },
  tidy: {
    label: '정리됨',
    tone: 'var(--calm-600)'
  }
};

/**
 * Life-domain card for the Life Dashboard. Color-coded by domain,
 * with a calm status word and optional activity meter / note.
 */
function DomainCard({
  domain = 'body',
  status = 'holding',
  note = null,
  count = null,
  icon = null,
  compact = false,
  onClick,
  style = {}
}) {
  const d = DOMAINS[domain] || DOMAINS.body;
  const st = STATUS[status] || STATUS.holding;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: compact ? 6 : 10,
      padding: compact ? 14 : 16,
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      boxShadow: hover && onClick ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover && onClick ? 'translateY(-1px)' : 'none',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: d.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-sm)',
      background: d.soft,
      color: d.color,
      flexShrink: 0
    }
  }, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: d.color
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, d.en), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      color: 'var(--text-faint)'
    }
  }, d.ko)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      fontFeatureSettings: "'tnum' 1"
    }
  }, count)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: st.tone
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      color: st.tone
    }
  }, st.label)), note && !compact && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, note));
}
Object.assign(__ds_scope, { DOMAINS, DomainCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/DomainCard.jsx", error: String((e && e.message) || e) }); }

// components/dash/FlourishBalance.jsx
try { (() => {
/** The three axes of happiness (Seligman, adapted). */
const AXES = {
  growth: {
    ko: '성장',
    en: 'Growth',
    color: 'var(--pine-500)',
    soft: 'var(--pine-100)'
  },
  enjoyment: {
    ko: '즐거움',
    en: 'Enjoyment',
    color: 'var(--ochre-500)',
    soft: 'var(--ochre-100)'
  },
  meaning: {
    ko: '의미',
    en: 'Meaning',
    color: 'var(--domain-mind)',
    soft: 'var(--domain-mind-soft)'
  }
};
const ORDER = ['growth', 'enjoyment', 'meaning'];

/**
 * Flourish Balance — the mix of Growth / Enjoyment / Meaning ("행복의 세 축")
 * across a period. A calm proportional bar + three labeled legends.
 * Shows balance, never a score to maximize.
 */
function FlourishBalance({
  values = {},
  showLegend = true,
  barHeight = 14,
  style = {}
}) {
  const nums = ORDER.map(k => Math.max(0, values[k] || 0));
  const total = nums.reduce((a, b) => a + b, 0) || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      height: barHeight,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)'
    }
  }, ORDER.map((k, i) => {
    const pct = nums[i] / total * 100;
    if (pct === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        width: `${pct}%`,
        height: '100%',
        background: AXES[k].color,
        transition: 'width var(--dur-slow) var(--ease-out)'
      }
    });
  })), showLegend && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8
    }
  }, ORDER.map((k, i) => {
    const pct = Math.round(nums[i] / total * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: AXES[k].color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-strong)'
      }
    }, AXES[k].ko)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-body-lg)',
        fontWeight: 'var(--weight-medium)',
        color: AXES[k].color,
        fontFeatureSettings: "'tnum' 1",
        letterSpacing: '-0.01em'
      }
    }, pct, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-faint)'
      }
    }, "%")));
  })));
}
Object.assign(__ds_scope, { AXES, FlourishBalance });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/FlourishBalance.jsx", error: String((e && e.message) || e) }); }

// components/dash/ActivityChart.jsx
try { (() => {
/**
 * Horizontal activity chart across life domains. Each row is a labeled,
 * color-coded bar (0..max) — the at-a-glance shape of a week's operation.
 */
function ActivityChart({
  items = [],
  max = 5,
  showValue = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      ...style
    }
  }, items.map(it => {
    const info = __ds_scope.DOMAINS[it.domain] || {};
    const color = it.color || info.color || 'var(--brand)';
    const pct = Math.max(0, Math.min(100, it.value / max * 100));
    const label = it.label || info.en || it.domain;
    return /*#__PURE__*/React.createElement("div", {
      key: it.domain || label,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 74,
        flexShrink: 0,
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text-body)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 9,
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-pill)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: '100%',
        background: color,
        borderRadius: 'var(--radius-pill)',
        transition: 'width var(--dur-slow) var(--ease-out)'
      }
    })), showValue && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        flexShrink: 0,
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-muted)',
        fontFeatureSettings: "'tnum' 1"
      }
    }, it.value));
  }));
}
Object.assign(__ds_scope, { ActivityChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/ActivityChart.jsx", error: String((e && e.message) || e) }); }

// components/dash/EvidenceItem.jsx
try { (() => {
/**
 * A row in the Evidence Log: date, the user's evidence, Dash's domain read,
 * and the Impact Seed it earned. The core "오늘의 증거" artifact.
 */
function EvidenceItem({
  date,
  evidence,
  interpretation = null,
  domainColor = 'var(--domain-space)',
  domainLabel = null,
  seed = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 4px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0,
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: domainColor,
      boxShadow: `0 0 0 4px color-mix(in oklch, ${domainColor} 16%, transparent)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: 'var(--line)',
      marginTop: 6,
      minHeight: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-faint)'
    }
  }, date), seed != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      color: 'var(--ochre-600)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, "Seed ", seed)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-snug)'
    }
  }, evidence), interpretation && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 5
    }
  }, domainLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      color: domainColor
    }
  }, domainLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, interpretation))));
}
Object.assign(__ds_scope, { EvidenceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/EvidenceItem.jsx", error: String((e && e.message) || e) }); }

// components/dash/GroveMeter.jsx
try { (() => {
const Tree = ({
  grown,
  size = 26
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  style: {
    transition: 'opacity var(--dur-base)'
  }
}, /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "14",
  width: "2",
  height: "6",
  rx: "1",
  fill: grown ? 'var(--pine-700)' : 'var(--ink-200)'
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 3C8.5 5 6.5 8 6.5 11C6.5 14 9 16 12 16C15 16 17.5 14 17.5 11C17.5 8 15.5 5 12 3Z",
  fill: grown ? 'var(--pine-500)' : 'var(--paper-200)'
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6.5C10 8 9 9.6 9 11.4",
  stroke: grown ? 'var(--pine-200)' : 'transparent',
  strokeWidth: "1",
  strokeLinecap: "round"
}));

/**
 * Dash Grove visualization. A small grove of trees fills as Seeds accrue
 * toward the next planting batch. Calm, never competitive.
 */
function GroveMeter({
  grown = 0,
  total = 8,
  seedCount = null,
  pct = null,
  caption = null,
  style = {}
}) {
  const trees = Array.from({
    length: total
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      alignItems: 'flex-end'
    }
  }, trees.map((_, i) => /*#__PURE__*/React.createElement(Tree, {
    key: i,
    grown: i < grown
  }))), pct != null && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 8,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.min(100, pct)}%`,
      height: '100%',
      background: 'var(--pine-500)',
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), (seedCount != null || caption) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10
    }
  }, caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)'
    }
  }, caption), seedCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ochre-600)',
      fontWeight: 'var(--weight-semibold)',
      whiteSpace: 'nowrap'
    }
  }, seedCount, " Seed")));
}
Object.assign(__ds_scope, { GroveMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/GroveMeter.jsx", error: String((e && e.message) || e) }); }

// components/dash/InterpretationCard.jsx
try { (() => {
/**
 * The Dash "voice" — an AI interpretation of the day in a calm, generous sans.
 * The signature moment of the product: translates actions into operating meaning.
 */
function InterpretationCard({
  eyebrow = '오늘의 해석',
  children,
  seed = null,
  axes = null,
  tone = 'tint',
  style = {}
}) {
  const tones = {
    tint: {
      bg: 'var(--brand-tint)',
      border: '1px solid var(--pine-100)',
      fg: 'var(--pine-900)',
      eye: 'var(--pine-600)'
    },
    paper: {
      bg: 'var(--surface)',
      border: '1px solid var(--line)',
      fg: 'var(--text-strong)',
      eye: 'var(--text-muted)'
    },
    inverse: {
      bg: 'var(--surface-inverse)',
      border: '1px solid var(--pine-800)',
      fg: '#EFF5F0',
      eye: 'var(--pine-300)'
    }
  };
  const t = tones[tone] || tones.tint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 20,
      background: t.bg,
      border: t.border,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: t.eye,
      marginBottom: 10
    }
  }, eyebrow), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 'var(--leading-relaxed)',
      letterSpacing: 'var(--tracking-snug)',
      color: t.fg,
      margin: 0
    }
  }, children), axes && axes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      marginTop: 14
    }
  }, axes.map(k => {
    const a = __ds_scope.AXES[k];
    if (!a) return null;
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 24,
        padding: '0 10px',
        borderRadius: 'var(--radius-pill)',
        background: tone === 'inverse' ? 'rgba(255,255,255,0.08)' : a.soft,
        border: `1px solid ${tone === 'inverse' ? 'transparent' : 'color-mix(in oklch, ' + a.color + ' 30%, transparent)'}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: a.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        color: tone === 'inverse' ? '#EFF5F0' : a.color
      }
    }, a.ko));
  })), seed != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 14V7",
    stroke: "var(--ochre-600)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7.5C8 5.6 6.4 4 4.4 4H3v.9C3 6.7 4.6 8 6.5 8H8z",
    fill: "var(--ochre-600)",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7C8 5 9.6 3.4 11.6 3.4H13v.9C13 6.1 11.4 7.5 9.5 7.5H8z",
    fill: "var(--ochre-600)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: t.tone === 'inverse' ? 'var(--ochre-300)' : 'var(--ochre-700)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "\uC774 \uAE30\uB85D\uC740 Dash Grove\uC5D0 Impact Seed ", seed, "\uAC1C\uB85C \uBC18\uC601\uB418\uC5C8\uC5B4\uC694")));
}
Object.assign(__ds_scope, { InterpretationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/InterpretationCard.jsx", error: String((e && e.message) || e) }); }

// components/dash/RecordReview.jsx
try { (() => {
const ALL_DOMAINS = ['body', 'space', 'relation', 'work', 'hobby', 'mind', 'admin', 'impact'];
const ALL_AXES = ['growth', 'enjoyment', 'meaning'];

/**
 * RecordReview — after a record, Dash shows how it understood it, editable.
 * Primary domain (one), secondary domains (0–2), three axes (0–2), confirm.
 * Embodiment of the classification spec. Tone hands authority to the user.
 */
function RecordReview({
  raw,
  primary,
  secondary = [],
  axes = [],
  interpretation = null,
  confidence = 0.9,
  onConfirm,
  onChange,
  style = {}
}) {
  const [prim, setPrim] = React.useState(primary);
  const [sec, setSec] = React.useState(secondary);
  const [ax, setAx] = React.useState(axes);
  const [editing, setEditing] = React.useState(false);
  const lowConf = confidence < 0.55;
  const emit = (p, s, a) => onChange && onChange({
    primary: p,
    secondary: s,
    axes: a
  });
  const pickPrimary = d => {
    let s = sec.filter(x => x !== d);
    setPrim(d);
    setSec(s);
    emit(d, s, ax);
  };
  const toggleSecondary = d => {
    if (d === prim) return;
    let s = sec.includes(d) ? sec.filter(x => x !== d) : sec.length < 2 ? [...sec, d] : sec;
    setSec(s);
    emit(prim, s, ax);
  };
  const toggleAxis = k => {
    let a = ax.includes(k) ? ax.filter(x => x !== k) : ax.length < 2 ? [...ax, k] : ax;
    setAx(a);
    emit(prim, sec, a);
  };
  const P = __ds_scope.DOMAINS[prim] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 12px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, lowConf ? '이 기록, 어떤 영역에 가까운가요?' : '이렇게 이해했어요'), raw && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      lineHeight: 1.45
    }
  }, raw)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 30,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      background: P.soft,
      border: `1px solid color-mix(in oklch, ${P.color} 32%, transparent)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: P.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      color: P.color
    }
  }, P.en), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.1em',
      color: P.color,
      opacity: 0.7,
      textTransform: 'uppercase'
    }
  }, "\uC8FC")), sec.map(d => {
    const S = __ds_scope.DOMAINS[d];
    return /*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 30,
        padding: '0 11px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-sunken)',
        border: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: S.color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: 'var(--text-muted)'
      }
    }, S.en));
  }), ax.map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: '0 11px',
      borderRadius: 'var(--radius-pill)',
      background: __ds_scope.AXES[k].soft,
      border: `1px solid color-mix(in oklch, ${__ds_scope.AXES[k].color} 28%, transparent)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: __ds_scope.AXES[k].color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 'var(--weight-medium)',
      color: __ds_scope.AXES[k].color
    }
  }, __ds_scope.AXES[k].ko))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setEditing(v => !v),
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      color: 'var(--brand)',
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3
    }
  }, editing ? '완료' : '수정')), editing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      marginBottom: 7
    }
  }, "\uC8FC \uC601\uC5ED (\uD0ED\uD558\uC5EC \uC120\uD0DD)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, ALL_DOMAINS.map(d => {
    const on = d === prim;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      type: "button",
      onClick: () => pickPrimary(d),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 28,
        padding: '0 10px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        background: on ? __ds_scope.DOMAINS[d].color : 'var(--surface)',
        border: `1px solid ${on ? 'transparent' : 'var(--line-strong)'}`
      }
    }, !on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: __ds_scope.DOMAINS[d].color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 'var(--weight-medium)',
        color: on ? '#fff' : 'var(--text-body)'
      }
    }, __ds_scope.DOMAINS[d].en));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      marginBottom: 7
    }
  }, "\uBD80 \uC601\uC5ED \xB7 \uCD5C\uB300 2\uAC1C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, ALL_DOMAINS.filter(d => d !== prim).map(d => {
    const on = sec.includes(d);
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      type: "button",
      onClick: () => toggleSecondary(d),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 28,
        padding: '0 10px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        background: on ? __ds_scope.DOMAINS[d].soft : 'var(--surface)',
        border: `1px solid ${on ? 'color-mix(in oklch, ' + __ds_scope.DOMAINS[d].color + ' 30%, transparent)' : 'var(--line)'}`,
        opacity: !on && sec.length >= 2 ? 0.4 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: __ds_scope.DOMAINS[d].color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: on ? __ds_scope.DOMAINS[d].color : 'var(--text-muted)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)'
      }
    }, __ds_scope.DOMAINS[d].en));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)',
      marginBottom: 7
    }
  }, "\uD589\uBCF5\uC758 \uC138 \uCD95 \xB7 \uCD5C\uB300 2\uAC1C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ALL_AXES.map(k => {
    const on = ax.includes(k);
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      onClick: () => toggleAxis(k),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 28,
        padding: '0 12px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        background: on ? __ds_scope.AXES[k].color : 'var(--surface)',
        border: `1px solid ${on ? 'transparent' : 'var(--line-strong)'}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 'var(--weight-medium)',
        color: on ? '#fff' : 'var(--text-body)'
      }
    }, __ds_scope.AXES[k].ko));
  })))), !editing && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onConfirm && onConfirm({
      primary: prim,
      secondary: sec,
      axes: ax
    }),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      height: 44,
      width: '100%',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 'var(--weight-semibold)'
    }
  }, lowConf ? '이대로 저장' : '맞아요')));
}
Object.assign(__ds_scope, { RecordReview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/RecordReview.jsx", error: String((e && e.message) || e) }); }

// components/dash/RingGauge.jsx
try { (() => {
/**
 * Circular progress gauge (SVG). Calm single-arc meter for a headline ratio
 * like the weekly "operating balance" score. No ticks, no needle.
 */
function RingGauge({
  value = 0,
  max = 100,
  size = 132,
  thickness = 12,
  color = 'var(--brand)',
  track = 'var(--surface-sunken)',
  centerValue = null,
  centerUnit = null,
  centerColor = 'var(--text-strong)',
  label = null,
  style = {}
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * pct;
  const center = size / 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${c - dash}`,
    style: {
      transition: 'stroke-dasharray var(--dur-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1
    }
  }, centerValue != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontFeatureSettings: "'tnum' 1",
      fontSize: size * 0.26,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '-0.02em',
      color: centerColor,
      lineHeight: 1
    }
  }, centerValue), centerUnit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size * 0.11,
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, centerUnit)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: size * 0.082,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label))));
}
Object.assign(__ds_scope, { RingGauge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/RingGauge.jsx", error: String((e && e.message) || e) }); }

// components/dash/SeedBadge.jsx
try { (() => {
const SproutGlyph = ({
  size = 14,
  color = 'currentColor'
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 14V7",
  stroke: color,
  strokeWidth: "1.5",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7.5C8 5.6 6.4 4 4.4 4H3v.9C3 6.7 4.6 8 6.5 8H8z",
  fill: color,
  opacity: "0.55"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 7C8 5 9.6 3.4 11.6 3.4H13v.9C13 6.1 11.4 7.5 9.5 7.5H8z",
  fill: color
}));

/**
 * Impact Seed counter. The core gamification token of Dash Grove.
 * Never framed as currency.
 */
function SeedBadge({
  count,
  label = null,
  size = 'md',
  variant = 'soft',
  style = {}
}) {
  const sm = size === 'sm';
  const variants = {
    soft: {
      bg: 'var(--ochre-100)',
      fg: 'var(--ochre-700)',
      glyph: 'var(--ochre-600)'
    },
    solid: {
      bg: 'var(--ochre-500)',
      fg: '#fff',
      glyph: '#fff'
    },
    outline: {
      bg: 'var(--surface)',
      fg: 'var(--ochre-700)',
      glyph: 'var(--ochre-600)'
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 5 : 7,
      height: sm ? 24 : 30,
      padding: sm ? '0 9px' : '0 12px',
      background: v.bg,
      color: v.fg,
      borderRadius: 'var(--radius-pill)',
      border: variant === 'outline' ? '1px solid var(--ochre-200)' : '1px solid transparent',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: sm ? 'var(--text-xs)' : 'var(--text-sm)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement(SproutGlyph, {
    size: sm ? 13 : 15,
    color: v.glyph
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontFeatureSettings: "'tnum' 1",
      letterSpacing: '-0.01em'
    }
  }, count), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-medium)',
      opacity: 0.9
    }
  }, label));
}
Object.assign(__ds_scope, { SeedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/SeedBadge.jsx", error: String((e && e.message) || e) }); }

// components/dash/WeekStrip.jsx
try { (() => {
/**
 * Seven-day activity strip. Each day is a column whose fill height / opacity
 * reflects that day's recorded activity level (0..max). Calm, no axis chrome.
 */
function WeekStrip({
  days = [],
  max = 4,
  color = 'var(--brand)',
  height = 56,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'flex-end',
      ...style
    }
  }, days.map((d, i) => {
    const lvl = Math.max(0, Math.min(max, d.level || 0));
    const ratio = max ? lvl / max : 0;
    const barH = Math.max(6, ratio * height);
    const empty = lvl === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height,
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: barH,
        borderRadius: 'var(--radius-xs)',
        background: empty ? 'var(--surface-sunken)' : color,
        opacity: empty ? 1 : 0.35 + ratio * 0.65,
        border: d.today ? '1.5px solid var(--ochre-500)' : 'none',
        transition: 'height var(--dur-slow) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: d.today ? 'var(--ochre-600)' : 'var(--text-faint)',
        fontWeight: d.today ? 'var(--weight-semibold)' : 'var(--weight-regular)'
      }
    }, d.label));
  }));
}
Object.assign(__ds_scope, { WeekStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dash/WeekStrip.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56
};
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2);
  return parts[0][0] + parts[parts.length - 1][0];
}

/**
 * User avatar. Image, or initials on a calm pine tint.
 */
function Avatar({
  name = '',
  src = null,
  size = 'md',
  style = {}
}) {
  const dim = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--pine-100)',
      color: 'var(--pine-700)',
      border: '1px solid var(--pine-200)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: dim * 0.38,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-body)',
    bd: 'var(--line)'
  },
  pine: {
    bg: 'var(--pine-100)',
    fg: 'var(--pine-800)',
    bd: 'var(--pine-200)'
  },
  ochre: {
    bg: 'var(--ochre-100)',
    fg: 'var(--ochre-700)',
    bd: 'var(--ochre-200)'
  },
  positive: {
    bg: 'var(--positive-100)',
    fg: 'var(--positive-600)',
    bd: 'var(--pine-200)'
  },
  attention: {
    bg: 'var(--attention-100)',
    fg: 'var(--attention-600)',
    bd: 'var(--ochre-200)'
  },
  caution: {
    bg: 'var(--caution-100)',
    fg: 'var(--caution-600)',
    bd: '#E4C3B8'
  },
  calm: {
    bg: 'var(--calm-100)',
    fg: 'var(--calm-600)',
    bd: '#C4D5D8'
  },
  solid: {
    bg: 'var(--brand)',
    fg: 'var(--text-on-brand)',
    bd: 'transparent'
  }
};

/**
 * Small status label. With optional leading dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  size = 'md',
  style = {}
}) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: sm ? 20 : 24,
      padding: sm ? '0 8px' : '0 10px',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: sm ? 'var(--text-2xs)' : 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-snug)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: 0.85
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADS = {
  none: 0,
  sm: 14,
  md: 18,
  lg: 24
};

/**
 * Surface container. The default Dash card: warm paper, soft shadow, 14px radius.
 */
function Card({
  children,
  padding = 'md',
  interactive = false,
  tone = 'default',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    default: {
      bg: 'var(--surface)',
      border: '1px solid var(--line)'
    },
    sunken: {
      bg: 'var(--surface-sunken)',
      border: '1px solid var(--line)'
    },
    tint: {
      bg: 'var(--brand-tint)',
      border: '1px solid var(--pine-100)'
    },
    inverse: {
      bg: 'var(--surface-inverse)',
      border: '1px solid var(--pine-800)'
    },
    accent: {
      bg: 'var(--accent-soft)',
      border: '1px solid var(--ochre-200)'
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.bg,
      border: t.border,
      borderRadius: 'var(--radius-md)',
      padding: PADS[padding] ?? PADS.md,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-1px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      color: tone === 'inverse' ? 'var(--text-on-brand)' : 'var(--text-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
/**
 * Hairline divider. Horizontal or vertical. Optional centered label.
 */
function Divider({
  orientation = 'horizontal',
  label = null,
  spacing = 16,
  style = {}
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--line)',
        margin: `0 ${spacing}px`,
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        margin: `${spacing}px 0`,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--line)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-faint)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--line)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: '100%',
      background: 'var(--line)',
      margin: `${spacing}px 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
/**
 * Calm progress meter. No stripes, no animation loops. Pine fill by default.
 */
function ProgressBar({
  value = 0,
  max = 100,
  color = 'var(--brand)',
  track = 'var(--surface-sunken)',
  height = 8,
  showLabel = false,
  label = null,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (showLabel || label) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, label), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-body)',
      fontFeatureSettings: "'tnum' 1"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height,
      background: track,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      borderRadius: 'var(--radius-pill)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
/**
 * Metric display — mono number, label, optional unit and trend note.
 * The data voice of Dash. Numbers always tabular mono.
 */
function Stat({
  value,
  label,
  unit = null,
  caption = null,
  align = 'left',
  size = 'md',
  color = 'var(--text-strong)',
  style = {}
}) {
  const sizes = {
    sm: 22,
    md: 30,
    lg: 40
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: sizes[size] || sizes.md,
      lineHeight: 1,
      color,
      letterSpacing: 'var(--tracking-snug)',
      fontFeatureSettings: "'tnum' 1"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-medium)'
    }
  }, unit)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/**
 * Tag / chip. Selectable filter or static label. Optional color swatch.
 */
function Tag({
  children,
  selected = false,
  swatch = null,
  removable = false,
  onRemove,
  onClick,
  style = {}
}) {
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 30,
      padding: '0 12px',
      background: selected ? 'var(--brand)' : 'var(--surface)',
      color: selected ? 'var(--text-on-brand)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'transparent' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      whiteSpace: 'nowrap',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, swatch && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: swatch,
      flexShrink: 0
    }
  }), children, removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    "aria-label": "\uC81C\uAC70",
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'transparent',
      color: 'currentColor',
      opacity: 0.6,
      cursor: 'pointer',
      padding: 0,
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l6 6M9 3l-6 6",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Centered modal dialog with scrim. Calm fade-in.
 */
function Dialog({
  open = true,
  title,
  description,
  children,
  onClose,
  primaryAction,
  secondaryAction,
  width = 380
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      background: 'rgba(20, 38, 30, 0.34)',
      backdropFilter: 'blur(2px)',
      animation: 'dashFade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-pop)',
      padding: 24,
      animation: 'dashPop var(--dur-base) var(--ease-out)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-title-3)',
      marginBottom: 8
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)',
      marginBottom: children ? 16 : 20
    }
  }, description), children, (primaryAction || secondaryAction) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20,
      justifyContent: 'flex-end'
    }
  }, secondaryAction, primaryAction)), /*#__PURE__*/React.createElement("style", null, `
        @keyframes dashFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes dashPop { from { opacity: 0; transform: translateY(8px) scale(0.98) } to { opacity: 1; transform: none } }
      `));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * Empty state. Calm, never guilt-inducing. Icon, message, optional action.
 */
function EmptyState({
  icon = null,
  title,
  description,
  action = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 10,
      padding: '32px 24px',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--brand-tint)',
      color: 'var(--pine-500)',
      marginBottom: 2
    }
  }, icon), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-lg)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-normal)',
      maxWidth: 280
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  default: {
    bg: 'var(--surface-inverse)',
    fg: '#F4F9F5',
    icon: 'var(--pine-200)'
  },
  positive: {
    bg: 'var(--pine-700)',
    fg: '#F4F9F5',
    icon: 'var(--pine-200)'
  },
  seed: {
    bg: 'var(--ochre-600)',
    fg: '#fff',
    icon: '#fff'
  }
};

/**
 * Toast notification. Low, dark, calm. Optional leading icon.
 * Render inside a fixed container near the bottom of the screen.
 */
function Toast({
  children,
  tone = 'default',
  icon = null,
  style = {}
}) {
  const t = TONES[tone] || TONES.default;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      maxWidth: 360,
      padding: '12px 16px',
      background: t.bg,
      color: t.fg,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 'var(--leading-snug)',
      animation: 'dashToast var(--dur-base) var(--ease-out)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: t.icon,
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, icon), children, /*#__PURE__*/React.createElement("style", null, `@keyframes dashToast { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }`));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 34,
    padding: '0 14px',
    font: 'var(--text-sm)',
    radius: 'var(--radius-sm)',
    gap: 6
  },
  md: {
    height: 42,
    padding: '0 18px',
    font: 'var(--text-base)',
    radius: 'var(--radius-md)',
    gap: 8
  },
  lg: {
    height: 52,
    padding: '0 24px',
    font: 'var(--text-body-lg)',
    radius: 'var(--radius-md)',
    gap: 9
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--text-on-brand)',
    border: '1px solid transparent',
    shadow: 'var(--shadow-xs)',
    hoverBg: 'var(--brand-strong)'
  },
  accent: {
    background: 'var(--accent)',
    color: 'var(--text-on-accent)',
    border: '1px solid transparent',
    shadow: 'var(--shadow-xs)',
    hoverBg: 'var(--accent-strong)'
  },
  secondary: {
    background: 'var(--surface)',
    color: 'var(--text-strong)',
    border: '1px solid var(--line-strong)',
    shadow: 'var(--shadow-xs)',
    hoverBg: 'var(--surface-sunken)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand)',
    border: '1px solid transparent',
    shadow: 'none',
    hoverBg: 'var(--brand-tint)'
  },
  quiet: {
    background: 'var(--brand-tint)',
    color: 'var(--brand-strong)',
    border: '1px solid transparent',
    shadow: 'none',
    hoverBg: 'var(--brand-soft)'
  }
};

/**
 * Dash primary button. Calm, grounded, low-elevation.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    disabled: disabled,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-snug)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      background: hover && !disabled ? v.hoverBg : v.background,
      color: v.color,
      border: v.border,
      borderRadius: s.radius,
      boxShadow: active ? 'none' : v.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: active && !disabled ? 'translateY(0.5px) scale(0.99)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: -2
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: -2
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox with optional label. Pine fill when checked.
 */
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flexShrink: 0,
      padding: 0,
      background: on ? 'var(--brand)' : 'var(--field-bg)',
      border: `1.5px solid ${on ? 'var(--brand)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-xs)',
      cursor: 'inherit',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 7.5L5.5 10.5L11.5 4",
    stroke: "#F4F9F5",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-snug)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const ICON = {
  sm: 16,
  md: 18,
  lg: 20
};

/**
 * Square/round icon-only button.
 */
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  round = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const variants = {
    ghost: {
      bg: 'transparent',
      color: 'var(--text-muted)',
      hoverBg: 'var(--surface-sunken)',
      hoverColor: 'var(--text-strong)'
    },
    soft: {
      bg: 'var(--brand-tint)',
      color: 'var(--brand)',
      hoverBg: 'var(--brand-soft)',
      hoverColor: 'var(--brand-strong)'
    },
    solid: {
      bg: 'var(--brand)',
      color: 'var(--text-on-brand)',
      hoverBg: 'var(--brand-strong)',
      hoverColor: 'var(--text-on-brand)'
    },
    outline: {
      bg: 'var(--surface)',
      color: 'var(--text-body)',
      hoverBg: 'var(--surface-sunken)',
      hoverColor: 'var(--text-strong)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      background: hover && !disabled ? v.hoverBg : v.bg,
      color: hover && !disabled ? v.hoverColor : v.color,
      border: variant === 'outline' ? '1px solid var(--line-strong)' : '1px solid transparent',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: active && !disabled ? 'scale(0.92)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: ICON[size],
      height: ICON[size]
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text field with optional label, leading icon, hint and error.
 */
function Input({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  type = 'text',
  iconLeft = null,
  suffix = null,
  size = 'md',
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const heights = {
    md: 44,
    lg: 52
  };
  const h = heights[size] || heights.md;
  const borderColor = error ? 'var(--caution-500)' : focus ? 'var(--pine-500)' : 'var(--field-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 14px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--field-bg)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? `0 0 0 3px var(--focus-ring)` : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      width: 18,
      height: 18
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--caution-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
/**
 * Segmented control for 2–4 mutually exclusive options.
 * Used for quick-record mode, report period, etc.
 */
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  fullWidth = false,
  style = {}
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const current = isControlled ? value : internal;
  const h = size === 'sm' ? 34 : 40;
  const select = val => {
    if (!isControlled) setInternal(val);
    onChange && onChange(val);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      padding: 3,
      gap: 2,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }, options.map(opt => {
    const active = opt.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      type: "button",
      onClick: () => select(opt.value),
      style: {
        flex: fullWidth ? 1 : 'initial',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        height: h,
        padding: '0 16px',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        background: active ? 'var(--surface)' : 'transparent',
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        boxShadow: active ? 'var(--shadow-xs)' : 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)'
      }
    }, opt.icon && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 16,
        height: 16
      }
    }, opt.icon), opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * On/off toggle. Pine when on. Gentle slide, no bounce.
 */
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  label,
  size = 'md',
  style = {}
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === 'sm' ? {
    w: 38,
    h: 22,
    knob: 16
  } : {
    w: 46,
    h: 27,
    knob: 21
  };
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const control = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 0,
      background: on ? 'var(--brand)' : 'var(--ink-200)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: (dims.h - dims.knob) / 2,
      left: on ? dims.w - dims.knob - 3 : 3,
      width: dims.knob,
      height: dims.knob,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Multi-line text field. Mirrors Input styling. Used for Today Dash entry.
 */
function Textarea({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  rows = 3,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? 'var(--caution-500)' : focus ? 'var(--pine-500)' : 'var(--field-border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      resize: 'vertical',
      padding: '12px 14px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--field-bg)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-snug)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--caution-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
/**
 * App screen header. Title (+ optional eyebrow), with leading and trailing slots.
 */
function AppHeader({
  title,
  eyebrow = null,
  leading = null,
  trailing = null,
  large = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: large ? 'flex-end' : 'center',
      justifyContent: 'space-between',
      gap: 12,
      minHeight: 'var(--header-height)',
      padding: large ? '8px 4px 4px' : '0 4px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0,
      flex: 1
    }
  }, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 3,
      whiteSpace: 'nowrap'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: large ? 'var(--text-title-1)' : 'var(--text-title-3)',
      letterSpacing: 'var(--tracking-tight)',
      whiteSpace: large ? 'normal' : 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title))), trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0
    }
  }, trailing));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionTabs.jsx
try { (() => {
/**
 * Underline section tabs for in-screen switching (e.g. My Grove / Community Grove).
 */
function SectionTabs({
  items = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--line)',
      ...style
    }
  }, items.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      onClick: () => onChange && onChange(it.key),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        padding: '10px 6px',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        letterSpacing: 'var(--tracking-snug)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        borderRadius: '2px 2px 0 0',
        background: on ? 'var(--brand)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { SectionTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
/**
 * Bottom tab bar for the Dash app. Pine active state, mono-free labels.
 * Items: { key, label, icon }. `icon` is a render-prop receiving { active }.
 */
function TabBar({
  items = [],
  active,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      height: 'var(--tabbar-height)',
      width: '100%',
      background: 'var(--surface)',
      borderTop: '1px solid var(--line)',
      paddingBottom: 'env(safe-area-inset-bottom, 0)',
      ...style
    }
  }, items.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      type: "button",
      onClick: () => onChange && onChange(it.key),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        border: 'none',
        background: 'transparent',
        color: on ? 'var(--brand)' : 'var(--text-faint)',
        cursor: 'pointer',
        padding: '6px 0',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 22,
        height: 22
      }
    }, typeof it.icon === 'function' ? it.icon({
      active: on
    }) : it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-2xs)',
        fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-snug)'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ActivityChart = __ds_scope.ActivityChart;
__ds_ns.DOMAINS = __ds_scope.DOMAINS;
__ds_ns.DomainCard = __ds_scope.DomainCard;
__ds_ns.EvidenceItem = __ds_scope.EvidenceItem;
__ds_ns.AXES = __ds_scope.AXES;
__ds_ns.FlourishBalance = __ds_scope.FlourishBalance;
__ds_ns.GroveMeter = __ds_scope.GroveMeter;
__ds_ns.InterpretationCard = __ds_scope.InterpretationCard;
__ds_ns.RecordReview = __ds_scope.RecordReview;
__ds_ns.RingGauge = __ds_scope.RingGauge;
__ds_ns.SeedBadge = __ds_scope.SeedBadge;
__ds_ns.WeekStrip = __ds_scope.WeekStrip;
__ds_ns.Avatar = __ds_scope.Avatar;
__ds_ns.Badge = __ds_scope.Badge;
__ds_ns.Card = __ds_scope.Card;
__ds_ns.Divider = __ds_scope.Divider;
__ds_ns.ProgressBar = __ds_scope.ProgressBar;
__ds_ns.Stat = __ds_scope.Stat;
__ds_ns.Tag = __ds_scope.Tag;
__ds_ns.Dialog = __ds_scope.Dialog;
__ds_ns.EmptyState = __ds_scope.EmptyState;
__ds_ns.Toast = __ds_scope.Toast;
__ds_ns.Button = __ds_scope.Button;
__ds_ns.Checkbox = __ds_scope.Checkbox;
__ds_ns.IconButton = __ds_scope.IconButton;
__ds_ns.Input = __ds_scope.Input;
__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;
__ds_ns.Switch = __ds_scope.Switch;
__ds_ns.Textarea = __ds_scope.Textarea;
__ds_ns.AppHeader = __ds_scope.AppHeader;
__ds_ns.SectionTabs = __ds_scope.SectionTabs;
__ds_ns.TabBar = __ds_scope.TabBar;

})();
