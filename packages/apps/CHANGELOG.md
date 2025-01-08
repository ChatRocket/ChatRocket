# @rocket.chat/apps

## 0.1.10

### Patch Changes

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Adds simple app subprocess metrics report

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Attempts to restart an app subprocess if the spawn command fails

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Fixes an issue while collecting the error message from a failed restart attempt of an app subprocess

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Prevents app:getStatus requests from timing out in some cases

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Fixes an error where the engine would not retry a subprocess restart if the last attempt failed

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Fixes error propagation when trying to get the status of apps in some cases

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Fixes wrong data being reported to total failed apps metrics and statistics

- ([#34906](https://github.com/RocketChat/Rocket.Chat/pull/34906)) Fixes an issue that prevented the apps-engine from reestablishing communications with subprocesses in some cases

- <details><summary>Updated dependencies [50837dd102, 50837dd102, 50837dd102, 50837dd102, 50837dd102, 50837dd102, 50837dd102, 50837dd102]:</summary>

  - @rocket.chat/model-typings@0.5.10
  - @rocket.chat/core-typings@6.10.10
  </details>

## 0.1.9

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.9
  - @rocket.chat/model-typings@0.5.9
  </details>

## 0.1.8

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.8
  - @rocket.chat/model-typings@0.5.8
  </details>

## 0.1.7

### Patch Changes

- ([#33929](https://github.com/RocketChat/Rocket.Chat/pull/33929)) Fixes an issue that would cause apps to appear disabled after a subprocess restart

- ([#33929](https://github.com/RocketChat/Rocket.Chat/pull/33929)) Fixed a problem in the deno runtime controller where it would not handle undefined child process references correctly

- <details><summary>Updated dependencies [6fd8fd0bf6, 6fd8fd0bf6]:</summary>

  - @rocket.chat/model-typings@0.5.7
  - @rocket.chat/core-typings@6.10.7
  </details>

## 0.1.6

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.6
  - @rocket.chat/model-typings@0.5.6
  </details>

## 0.1.5

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.5
  - @rocket.chat/model-typings@0.5.5
  </details>

## 0.1.4

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.4
  - @rocket.chat/model-typings@0.5.4
  </details>

## 0.1.3

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.3
  - @rocket.chat/model-typings@0.5.3
  </details>

## 0.1.2

### Patch Changes

- ([#32935](https://github.com/RocketChat/Rocket.Chat/pull/32935)) Fixed an issue that prevented apps from being updated or uninstalled in some cases

- ([#32935](https://github.com/RocketChat/Rocket.Chat/pull/32935)) Fixed an issue that prevented apps from handling errors during execution in some cases

- ([#32935](https://github.com/RocketChat/Rocket.Chat/pull/32935)) Improved Apps-Engine installation to prevent start up errors on manual installation setups

- ([#32935](https://github.com/RocketChat/Rocket.Chat/pull/32935)) Fixed an issue that caused the video conference button on rooms to not recognize a video conference provider app in some cases

- <details><summary>Updated dependencies [ca6a9d8de8, ca6a9d8de8, ca6a9d8de8, ca6a9d8de8]:</summary>

  - @rocket.chat/core-typings@6.10.2
  - @rocket.chat/model-typings@0.5.2
  </details>

## 0.1.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.1
  - @rocket.chat/model-typings@0.5.1
  </details>

## 0.1.0

### Minor Changes

- ([#31821](https://github.com/RocketChat/Rocket.Chat/pull/31821)) New runtime for apps in the Apps-Engine based on the Deno platform

### Patch Changes

- <details><summary>Updated dependencies [1240c874a5, eaf2f11a6c, 5f95c4ec6b, f75a2cb4bb, 4f72d62aa7, dfa49bdbb2]:</summary>

  - @rocket.chat/core-typings@6.10.0
  - @rocket.chat/model-typings@0.5.0
  </details>

## 0.1.0-rc.7

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.7
  - @rocket.chat/model-typings@0.5.0-rc.7
  </details>

## 0.1.0-rc.6

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.6
  - @rocket.chat/model-typings@0.5.0-rc.6
  </details>

## 0.1.0-rc.5

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.5
  - @rocket.chat/model-typings@0.5.0-rc.5
  </details>

## 0.1.0-rc.4

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.4
  - @rocket.chat/model-typings@0.5.0-rc.4
  </details>

## 0.1.0-rc.3

## 0.0.9

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.3
  - @rocket.chat/model-typings@0.5.0-rc.3
  </details>

## 0.1.0-rc.2

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.2
  - @rocket.chat/model-typings@0.5.0-rc.2
  </details>

## 0.1.0-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.1
  - @rocket.chat/model-typings@0.5.0-rc.1
  </details>

## 0.1.0-rc.0

### Minor Changes

- ([#31821](https://github.com/RocketChat/Rocket.Chat/pull/31821)) New runtime for apps in the Apps-Engine based on the Deno platform

### Patch Changes

- <details><summary>Updated dependencies [1240c874a5, eaf2f11a6c, 5f95c4ec6b, f75a2cb4bb, 4f72d62aa7, dfa49bdbb2]:</summary>

  - @rocket.chat/core-typings@6.10.0-rc.0
  - @rocket.chat/model-typings@0.5.0-rc.0

## 0.0.9

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.3
  - @rocket.chat/model-typings@0.4.4
  </details>

## 0.0.8

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.2
  - @rocket.chat/model-typings@0.4.3
  </details>

## 0.0.7

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.1
  - @rocket.chat/model-typings@0.4.2
  </details>

## 0.0.6

### Patch Changes

- <details><summary>Updated dependencies [ff4e396416, 70ab2a7b7b]:</summary>

  - @rocket.chat/core-typings@6.9.0
  - @rocket.chat/model-typings@0.4.1
  </details>

## 0.0.6-rc.2

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.0-rc.2
  - @rocket.chat/model-typings@0.4.1-rc.2
  </details>

## 0.0.6-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.9.0-rc.1
  - @rocket.chat/model-typings@0.4.1-rc.1
  </details>

## 0.0.6-rc.0

### Patch Changes

- <details><summary>Updated dependencies [ff4e396416, 70ab2a7b7b]:</summary>

  - @rocket.chat/core-typings@6.9.0-rc.0
  - @rocket.chat/model-typings@0.4.1-rc.0
  </details>

## 0.0.5

### Patch Changes

- ([#32374](https://github.com/RocketChat/Rocket.Chat/pull/32374)) Fixed an issue with some apps that didn't implement executeViewCloseHandler. This causes opened modals to be open forever on UI (unless Esc was clicked). This is because when the UI attempts to close it, it calls the aforementioned handler, and since it didn't exist, apps engine errored out.

  This returned an empty response to the UI, which ignored the response and continued to show the view.

- <details><summary>Updated dependencies [c47a8e3514, da45cb6998, b94ca7c30b, 4aba7c8a26]:</summary>

  - @rocket.chat/core-typings@6.8.0
  - @rocket.chat/model-typings@0.4.0
  </details>

## 0.0.5-rc.2

### Patch Changes

- ([#32374](https://github.com/RocketChat/Rocket.Chat/pull/32374)) Fixed an issue with some apps that didn't implement executeViewCloseHandler. This causes opened modals to be open forever on UI (unless Esc was clicked). This is because when the UI attempts to close it, it calls the aforementioned handler, and since it didn't exist, apps engine errored out.

  This returned an empty response to the UI, which ignored the response and continued to show the view.

- <details><summary>Updated dependencies [b94ca7c30b]:</summary>

  - @rocket.chat/core-typings@6.8.0-rc.2
  - @rocket.chat/model-typings@0.4.0-rc.2
  </details>

## 0.0.5-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.8.0-rc.1
  - @rocket.chat/model-typings@0.4.0-rc.1
  </details>

## 0.0.5-rc.0

### Patch Changes

- <details><summary>Updated dependencies [c47a8e3514, da45cb6998, 4aba7c8a26]:</summary>

  - @rocket.chat/core-typings@6.8.0-rc.0
  - @rocket.chat/model-typings@0.4.0-rc.0

## 0.0.4

### Patch Changes

- <details><summary>Updated dependencies []:</summary>
  - @rocket.chat/core-typings@6.7.2
  - @rocket.chat/model-typings@0.3.9
  </details>

## 0.0.3

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.1
  - @rocket.chat/model-typings@0.3.8
  </details>

## 0.0.2

### Patch Changes

- <details><summary>Updated dependencies [b9ef630816, 3eb4dd7f50, 0570f6740a, b9e897a8f5]:</summary>

  - @rocket.chat/core-typings@6.7.0
  - @rocket.chat/model-typings@0.3.7
  </details>

## 0.0.2-rc.4

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.4
  - @rocket.chat/model-typings@0.3.7-rc.4
  </details>

## 0.0.2-rc.3

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.3
  - @rocket.chat/model-typings@0.3.7-rc.3
  </details>

## 0.0.2-rc.2

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.2
  - @rocket.chat/model-typings@0.3.7-rc.2
  </details>

## 0.0.2-rc.1

### Patch Changes

- <details><summary>Updated dependencies []:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.1
  - @rocket.chat/model-typings@0.3.7-rc.1
  </details>

## 0.0.2-rc.0

### Patch Changes

- <details><summary>Updated dependencies [b9ef630816, 3eb4dd7f50, 0570f6740a, b9e897a8f5]:</summary>

  - @rocket.chat/core-typings@6.7.0-rc.0
  - @rocket.chat/model-typings@0.3.7-rc.0
  </details>
