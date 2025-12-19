import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuiltInUtilityTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/GenericsAndUtilityTypes/BuiltInUtilityTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Built-in Utility Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuiltInUtilityTypes;
