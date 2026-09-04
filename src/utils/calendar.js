// Utilities for calendar integration (Google Calendar & .ics export)

function formatIsoForGoogle(isoStr) {
  const d = new Date(isoStr);
  return d.toISOString().replace(/-|:|\.\d+/g, "");
}

export function getGoogleCalendarUrl(event, coupleNames = "Alex & Samantha") {
  const title = encodeURIComponent(`${event.name} — ${coupleNames}'s Wedding`);
  const details = encodeURIComponent(
    `${event.description}\n\nDress Code: ${event.dressCode}\nVenue: ${event.venue}\nAddress: ${event.address}`
  );
  const location = encodeURIComponent(`${event.venue}, ${event.address}`);
  
  const start = formatIsoForGoogle(event.startIso);
  const end = formatIsoForGoogle(event.endIso);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function downloadIcsFile(event, coupleNames = "Alex & Samantha") {
  const start = formatIsoForGoogle(event.startIso);
  const end = formatIsoForGoogle(event.endIso);
  const now = formatIsoForGoogle(new Date().toISOString());

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Alex & Samantha Wedding//Event Schedule//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:wedding-${event.id}-${Date.now()}@weddinginvitation.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.name} — ${coupleNames}'s Wedding`,
    `DESCRIPTION:${event.description.replace(/\n/g, "\\n")} (Dress Code: ${event.dressCode})`,
    `LOCATION:${event.venue}, ${event.address}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${event.id}-wedding-event.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
