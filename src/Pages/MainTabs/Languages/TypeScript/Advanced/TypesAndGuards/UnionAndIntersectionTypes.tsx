import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UnionAndIntersectionTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/TypesAndGuards/UnionAndIntersectionTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Union & Intersection Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnionAndIntersectionTypes;
