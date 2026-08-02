type Props = {
  sourceUpdatedAt: Date | null;
};

export default function NoteMetaLine({ sourceUpdatedAt }: Props) {
  if (!sourceUpdatedAt) return null;

  const formatted = sourceUpdatedAt.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <div className="noteMetaLine" aria-label="Note last updated">
      Note updated: {formatted}
    </div>
  );
}