import { useSharedRsvp } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

type Props = { room: YRoom | null; config: MeshConfig };

export function Feature({ room, config }: Props) {
  const rsvp = useSharedRsvp(room, "open-house:rsvp");
  return (
    <main className="feature-placeholder">
      <h1>{config.appName}</h1>
      <p>{config.description}</p>
      <p className="feature-status">
        {room ? `Connected · ${room.peerCount} peer(s)` : "Connecting…"}
      </p>
      <section aria-label="Your RSVP">
        <h2>Will you make it?</h2>
        {(["yes", "maybe", "no"] as const).map((status) => (
          <button
            key={status}
            type="button"
            aria-pressed={rsvp.mine?.status === status}
            onClick={() => rsvp.set(status)}
          >
            {status} · {rsvp.counts[status]}
          </button>
        ))}
      </section>
      <ul aria-label="Guest responses">
        {rsvp.entries.map((entry) => (
          <li key={entry.peerId}>
            {entry.peerId}: {entry.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
