import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
