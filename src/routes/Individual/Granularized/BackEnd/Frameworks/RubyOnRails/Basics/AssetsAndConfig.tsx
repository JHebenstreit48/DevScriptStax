import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AssetPipelineImportmap = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/AssetsAndConfig/AssetPipelineImportmap'));
const Environments = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/AssetsAndConfig/Environments'));

const AssetsAndConfig: RouteObject[] = [
  {
    path: '/backend/frameworks/ruby-on-rails/basics/assets-config/asset-pipeline-importmap',
    element: <AssetPipelineImportmap />,
  },
  {
    path: '/backend/frameworks/ruby-on-rails/basics/assets-config/environments',
    element: <Environments />,
  },
];

export default AssetsAndConfig;
