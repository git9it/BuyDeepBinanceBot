import React from 'react';

function Header() {
  const svgDataUri =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MjkuMDAwMDAwMDAwMDAwMDYiIGhlaWdodD0iOTguNzMzMTg5MjQxMTE0MzUiIHZpZXdCb3g9IjAgMCA0MDcuMzQ3ODI2MDg2OTU2NSA5My43NTAwMDAwMDAwMDAwMSIgY2xhc3M9ImNzcy0xajhvNjhmIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAyNyI+PGxpbmVhckdyYWRpZW50IGlkPSJTdmdqc0xpbmVhckdyYWRpZW50MTAzNiI+PHN0b3AgaWQ9IlN2Z2pzU3RvcDEwMzciIHN0b3AtY29sb3I9IiM4ZjVlMjUiIG9mZnNldD0iMCIvPjxzdG9wIGlkPSJTdmdqc1N0b3AxMDM4IiBzdG9wLWNvbG9yPSIjZmJmNGExIiBvZmZzZXQ9IjAuNSIvPjxzdG9wIGlkPSJTdmdqc1N0b3AxMDM5IiBzdG9wLWNvbG9yPSIjOGY1ZTI1IiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iU3ZnanNMaW5lYXJHcmFkaWVudDEwNDAiPjxzdG9wIGlkPSJTdmdqc1N0b3AxMDQxIiBzdG9wLWNvbG9yPSIjOGY1ZTI1IiBvZmZzZXQ9IjAiLz48c3RvcCBpZD0iU3ZnanNTdG9wMTA0MiIgc3RvcC1jb2xvcj0iI2ZiZjRhMSIgb2Zmc2V0PSIwLjUiLz48c3RvcCBpZD0iU3ZnanNTdG9wMTA0MyIgc3RvcC1jb2xvcj0iIzhmNWUyNSIgb2Zmc2V0PSIxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlN2Z2pzTGluZWFyR3JhZGllbnQxMDQ0Ij48c3RvcCBpZD0iU3ZnanNTdG9wMTA0NSIgc3RvcC1jb2xvcj0iIzhmNWUyNSIgb2Zmc2V0PSIwIi8+PHN0b3AgaWQ9IlN2Z2pzU3RvcDEwNDYiIHN0b3AtY29sb3I9IiNmYmY0YTEiIG9mZnNldD0iMC41Ii8+PHN0b3AgaWQ9IlN2Z2pzU3RvcDEwNDciIHN0b3AtY29sb3I9IiM4ZjVlMjUiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDI4IiBmZWF0dXJla2V5PSJzeW1ib2xDb250YWluZXIiIHRyYW5zZm9ybT0ibWF0cml4KDEuNjY3MDEyMTUyMDQxMDU5LDAsMCwxLjY2NzAxMjE1MjA0MTA1OSwwLjAwMDAxMjI3MTQxMDc1MDQ5ODY0LDAuMDA2OTU3MjQ0OTM4NDU5OTczKSIgZmlsbD0idXJsKCNTdmdqc0xpbmVhckdyYWRpZW50MTAzNikiPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0iTTIzLjExIDU1Ljc4TDEuNjkgNDMuNDFBMy4zOSAzLjM5IDAgMCAxIDAgNDAuNDhWMTUuNzVhMy4zOSAzLjM5IDAgMCAxIDEuNjktMi45NEwyMy4xMS40NWEzLjM5IDMuMzkgMCAwIDEgMy4zOSAwbDIxLjQxIDEyLjM3YTMuMzkgMy4zOSAwIDAgMSAxLjY5IDIuOTR2MjQuNzJhMy4zOSAzLjM5IDAgMCAxLTEuNjkgMi45NEwyNi41IDU1Ljc4YTMuMzkgMy4zOSAwIDAgMS0zLjM5IDB6Ii8+PC9nPjxnIGlkPSJTdmdqc0cxMDI5IiBmZWF0dXJla2V5PSJtb25vZ3JhbUZlYXR1cmUtMCIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NDM3NzUzMTQ4Mzc1MDQzLDAsMCwxLjQ0Mzc3NTMxNDgzNzUwNDMsMTguOTk5OTk0ODM2NjU3MTEzLC05LjMzNDQ1ODY1ODM5OTI2KSIgZmlsbD0iIzBkMGQwZCI+PHBhdGggZD0iTTI5LjIyIDM5LjE4IGMxLjM4IC0yLjEgMi4xIC00Ljc0IDIuMSAtNy44IGMwIC04LjM0IC00LjkyIC0xMy4wOCAtMTMuMzggLTEzLjA4IGwtMTMuODYgMCBsMCAxOC4wNiBsMTQuMSAwIGMzLjE4IDAgNS4xIC0xLjggNS4xIC00Ljk4IGMwIC0xLjY4IC0wLjYgLTMuMDYgLTEuOCAtNC4yIGMtMC43OCAtMC43MiAtMi4xIC0xLjE0IC0zLjMgLTEuMTQgbC0xMC4wMiAwIGwwIDYuMyBsMi4xNiAwIGwwIC00LjIgbDcuODYgMCBjMS43NCAwIDIuOTQgMS4xNCAyLjk0IDMuMjQgYzAgMS44NiAtMC45NiAyLjgyIC0yLjk0IDIuODIgbC0xMiAwIGwwIC0xMy43NCBsMTEuNDYgMCBjNy40NCAwIDExLjU4IDMuNzggMTEuNTggMTAuOTIgYzAgMi4zNCAtMC40OCA0LjM4IC0xLjUgNi4yNCBsLTAuNiAwLjk2IGwtMC42NiAwLjY2IGwwLjc4IDAuNzggbDEuMTQgMS4zMiBjMC43MiAwLjkgMS4wOCAyLjc2IDEuMDggNS42NCBjMCA3LjAyIC00LjIgMTAuOCAtMTEuODIgMTAuOCBsLTE1LjQ4IDAgbDAgLTM5LjU0IGwtMi4xNiAwIGwwIDQxLjcgbDE3LjY0IDAgYzguNyAwIDEzLjk4IC00LjggMTMuOTggLTEyLjk2IGMwIC0zLjEyIC0wLjc4IC01LjcgLTIuNCAtNy44IHogTTE5LjA4IDU2LjA0IGMyLjEgMCA0LjA4IC0wLjc4IDUuOTQgLTIuNCBjMS43NCAtMS43NCAyLjY0IC0zLjg0IDIuNjQgLTYuMjQgYzAgLTMgLTAuOTYgLTUuMzQgLTIuOTQgLTcuMDggbC0xLjU2IC0xLjE0IGMyLjcgLTEuNSA0LjMyIC00LjM4IDQuMzIgLTguMTYgYzAgLTEuNjIgLTAuMzYgLTMuMTggLTEuMDggLTQuNTYgYy0xLjQ0IC0yLjc2IC00LjAyIC00LjI2IC03LjMyIC00LjI2IGwtMTAuODYgMCBsMCAyLjE2IGwxMC44NiAwIGMxLjAyIDAgMS45OCAwLjMgMyAwLjkgYzEuOTIgMS4yIDMuMTggMy4zNiAzLjE4IDUuNzYgYzAgNC4xNCAtMi41MiA3LjA4IC02LjM2IDcuMDggbC0xNC43NiAwIGwwIDIuMTYgbDE0Ljc2IDAgYzQuMDIgMCA2LjYgMi43NiA2LjYgNy4xNCBjMCAyLjQgLTEuMDIgNC4yNiAtMy4xMiA1LjUyIGMtMS4wMiAwLjYgLTIuMSAwLjkgLTMuMyAwLjkgbC0xMi45IDAgbDAgLTkuNDggbDEyIDAgYzIuMSAwIDMuMTIgMC45NiAzLjEyIDIuODIgYzAgMS45MiAtMS4wMiAyLjg4IC0zLjEyIDIuODggbC03Ljg2IDAgbDAgLTMuOTYgbC0yLjE2IDAgbDAgNi4xMiBsMTAuMDIgMCBjMi4zNCAwIDMuOSAtMC44NCA0Ljc0IC0yLjU4IGMwLjM2IC0wLjY2IDAuNTQgLTEuNSAwLjU0IC0yLjQ2IGMwIC0zLjEyIC0yLjEgLTUuMDQgLTUuMjggLTUuMDQgbC0xNC4xIDAgbDAgMTMuOTIgbDE1IDAgeiIvPjwvZz48ZyBpZD0iU3ZnanNHMTAzMCIgZmVhdHVyZWtleT0ibmFtZUZlYXR1cmUtMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk2OTcyMjY1MzQ5MTQ4LDAsMCwwLjk5OTY5NzIyNjUzNDkxNDgsMTAxLjAwMDYwNjUwMDMxNTc0LDEyLjQwMjMwMTY1MDM2NTk4OCkiIGZpbGw9InVybCgjU3ZnanNMaW5lYXJHcmFkaWVudDEwNDApIj48cGF0aCBkPSJNMiA0MCBsMCAtMzIgbDYuMDggMCBjNC4xMiAwIDUuNDggMi41NiA1LjQ4IDcuMTYgbDAgMC44NCBjMCAyLjc2IC0wLjY0IDQuOTIgLTEuMzYgNi40OCBsMCAwLjE2IGMxLjQ4IDEuMjQgMi40IDMuNjggMi42IDcuOTIgbDAgMS4yOCBjLTAuMzIgNS42NCAtMS44IDguMTYgLTUuOTIgOC4xNiBsLTYuODggMCB6IE02IDIxLjYgbDIuMDggMCBjMS4xMiAwIDEuOTIgLTEuMzIgMS45MiAtNS42IGwwIC0wLjg0IGMwIC0zLjA4IC0wLjcyIC0zLjk2IC0xLjkyIC0zLjk2IGwtMi4wOCAwIGwwIDEwLjQgeiBNNiAzNiBsMi44OCAwIGMxLjIgMCAyLjA0IC0xIDIuMiAtNC4xNiBsMCAtMS4yOCBjLTAuMTYgLTQuNzYgLTEgLTUuNzYgLTIuMiAtNS43NiBsLTIuODggMCBsMCAxMS4yIHogTTE5LjQwMDAwMDAwMDAwMDAwMiAyMy4xNiBsMCAtMTUuMTYgbDQgMCBsMCAxNS4xNiBjMCAxMS41NiAwIDEzLjI0IDIgMTMuMjQgczIgLTEuNjggMiAtMTMuMjQgbDAgLTE1LjE2IGw0IDAgbDAgMTUuMTYgYzAgMTIuOCAwIDE3LjI0IC02IDE3LjI0IHMtNiAtNC40NCAtNiAtMTcuMjQgeiBNMzUuNiA4IGw0IDAgbDIuNCAxMi4zMiBsMC40IDAgbDIuNCAtMTIuMzIgbDQgMCBsLTQuNiAxOC4wOCBsMCAxMy45MiBsLTQgMCBsMCAtMTMuOTIgeiBNNjQgNDAgbDAgLTMyIGw2IDAgYzYgMCA2IDQuNCA2IDE1LjE2IGMwIDEyLjQgMCAxNi44NCAtNiAxNi44NCBsLTYgMCB6IE02OCAzNiBsMiAwIGMyLjI0IDAgMi4yNCAtMS42OCAyLjI0IC0xMi44NCBjMCAtMTAgMCAtMTEuOTYgLTIuMjQgLTExLjk2IGwtMiAwIGwwIDI0LjggeiBNODEuNiA0MCBsMCAtMzIgbDkuMiAwIGwwIDMuMiBsLTUuMiAwIGwwIDEwLjQgbDQuNCAwIGwwIDMuMiBsLTQuNCAwIGwwIDExLjIgbDUuMiAwIGwwIDQgbC05LjIgMCB6IE05NS42IDQwIGwwIC0zMiBsOS4yIDAgbDAgMy4yIGwtNS4yIDAgbDAgMTAuNCBsNC40IDAgbDAgMy4yIGwtNC40IDAgbDAgMTEuMiBsNS4yIDAgbDAgNCBsLTkuMiAwIHogTTEwOS42IDQwIGwwIC0zMiBsNi40OCAwIGM0LjEyIDAgNS4yIDIuNTIgNS41MiA4LjU2IGwwIDEuMjggYy0wLjMyIDYuMDQgLTEuNCA4LjU2IC01LjUyIDguNTYgbC0yLjQ4IDAgbDAgMTMuNiBsLTQgMCB6IE0xMTMuNiAyMy4yIGwyLjQ4IDAgYzEuMiAwIDEuNjQgLTEgMS44IC01LjM2IGwwIC0xLjI4IGMtMC4xNiAtNC4zNiAtMC42IC01LjM2IC0xLjggLTUuMzYgbC0yLjQ4IDAgbDAgMTIgeiBNMTM3LjIgNDAgbDAgLTMyIGw2LjA4IDAgYzQuMTIgMCA1LjQ4IDIuNTYgNS40OCA3LjE2IGwwIDAuODQgYzAgMi43NiAtMC42NCA0LjkyIC0xLjM2IDYuNDggbDAgMC4xNiBjMS40OCAxLjI0IDIuNCAzLjY4IDIuNiA3LjkyIGwwIDEuMjggYy0wLjMyIDUuNjQgLTEuOCA4LjE2IC01LjkyIDguMTYgbC02Ljg4IDAgeiBNMTQxLjIgMjEuNiBsMi4wOCAwIGMxLjEyIDAgMS45MiAtMS4zMiAxLjkyIC01LjYgbDAgLTAuODQgYzAgLTMuMDggLTAuNzIgLTMuOTYgLTEuOTIgLTMuOTYgbC0yLjA4IDAgbDAgMTAuNCB6IE0xNDEuMiAzNiBsMi44OCAwIGMxLjIgMCAyLjA0IC0xIDIuMiAtNC4xNiBsMCAtMS4yOCBjLTAuMTYgLTQuNzYgLTEgLTUuNzYgLTIuMiAtNS43NiBsLTIuODggMCBsMCAxMS4yIHogTTE1NC43OTk5OTk5OTk5OTk5OCA0MCBsMCAtMzIgbDQgMCBsMCAzMiBsLTQgMCB6IE0xNjQuNzk5OTk5OTk5OTk5OTggNDAgbDAgLTMyIGwzLjYgMCBsNS4yNCAxOS42IGwtMC4wNCAtMC40IGwwIC0xOS4yIGw0IDAgbDAgMzIgbC0zLjYgMCBsLTUuMjQgLTE3LjYgbDAuMDQgMC40IGwwIDE3LjIgbC00IDAgeiBNMTgzLjYgNDAgbDAgLTE2LjggYzAgLTExLjE2IDAgLTE1LjU2IDYgLTE1LjU2IHM2IDQuNCA2IDE1LjU2IGwwIDE2LjggbC00IDAgbDAgLTkuMiBsLTQgMCBsMCA5LjIgbC00IDAgeiBNMTg3LjYgMjcuNiBsNCAwIGwwIC00LjQgYzAgLTEwLjQgMCAtMTIuMzYgLTIgLTEyLjM2IHMtMiAxLjk2IC0yIDEyLjM2IGwwIDQuNCB6IE0yMDEuNiA0MCBsMCAtMzIgbDMuNiAwIGw1LjI0IDE5LjYgbC0wLjA0IC0wLjQgbDAgLTE5LjIgbDQgMCBsMCAzMiBsLTMuNiAwIGwtNS4yNCAtMTcuNiBsMC4wNCAwLjQgbDAgMTcuMiBsLTQgMCB6IE0yMjAgMjMuMTYgYzAgLTExLjE2IDAgLTE1LjU2IDUuNiAtMTUuNTYgYzQuMTIgMCA1LjI0IDIuNTIgNS41MiA4LjU2IGwtMy43MiAwIGMtMC4xNiAtNC4zNiAtMC42IC01LjM2IC0xLjggLTUuMzYgYy0xLjg0IDAgLTEuODQgMS45NiAtMS44NCAxMi4zNiBjMCAxMS41NiAwIDEzLjI0IDEuODQgMTMuMjQgYzEuMzIgMCAxLjcyIC0xIDEuOCAtNi4xNiBsMy43NiAwIGMtMC4yNCA3LjQgLTEuMjQgMTAuMTYgLTUuNTYgMTAuMTYgYy01LjYgMCAtNS42IC00LjQ0IC01LjYgLTE3LjI0IHogTTIzNS45NiA0MCBsMCAtMzIgbDkuMiAwIGwwIDMuMiBsLTUuMiAwIGwwIDEwLjQgbDQuNCAwIGwwIDMuMiBsLTQuNCAwIGwwIDExLjIgbDUuMiAwIGwwIDQgbC05LjIgMCB6IE0yNjAuNzYgNDAgbDAgLTMyIGw2LjA4IDAgYzQuMTIgMCA1LjQ4IDIuNTYgNS40OCA3LjE2IGwwIDAuODQgYzAgMi43NiAtMC42NCA0LjkyIC0xLjM2IDYuNDggbDAgMC4xNiBjMS40OCAxLjI0IDIuNCAzLjY4IDIuNiA3LjkyIGwwIDEuMjggYy0wLjMyIDUuNjQgLTEuOCA4LjE2IC01LjkyIDguMTYgbC02Ljg4IDAgeiBNMjY0Ljc2IDIxLjYgbDIuMDggMCBjMS4xMiAwIDEuOTIgLTEuMzIgMS45MiAtNS42IGwwIC0wLjg0IGMwIC0zLjA4IC0wLjcyIC0zLjk2IC0xLjkyIC0zLjk2IGwtMi4wOCAwIGwwIDEwLjQgeiBNMjY0Ljc2IDM2IGwyLjg4IDAgYzEuMiAwIDIuMDQgLTEgMi4yIC00LjE2IGwwIC0xLjI4IGMtMC4xNiAtNC43NiAtMSAtNS43NiAtMi4yIC01Ljc2IGwtMi44OCAwIGwwIDExLjIgeiBNMjc3Ljk2MDAwMDAwMDAwMDA0IDIzLjE2IGMwIC0xMS4xNiAwLjI0IC0xNS41NiA2LjI0IC0xNS41NiBzNi4yNCA0LjQgNi4yNCAxNS41NiBjMCAxMi44IC0wLjI0IDE3LjI0IC02LjI0IDE3LjI0IHMtNi4yNCAtNC40NCAtNi4yNCAtMTcuMjQgeiBNMjgxLjk2MDAwMDAwMDAwMDA0IDIzLjE2IGMwIDExLjU2IDAgMTMuMjQgMi4yNCAxMy4yNCBzMi4yNCAtMS42OCAyLjI0IC0xMy4yNCBjMCAtMTAuNCAwIC0xMi4zNiAtMi4yNCAtMTIuMzYgcy0yLjI0IDEuOTYgLTIuMjQgMTIuMzYgeiBNMjk0LjQ0IDExLjYwMDAwMDAwMDAwMDAwMSBsMCAtMy42IGwxMiAwIGwwIDMuNiBsLTQgMCBsMCAyOC40IGwtNCAwIGwwIC0yOC40IGwtNCAwIHoiLz48L2c+PGcgaWQ9IlN2Z2pzRzEwMzEiIGZlYXR1cmVrZXk9InNsb2dhbkZlYXR1cmUtMCIgdHJhbnNmb3JtPSJtYXRyaXgoMC42MzM3NTYxODA2ODI1MDUsMCwwLDAuNjMzNzU2MTgwNjgyNTA1LDk4LjgwNDIxNzE1MDE4Njk2LDU5LjkxOTk0NDU3NTA2ODk1KSIgZmlsbD0idXJsKCNTdmdqc0xpbmVhckdyYWRpZW50MTA0NCkiPjxwYXRoIGQ9Ik0xNC41MjA1IDE1LjU0IGMwIDEuNCAtMC4zOTMzNiAyLjQ5MzQgLTEuMTggMy4yOCBzLTEuODggMS4xOCAtMy4yOCAxLjE4IGwtMy40NCAwIGwwIC0xNSBsMi45OCAwIGMxLjMyIDAgMi4zMzY2IDAuMzIzMzQgMy4wNSAwLjk3IHMxLjA3IDEuNjM2NyAxLjA3IDIuOTcgYzAgMC41NiAtMC4xNTMzNCAxLjA4MzMgLTAuNDYgMS41NyBzLTAuNjczMzIgMC45MDMzMiAtMS4xIDEuMjUgYzAuNjggMC40NCAxLjI0MzMgMC45NjY2NiAxLjY5IDEuNTggczAuNjcgMS4zNDY3IDAuNjcgMi4yIHogTTEyLjQwMDUwMDAwMDAwMDAwMSA4Ljk0IGMwIC0wLjczMzM0IC0wLjIgLTEuMzQzNCAtMC42IC0xLjgzIHMtMC45ODY2NiAtMC43MyAtMS43NiAtMC43MyBsLTIuMDQgMCBsMCA0Ljg2IGwyLjI0IDAgYzAuMzIgMCAwLjYxIC0wLjA2MzM0IDAuODcgLTAuMTkgczAuNDg2NjYgLTAuMjkzMzIgMC42OCAtMC40OTk5OCBzMC4zNDMzNCAtMC40NSAwLjQ1IC0wLjczIHMwLjE2IC0wLjU3MzM0IDAuMTYgLTAuODggeiBNMTMuMTgwNDk5OTk5OTk5OTk5IDE1LjYyMDAwMDAwMDAwMDAwMSBjMCAtMC45NiAtMC4yNjY2NCAtMS43MDMzIC0wLjc5OTk4IC0yLjIzIHMtMS4yNzMzIC0wLjc5IC0yLjIyIC0wLjc5IGwtMi4xNiAwIGwwIDUuOTggbDEuODQgMCBjMC40NjY2NiAwIDAuOTAzMzIgLTAuMDYgMS4zMSAtMC4xOCBzMC43NiAtMC4zIDEuMDYgLTAuNTQgczAuNTM2NjYgLTAuNTQ2NjYgMC43MSAtMC45MiBzMC4yNiAtMC44MTMzNCAwLjI2IC0xLjMyIHogTTI2LjY4MDk5OTk5OTk5OTk5NyAxNi4xMiBjMCAxLjMzMzMgLTAuMzIzMzYgMi4zNDM0IC0wLjk3MDAyIDMuMDMgcy0xLjY0MzMgMS4wMyAtMi45OSAxLjAzIGMtMS4yOCAwIC0yLjI0MzQgLTAuMzY2NjYgLTIuODkgLTEuMSBzLTAuOTcgLTEuNzIgLTAuOTcgLTIuOTYgbDAgLTExLjEyIGwxLjQyIDAgbDAgMTEuMDYgYzAgMC4zNzMzNCAwLjA1IDAuNzIzMzQgMC4xNSAxLjA1IHMwLjI1IDAuNjEzMzIgMC40NSAwLjg1OTk4IHMwLjQ1IDAuNDQgMC43NSAwLjU4IHMwLjY1IDAuMjEgMS4wNSAwLjIxIGMwLjk3MzM0IDAgMS42NSAtMC4yNyAyLjAzIC0wLjgxIHMwLjU3IC0xLjI2MzMgMC41NyAtMi4xNyBsMCAtMTAuNzggbDEuNCAwIGwwIDExLjEyIHogTTM5LjgyMTUgNSBsLTMuNTQgOC4xNiBsMCA2Ljg0IGwtMS40NCAwIGwwIC02Ljg0IGwtMy41NCAtOC4xNiBsMS42IDAgbDIuNjQgNi40NCBsMi42OCAtNi40NCBsMS42IDAgeiBNNTcuMzAyNDk5OTk5OTk5OTk1IDIwIGwtNi4xOCAwIGwwIC0xNSBsMS40IDAgbDAgMTMuNTYgbDQuNzggMCBsMCAxLjQ0IHogTTY4Ljk4MyAxNi4xMiBjMCAxLjQxMzMgLTAuMzE2NjYgMi40NDM0IC0wLjk1IDMuMDkgcy0xLjY2MzMgMC45NyAtMy4wOSAwLjk3IGMtMS4zMDY3IDAgLTIuMjYzNCAtMC4zNiAtMi44NyAtMS4wOCBzLTAuOTEgLTEuNzEzMyAtMC45MSAtMi45OCBsMCAtNy4yIGMwIC0xLjM3MzMgMC4zMjMzNCAtMi4zOTM0IDAuOTcgLTMuMDYgczEuNjYzMyAtMSAzLjA1IC0xIGMxLjMyIDAgMi4yODM0IDAuMzUgMi44OSAxLjA1IHMwLjkxIDEuNjkgMC45MSAyLjk3IGwwIDcuMjQgeiBNNjcuNTgzIDE2LjA4IGwtMC4wMDAwMTk1MzEgLTcuMjIgYzAgLTAuNzYgLTAuMiAtMS4zOTMzIC0wLjYgLTEuOSBzLTEuMDA2NyAtMC43NiAtMS44MiAtMC43NiBjLTAuOTczMzQgMCAtMS42NSAwLjI1MzM0IC0yLjAzIDAuNzYgcy0wLjU3IDEuMjIgLTAuNTcgMi4xNCBsMCA2LjkgYzAgMC4zODY2NiAwLjA0MzM0IDAuNzUgMC4xMyAxLjA5IHMwLjIyNjY2IDAuNjM2NjYgMC40MiAwLjg5IHMwLjQ0IDAuNDUzMzQgMC43NCAwLjYgczAuNjYzMzQgMC4yMiAxLjA5IDAuMjIgYzAuOTMzMzQgMCAxLjYwNjcgLTAuMjI2NjYgMi4wMiAtMC42OCBzMC42MiAtMS4xMzMzIDAuNjIgLTIuMDQgeiBNODcuNDgzNSA1IGwtMy40NCAxNSBsLTEuMjggMCBsLTIuNSAtMTIuMjQgbC0yLjQ4IDEyLjI0IGwtMS4yNiAwIGwtMy40NCAtMTUgbDEuNDQgMCBsMi41MiAxMiBsMi43NiAtMTEuOTYgbC0wLjAyIC0wLjA0IGwwLjAyIDAgbDAuOTYgMCBsMC4xMSAwLjQ5IGMwLjA3MzM0IDAuMzI2NjYgMC4xNyAwLjc1MzMyIDAuMjkgMS4yOCBzMC4yNTY2NiAxLjEzMzMgMC40MSAxLjgyIHMwLjMxMzM0IDEuMzkgMC40OCAyLjExIHMwLjMzIDEuNDMzMyAwLjQ5IDIuMTQgczAuMzA2NjYgMS4zNSAwLjQ0IDEuOTMgczAuMjQ2NjggMS4wNyAwLjM0MDAyIDEuNDcgczAuMTUzMzQgMC42NTMzNCAwLjE4IDAuNzYgbDIuNTIgLTEyIGwxLjQ2IDAgeiBNMTA2LjcwNDUwMDAwMDAwMDAxIDE2LjEyIGMwIDEuMjI2NyAtMC4zMTk5IDIuMjEgLTAuOTU5OSAyLjk1IHMtMS41OTMzIDEuMTEgLTIuODYgMS4xMSBjLTAuNzQ2NjYgMCAtMS4zNzY3IC0wLjEwNjY2IC0xLjg5IC0wLjMyIHMtMC45MyAtMC41MiAtMS4yNSAtMC45MiBzLTAuNTUgLTAuODggLTAuNjkgLTEuNDQgcy0wLjIwMzM0IC0xLjE4NjcgLTAuMTkgLTEuODggbDAuMDIgLTAuNTIgbDEuNTQgMCBjMCAwLjQyNjY2IDAuMDEzMzQgMC44NjMzMiAwLjA0IDEuMzEgczAuMTEzMzIgMC44NTMzMiAwLjI1OTk4IDEuMjIgczAuMzczMzIgMC42NjY2NiAwLjY3OTk4IDAuOSBzMC43NDY2NiAwLjM1IDEuMzIgMC4zNSBjMC44OCAwIDEuNTI2NyAtMC4yMzMzNCAxLjk0IC0wLjcgczAuNjIgLTEuMTIgMC42MiAtMS45NiBjMCAtMC42NjY2NiAtMC4xNiAtMS4xOTMzIC0wLjQ4IC0xLjU4IHMtMC43MiAtMC43MTMzMiAtMS4yIC0wLjk3OTk4IHMtMC45OTY2NiAtMC41MDY2NiAtMS41NSAtMC43MiBzLTEuMDcgLTAuNDggLTEuNTUgLTAuOCBzLTAuODggLTAuNzMgLTEuMiAtMS4yMyBzLTAuNDggLTEuMTYzMyAtMC40OCAtMS45OSBjMCAtMS4zMzMzIDAuMzQzMzQgLTIuMzQzNCAxLjAzIC0zLjAzIHMxLjY5NjcgLTEuMDMgMy4wMyAtMS4wMyBjMC42MjY2NiAwIDEuMTcgMC4xIDEuNjMgMC4zIHMwLjg0MzM0IDAuNDggMS4xNSAwLjg0IHMwLjUzMzMyIDAuNzg2NjYgMC42Nzk5OCAxLjI4IHMwLjIyIDEuMDQgMC4yMiAxLjY0IGwwIDEuMjYgbC0xLjQ2IDAgYzAgLTAuNDQgLTAuMDAzMzM5OCAtMC44OTY2NiAtMC4wMSAtMS4zNyBzLTAuMDc2NjYgLTAuOTA2NjggLTAuMjEgLTEuMyBzLTAuMzU2NjggLTAuNzE2NjggLTAuNjcwMDIgLTAuOTcwMDIgcy0wLjc3IC0wLjM4IC0xLjM3IC0wLjM4IGMtMC44NjY2NiAwIC0xLjUyIDAuMjIgLTEuOTYgMC42NiBzLTAuNjQ2NjYgMS4wODY3IC0wLjYyIDEuOTQgbDAgMC4yIGMwLjAxMzM0IDAuNDEzMzQgMC4wODMzNCAwLjc1NjY4IDAuMjEgMS4wMyBzMC4zIDAuNTA2NjggMC41MiAwLjcwMDAyIHMwLjQ3NjY2IDAuMzYzMzQgMC43NyAwLjUxIHMwLjYxMzM0IDAuMyAwLjk2IDAuNDYgYzAuNTA2NjYgMC4yMjY2NiAxIDAuNDY2NjYgMS40OCAwLjcyIHMwLjkwMzM0IDAuNTUgMS4yNyAwLjg5IHMwLjY2MzMyIDAuNzQgMC44ODk5OCAxLjIgczAuMzQgMS4wMSAwLjM0IDEuNjUgeiBNMTE4LjgwNSAyMCBsLTcuNSAwIGwwIC0xNSBsNy4zNiAwIGwwIDEuNTIgbC01Ljk4IDAgbDAgNS4xNiBsNS45NCAwIGwwIDEuMyBsLTUuOTQgMCBsMCA1LjUgbDYuMTIgMCBsMCAxLjUyIHogTTEyOS43NDU1MDAwMDAwMDAwMiAyMCBsLTYuMTggMCBsMCAtMTUgbDEuNCAwIGwwIDEzLjU2IGw0Ljc4IDAgbDAgMS40NCB6IE0xNDAuNDA2IDIwIGwtNi4xOCAwIGwwIC0xNSBsMS40IDAgbDAgMTMuNTYgbDQuNzggMCBsMCAxLjQ0IHogTTE1OS4zMjcgMjAgbC0xLjUyIDAgbC0wLjAyIC02LjggbC00LjggMCBsMC4wMiA2LjggbC0xLjUgMCBsMCAtMTUgbDEuNSAwIGwtMC4wMiA2Ljc4IGw0LjggMCBsMC4wMiAtNi43OCBsMS41MiAwIGwwIDE1IHogTTE2NS45NDc1IDIwIGwtMS41IDAgbDAgLTE1IGwxLjUgMCBsMCAxNSB6IE0xNzguODI4IDE2LjEyIGMwIDEuNCAtMC4zMTY2NiAyLjQyNjYgLTAuOTUgMy4wOCBzLTEuNjU2NyAwLjk4IC0zLjA3IDAuOTggYy0xLjMwNjcgMCAtMi4yNjM0IC0wLjM2IC0yLjg3IC0xLjA4IHMtMC45MSAtMS43MTMzIC0wLjkxIC0yLjk4IGwwIC03LjIgYzAgLTEuMzYgMC4zMiAtMi4zNzY2IDAuOTYgLTMuMDUgczEuNjQ2NyAtMS4wMSAzLjAyIC0xLjAxIGMxLjMyIDAgMi4yODY2IDAuMzUgMi45IDEuMDUgczAuOTIgMS42OSAwLjkyIDIuOTcgbDAgMS4yNCBsLTEuNDIgMCBjMCAtMC40OCAtMC4wMDMzMzk4IC0wLjk2MzM0IC0wLjAxIC0xLjQ1IHMtMC4wOCAtMC45MiAtMC4yMiAtMS4zIHMtMC4zOCAtMC42OSAtMC43MiAtMC45MyBzLTAuODM2NjYgLTAuMzYgLTEuNDkgLTAuMzYgYy0wLjk2IDAgLTEuNjIzMyAwLjI1IC0xLjk5IDAuNzUgcy0wLjU1IDEuMTk2NyAtMC41NSAyLjA5IGwwIDcuMjggYzAgMC44NjY2NiAwLjE3NjY2IDEuNTMgMC41MyAxLjk5IHMwLjk4MzM0IDAuNjkgMS44OSAwLjY5IHMxLjU2NjcgLTAuMjE2NjYgMS45OCAtMC42NSBzMC42MiAtMS4wOSAwLjYyIC0xLjk3IGwwIC0yLjY2IGwtMi45OCAtMC4wMiBsMCAtMS4zNiBsNC4zNiAwLjAyIGwwIDMuODggeiBNMTkxLjUwODUgMjAgbC0xLjUyIDAgbC0wLjAyIC02LjggbC00LjggMCBsMC4wMiA2LjggbC0xLjUgMCBsMCAtMTUgbDEuNSAwIGwtMC4wMiA2Ljc4IGw0LjggMCBsMC4wMiAtNi43OCBsMS41MiAwIGwwIDE1IHoiLz48L2c+PC9zdmc+';
  return (
    <>
      <div className="flex bg-black">
        <img className="w-2/5 py-4 pl-4 h-2/5" src={svgDataUri} alt="Logo" />
      </div>
    </>
  );
}

export default Header;
