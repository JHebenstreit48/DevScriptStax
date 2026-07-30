import type { Subpage } from '@/types/navigation';

import ScaleAndReplicate from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication';
import SecurityAndCompliance from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance';
import ConsistencyAndDurability from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/ConsistencyAndDurability';
import Operations from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/Operations';
import StorageEngine from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/StorageEngine';
import ChangeStreamsAndEvents from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents';
import DataLifecycle from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/DataLifecycle';
import GlobalAndMultiRegion from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion';
import IndexingsAndQuery from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/IndexingAndQuery';
import TimeSeriesAndSpecialized from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/TimeSeries';
import AggregationAndSearch from '@/navigation/individual/modularized/BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    ScaleAndReplicate,
    SecurityAndCompliance,
    ConsistencyAndDurability,
    Operations,
    StorageEngine,
    ChangeStreamsAndEvents,
    DataLifecycle,
    GlobalAndMultiRegion,
    IndexingsAndQuery,
    TimeSeriesAndSpecialized,
    AggregationAndSearch
  ],
};

export default Advanced;