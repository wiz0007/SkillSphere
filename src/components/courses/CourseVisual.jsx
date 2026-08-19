import React from "react";

const CourseVisual = ({ type }) => {
  if (type === "design") {
    return (
      <svg viewBox="0 0 640 420" role="presentation" focusable="false">
        <rect x="82" y="62" width="476" height="296" rx="26" fill="#09131B" stroke="#9FE8F7" strokeOpacity=".2" />
        <rect x="108" y="88" width="108" height="244" rx="18" fill="#0D1D28" />
        <rect x="240" y="88" width="292" height="112" rx="18" fill="#12232F" />
        <rect x="240" y="220" width="138" height="112" rx="18" fill="#10212B" />
        <rect x="394" y="220" width="138" height="112" rx="18" fill="#10212B" />
        <circle cx="139" cy="122" r="9" fill="#75E7F8" />
        <circle cx="169" cy="122" r="9" fill="#7CE9C2" />
        <circle cx="199" cy="122" r="9" fill="#B7C6D0" fillOpacity=".55" />
        <rect x="130" y="166" width="70" height="8" rx="4" fill="#A9DCE7" fillOpacity=".34" />
        <rect x="130" y="190" width="52" height="8" rx="4" fill="#A9DCE7" fillOpacity=".22" />
        <rect x="130" y="242" width="52" height="52" rx="14" fill="#55D9F1" fillOpacity=".12" stroke="#55D9F1" strokeOpacity=".22" />
        <rect x="268" y="118" width="140" height="12" rx="6" fill="#EAF8FB" fillOpacity=".76" />
        <rect x="268" y="146" width="214" height="9" rx="4.5" fill="#A9DCE7" fillOpacity=".26" />
        <rect x="268" y="166" width="172" height="9" rx="4.5" fill="#A9DCE7" fillOpacity=".18" />
        <path d="M272 286C301 246 323 311 349 269" stroke="#7CE9C2" strokeWidth="8" strokeLinecap="round" />
        <circle cx="462" cy="276" r="27" fill="#55D9F1" fillOpacity=".16" stroke="#55D9F1" strokeOpacity=".3" />
      </svg>
    );
  }

  if (type === "media") {
    return (
      <svg viewBox="0 0 640 420" role="presentation" focusable="false">
        <rect x="72" y="58" width="496" height="304" rx="28" fill="#09121A" stroke="#BDECF6" strokeOpacity=".18" />
        <rect x="98" y="88" width="444" height="214" rx="20" fill="#0D1B25" />
        <path d="M99 265L197 171L276 232L352 149L541 302H99V265Z" fill="#173B49" />
        <path d="M99 282L221 210L300 255L384 188L541 302H99V282Z" fill="#1E665F" fillOpacity=".46" />
        <circle cx="456" cy="143" r="29" fill="#F3D1A0" fillOpacity=".72" />
        <rect x="108" y="322" width="170" height="8" rx="4" fill="#A9DCE7" fillOpacity=".24" />
        <rect x="294" y="322" width="70" height="8" rx="4" fill="#55D9F1" fillOpacity=".5" />
        <g transform="translate(398 314)">
          <rect x="0" y="0" width="132" height="24" rx="12" fill="#0D1A22" stroke="#BDECF6" strokeOpacity=".12" />
          <rect x="14" y="7" width="12" height="10" rx="2" fill="#7CE9C2" fillOpacity=".8" />
          <rect x="34" y="7" width="18" height="10" rx="2" fill="#55D9F1" fillOpacity=".46" />
          <rect x="60" y="7" width="8" height="10" rx="2" fill="#DCEBF0" fillOpacity=".28" />
          <rect x="76" y="7" width="28" height="10" rx="2" fill="#55D9F1" fillOpacity=".24" />
        </g>
        <path d="M127 116H190" stroke="#EAF8FB" strokeOpacity=".7" strokeWidth="5" strokeLinecap="round" />
        <path d="M127 132H169" stroke="#EAF8FB" strokeOpacity=".26" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg viewBox="0 0 640 420" role="presentation" focusable="false">
        <rect x="74" y="58" width="492" height="304" rx="28" fill="#08131A" stroke="#BDECF6" strokeOpacity=".18" />
        <rect x="100" y="86" width="124" height="248" rx="18" fill="#0D1C25" />
        <rect x="246" y="86" width="294" height="118" rx="18" fill="#0E1E27" />
        <rect x="246" y="222" width="294" height="112" rx="18" fill="#0E1E27" />
        <circle cx="132" cy="119" r="10" fill="#77EDC3" />
        <rect x="152" y="113" width="46" height="10" rx="5" fill="#DCECF0" fillOpacity=".62" />
        <rect x="124" y="160" width="72" height="8" rx="4" fill="#A9DCE7" fillOpacity=".24" />
        <rect x="124" y="186" width="55" height="8" rx="4" fill="#A9DCE7" fillOpacity=".18" />
        <rect x="124" y="212" width="64" height="8" rx="4" fill="#A9DCE7" fillOpacity=".18" />
        <rect x="274" y="110" width="72" height="12" rx="6" fill="#DCECF0" fillOpacity=".58" />
        <rect x="274" y="140" width="30" height="36" rx="7" fill="#55D9F1" fillOpacity=".22" />
        <rect x="315" y="128" width="30" height="48" rx="7" fill="#55D9F1" fillOpacity=".32" />
        <rect x="356" y="115" width="30" height="61" rx="7" fill="#55D9F1" fillOpacity=".46" />
        <rect x="397" y="99" width="30" height="77" rx="7" fill="#77EDC3" fillOpacity=".58" />
        <path d="M454 164C472 143 486 153 503 123" stroke="#77EDC3" strokeWidth="5" strokeLinecap="round" />
        <circle cx="503" cy="123" r="6" fill="#77EDC3" />
        <path d="M274 304L318 276L359 289L401 254L442 268L505 238" stroke="#55D9F1" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M274 312H512" stroke="#DCECF0" strokeOpacity=".12" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 420" role="presentation" focusable="false">
      <rect x="72" y="58" width="496" height="304" rx="28" fill="#07131A" stroke="#BDECF6" strokeOpacity=".18" />
      <rect x="72" y="58" width="496" height="48" rx="28" fill="#0C1B24" />
      <circle cx="104" cy="82" r="6" fill="#F28D8D" fillOpacity=".65" />
      <circle cx="126" cy="82" r="6" fill="#E9CB73" fillOpacity=".65" />
      <circle cx="148" cy="82" r="6" fill="#77EDC3" fillOpacity=".65" />
      <rect x="99" y="132" width="110" height="204" rx="16" fill="#0B1A23" />
      <rect x="232" y="132" width="310" height="204" rx="16" fill="#08151D" />
      <rect x="120" y="158" width="61" height="9" rx="4.5" fill="#DCECF0" fillOpacity=".46" />
      <rect x="120" y="188" width="72" height="8" rx="4" fill="#55D9F1" fillOpacity=".42" />
      <rect x="120" y="214" width="52" height="8" rx="4" fill="#DCECF0" fillOpacity=".2" />
      <rect x="120" y="240" width="64" height="8" rx="4" fill="#DCECF0" fillOpacity=".2" />
      <g fill="none" strokeLinecap="round">
        <path d="M265 166H359" stroke="#77EDC3" strokeOpacity=".76" strokeWidth="7" />
        <path d="M282 195H474" stroke="#DCECF0" strokeOpacity=".28" strokeWidth="7" />
        <path d="M282 223H438" stroke="#55D9F1" strokeOpacity=".52" strokeWidth="7" />
        <path d="M302 251H488" stroke="#DCECF0" strokeOpacity=".22" strokeWidth="7" />
        <path d="M302 279H411" stroke="#77EDC3" strokeOpacity=".48" strokeWidth="7" />
      </g>
      <rect x="258" y="304" width="114" height="12" rx="6" fill="#55D9F1" fillOpacity=".14" />
      <circle cx="507" cy="306" r="13" fill="#55D9F1" fillOpacity=".18" stroke="#55D9F1" strokeOpacity=".4" />
    </svg>
  );
};

export default CourseVisual;
