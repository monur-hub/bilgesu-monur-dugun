import { useEffect, useState } from 'react';

export function useCountdown(targetDate) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diffMs = Math.max(0, targetDate.getTime() - now);
  const totalSec = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  const pad = (n) => String(n).padStart(2, '0');

  return [
    { value: pad(days), label: 'Gün' },
    { value: pad(hours), label: 'Saat' },
    { value: pad(mins), label: 'Dakika' },
    { value: pad(secs), label: 'Saniye' },
  ];
}
