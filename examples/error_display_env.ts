// When running the app later, this path will resolve relative to where you are running it from
// (your pwd at that time)
Deno.env.set(
  "DENO_SKIA_PATH",
  Deno.build.os === "darwin"
    ? "lib/libnative_canvas_aarch64.dylib"
    : "lib/libnative_canvas.so"
);
