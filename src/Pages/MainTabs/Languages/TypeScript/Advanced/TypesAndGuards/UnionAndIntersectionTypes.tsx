import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnionAndIntersectionTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/TypesAndGuards/UnionAndIntersectionTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Union & Intersection Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnionAndIntersectionTypes;
