import { Platform } from "../core/platform.ts";
import { CreateWindowOptions } from "../core/window.ts";
import Glfw from "./glfw/platform.ts";

let platform: Platform;

switch (Deno.build.os) {
  case "windows":
  case "darwin":
  case "linux":
    platform = Glfw;
    break;
  default:
    throw new Error(`Unsupported platform: ${Deno.build.os}`);
}

const {
  Window,
  pollEvents,
  getProcAddress,
  mainloop,
  getInstanceProcAddress,
  getPhysicalDevicePresentationSupport,
  getRequiredInstanceExtensions,
  vulkanSupported,
  Monitor,
  getMonitors,
  getPrimaryMonitor,
} = platform;

/**
 * Creates a new DWM window
 * ```ts
 * const win = createWindow({
 *   title: "Deno Window Manager",
 *   width: 800,
 *   height: 600,
 *   resizable: true,
 * });
 * ```
 */
export function createWindow(options: CreateWindowOptions) {
  return new Window(options);
}

export {
  getInstanceProcAddress,
  getMonitors,
  getPhysicalDevicePresentationSupport,
  getPrimaryMonitor,
  getProcAddress,
  getRequiredInstanceExtensions,
  mainloop,
  Monitor,
  pollEvents,
  vulkanSupported,
  Window,
};
