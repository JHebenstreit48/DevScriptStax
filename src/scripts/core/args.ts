export type CliArgs = {
  tab?: string;
  topic?: string;
  within?: string; // NEW: subtree filter, e.g. "PostgreSQL/Basics"
  dryRun?: boolean;
  limit?: number;
};

export function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {};

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];

    if (a === '--tab') args.tab = argv[++i];
    else if (a === '--topic') args.topic = argv[++i];
    else if (a === '--within') args.within = argv[++i]; // NEW
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--limit') {
      const v = Number(argv[++i]);
      if (!Number.isFinite(v) || v <= 0) throw new Error('Invalid --limit value');
      args.limit = v;
    }
  }

  return args;
}

export function matchesFilter(
  opts: { tab?: string; topic?: string },
  leaf: { sectionCrumb: string; topicCrumb: string }
) {
  if (opts.tab && leaf.sectionCrumb !== opts.tab) return false;
  if (opts.topic && leaf.topicCrumb !== opts.topic) return false;
  return true;
}