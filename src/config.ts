import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "mesh-open-house",
  description: "A browser-local RSVP board for a welcoming shared event.",
  accentHex: "#6f52c8",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
