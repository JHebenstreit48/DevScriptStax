import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "CLI & Admin",
      subpages: [
        {
          name: "psql Basics",
          path: "/databases/postgresql/tools/cli-admin/psql-basics"
        },
        {
          name: "Roles & Permissions",
          path: "/databases/postgresql/tools/cli-admin/roles-permissions"
        }
      ]
    },
    {
      name: "Backup & Restore",
      subpages: [
        {
          name: "pg_dump & pg_restore",
          path: "/databases/postgresql/tools/backup-restore/pg-dump-restore"
        },
        {
          name: "Logical vs Physical Backups",
          path: "/databases/postgresql/tools/backup-restore/logical-vs-physical"
        }
      ]
    },
    {
      name: "GUI Clients",
      subpages: [
        {
          name: "pgAdmin (Elephant)",
          path: "/databases/postgresql/tools/gui/pgadmin"
        },
        {
          name: "DBeaver",
          path: "/databases/postgresql/tools/gui/dbeaver"
        },
        {
          name: "TablePlus",
          path: "/databases/postgresql/tools/gui/tableplus"
        },
        {
          name: "DataGrip",
          path: "/databases/postgresql/tools/gui/datagrip"
        }
      ]
    }
  ]
};

export default Tools;