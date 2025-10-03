import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import ScaleAndReplicate from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/ScalabilityAndReplication';
import SecurityAndCompliance from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/SecurityAndCompliance';
import ConsistencyAndDurability from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/ConsistencyAndDurability';
import Operations from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/Operations';
import StorageEngine from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/StorageEngine';
import ChangeStreamsAndEvents from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/ChangeStreamsAndEvents';
import DataLifecycle from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/DataLifecycle';
import GlobalAndMultiRegion from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/GlobalAndMultiRegion';
import IndexingsAndQuery from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/IndexingAndQuery';
import TimeSeriesAndSpecialized from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/TimeSeries';
import AggregationAndSearch from '@/Navigation/Individual/Granularized/BackEnd/Databases/MongoDB/Advanced/AggregationAndSearch';

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