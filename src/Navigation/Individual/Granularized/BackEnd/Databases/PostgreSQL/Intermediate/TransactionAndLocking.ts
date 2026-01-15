import type { Subpage } from '@/types/navigation';

const TransactionsAndLocking: Subpage = {
  name: 'Transactions & Locking',
  subpages: [
    {
      name: 'ACID & MVCC',
      path: '/postgresql/intermediate/tx-locking/acid-mvcc',
    },
    {
      name: 'Isolation Levels & Locks',
      path: '/postgresql/intermediate/tx-locking/isolation-locks',
    },
  ],
};

export default TransactionsAndLocking;