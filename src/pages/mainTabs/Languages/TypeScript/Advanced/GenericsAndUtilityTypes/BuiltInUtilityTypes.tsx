import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuiltInUtilityTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/GenericsAndUtilityTypes/BuiltInUtilityTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Built-in Utility Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuiltInUtilityTypes;
