/* Battery Script */

async function initBatteryDisplay() {
  if (!('getBattery' in navigator)) {
    document.getElementById('battery-percent').textContent = 'Not supported';
    return;
  }

  const battery = await navigator.getBattery();

  const percentEl = document.getElementById('battery-percent');
  const levelEl = document.getElementById('battery-level');

  function updateBatteryInfo() {
    const percent = Math.round(battery.level * 100);
    percentEl.textContent = percent + '%';
    levelEl.style.width = percent + '%';

    // Change color based on level
    if (percent < 20) {
      levelEl.style.background = 'red';
    } else if (percent < 50) {
      levelEl.style.background = 'orange';
    } else {
      levelEl.style.background = 'limegreen';
    }
  }

  // Initial update
  updateBatteryInfo();

  // Listen for changes
  battery.addEventListener('levelchange', updateBatteryInfo);
  battery.addEventListener('chargingchange', updateBatteryInfo);
}

initBatteryDisplay();
