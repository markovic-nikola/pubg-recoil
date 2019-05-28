define([
  '../../scripts/constants/window-names.js',
  '../../scripts/services/windows-service.js',
  '../../scripts/services/drag-service.js',
  '../../scripts/services/running-game-service.js',
  '../../scripts/constants/options.js',
  '../../scripts/constants/hotkeys-ids.js',
], function (WindowNames,
             windowsService,
             DragService,
             runningGameService,
             OPTIONS,
             HOTKEYS) {
    const toggleDiv = document.getElementById('toggle');
    const screenshotDiv = document.getElementById('screenshot');
    const closeButton = document.getElementById('closeButton');
    const minimizeButton = document.getElementById('minimizeButton');
    const supportButton = document.getElementById('supportButton');
    const header = document.getElementsByClassName('app-header')[0];
    const toggleChangeLink = document.getElementById('toggle_change');
    
  closeButton.addEventListener('click', onCloseClicked);
  minimizeButton.addEventListener('click', onMimizeClicked);
  supportButton.addEventListener('click', onSupportClicked);
  toggleChangeLink.addEventListener('click', onClickedChangeToggleShortcut);

  let dragService = null;
  overwolf.windows.getCurrentWindow(result => {
    dragService = new DragService(result.window, header);
  });

	async function onCloseClicked(event) {
    let isGameRunning = await runningGameService.isGameRunning();
    if (isGameRunning) {
		  window.close();
    } else {
      let mainWindow = overwolf.windows.getMainWindow();
      mainWindow.close();
    }
  }
  
  async function onMimizeClicked(event) {
    windowsService.minimize(WindowNames.SETTINGS);
  }

  async function onSupportClicked(event) {
    overwolf.utils.openUrlInDefaultBrowser(OPTIONS.SUPPORT_LINK);
  }

  function updateToggle(value) {
    toggleDiv.textContent = value;
  }

  function updateScreenshot(value) {
    if (screenshotDiv)
      screenshotDiv.textContent = value;
  }

  function onClickedChangeToggleShortcut() {
      window.open('overwolf://settings/hotkeys#' + HOTKEYS.TOGGLE, '_blank');
  }

  return {
    updateScreenshot,
    updateToggle
  }
});