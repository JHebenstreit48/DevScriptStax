export type CliArgs = {
  tab?: string;
  topic?: string;
  within?: string;
  dryRun?: boolean;
  limit?: number;
};

export function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {};

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];

    if (a === '--tab') args.tab = argv[++i];
    else if (a === '--topic') args.topic = argv[++i];
    else if (a === '--within') args.within = argv[++i];

    // ✅ accept both styles + "=true"
    else if (a === '--dry-run' || a === '--dryRun') args.dryRun = true;
    else if (a.startsWith('--dryRun=')) args.dryRun = a.split('=')[1] === 'true';
    else if (a.startsWith('--dry-run=')) args.dryRun = a.split('=')[1] === 'true';

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