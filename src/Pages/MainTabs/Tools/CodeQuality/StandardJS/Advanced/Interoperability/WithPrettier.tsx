import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WithPrettier = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Interoperability/WithPrettier';

  return (
    <>
      <PageLayout>
        <PageTitle title="With Prettier" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WithPrettier;
